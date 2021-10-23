/** @jsx jsxCreateElement */
/*** @jsxFrag jsxCreateFragment */
import {
    AbstractView,
    BasicObjectDefinitionFactory,
    copyObject,
    DataObjectController,
    DataObjectDefinition,
    DataObjectListener,
    DetailViewImplementation,
    Field, Form,
    FormDetailViewRenderer,
    isSameMongo,
    jsxCreateElement,
    jsxCreateFragment,
    ObjectDefinitionRegistry,
    StateChangeListener,
    ViewFieldPermissionChecker
} from "ui-framework-jps";
import {PatientListener} from "./PatientListener";
import {Decorator, STATE_NAMES, VIEW_CONTAINER, VIEW_NAME} from "../AppTypes";

import debug from 'debug';
import browserUtil from "ui-framework-jps/dist/framework/util/BrowserUtil";
import {PatientController} from "./PatientController";
import {BootstrapFormConfigHelper} from "ui-framework-jps/dist/framework/ui/helper/BootstrapFormConfigHelper";
import Controller from "../Controller";

const logger = debug('patient-demographic-view');

export class NamePermissionChecker implements ViewFieldPermissionChecker {
    hasPermissionToUpdateItem(item: any): boolean {
        return true;
    }

    hasPermissionToDeleteItem(item: any): boolean {
        return false;
    }

    hasPermissionToEditField(dataObj: any, field: Field): boolean {
        let result = true;
        if (dataObj.isStatus) {
            if (field.getFieldDefinition().id === 'name') {
                result = false; // cannot edit the names of the default status items
            }
        }
        return result;
    }
}

export class PatientDemographicsCompositeView extends AbstractView implements DataObjectListener, PatientListener,StateChangeListener{

    private currentPatient: any | null = null;
    private initialised: boolean = false;
    private nameView: DetailViewImplementation;
    private contactView: DetailViewImplementation;
    private basicsView: DetailViewImplementation;
    private identifiersView: DetailViewImplementation;
    private suburbElementId: string;
    private postCodeElementId: string;
    private contactForm: Form;

    constructor() {
        super({resultsContainerId: '', dataSourceId: 'patientDemographics'});
        this.handlePostCodeSearch = this.handlePostCodeSearch.bind(this);
    }

    hidden(): void {
    }

    onDocumentLoaded() {
        super.onDocumentLoaded();
        this.render();

        PatientController.getInstance().addListener(this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.postCodes,this);
    }

    render(): void {
        logger('render');

        browserUtil.removeAllChildren(this.containerEl);

        const demographicsView =
            <div id={"demographics-view"} className={"container-fluid"}>
                <div className={"row"}>
                    <div id={"patient-name"} className={"col-12-sm col-md-6"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Name Details</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientName}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-basics"} className={"col-12-sm col-md-6"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Basics</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientBasics}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div id={"patient-contact"} className={"col-12-sm col-md-6"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Details</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientContact}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-identifiers"} className={"col-12-sm col-md-6"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Identifiers</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientIdentifiers}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;

        // @ts-ignore
        this.containerEl.append(demographicsView);
    }

    show(): void {
        if (!this.initialised) {

            this.initialised = true;
            // construct all the detail views
            const nameDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.name);
            const contactDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.contact);
            const identifiersDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.identifiers);
            const basicsDef: DataObjectDefinition = ObjectDefinitionRegistry.getInstance().findDefinition(STATE_NAMES.basics);




            if (nameDef) {
                const renderer: FormDetailViewRenderer = new FormDetailViewRenderer(VIEW_CONTAINER.patientName, nameDef, new NamePermissionChecker(), BootstrapFormConfigHelper.getInstance(), true);

                this.nameView = new DetailViewImplementation(
                    {
                        resultsContainerId: VIEW_CONTAINER.patientName,
                        dataSourceId: VIEW_NAME.patientName
                    }, renderer);

                const startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(nameDef);
                this.nameView.onDocumentLoaded();
                this.nameView.initialise(startingDisplayOrder, false, true);
                this.nameView.show();
            }

            if (contactDef) {
                const renderer: FormDetailViewRenderer = new FormDetailViewRenderer(VIEW_CONTAINER.patientContact, contactDef, new NamePermissionChecker(), BootstrapFormConfigHelper.getInstance(), true);

                this.contactView = new DetailViewImplementation(
                    {
                        resultsContainerId: VIEW_CONTAINER.patientContact,
                        dataSourceId: VIEW_NAME.patientContact
                    }, renderer);

                const startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(contactDef);
                this.contactView.onDocumentLoaded();
                this.contactView.initialise(startingDisplayOrder, false, true);
                this.contactView.show();

                this.contactForm = renderer.getForm();
                logger(`Setting up fast search for post codes/suburbs`);
                logger(this.contactForm);
            }
            if (basicsDef) {
                const renderer: FormDetailViewRenderer = new FormDetailViewRenderer(VIEW_CONTAINER.patientBasics, basicsDef, new NamePermissionChecker(), BootstrapFormConfigHelper.getInstance(), true);

                this.basicsView = new DetailViewImplementation(
                    {
                        resultsContainerId: VIEW_CONTAINER.patientBasics,
                        dataSourceId: VIEW_NAME.patientBasics
                    }, renderer);

                const startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(basicsDef);
                this.basicsView.onDocumentLoaded();
                this.basicsView.initialise(startingDisplayOrder, false, true);
                this.basicsView.show();
            }
            if (identifiersDef) {
                const renderer: FormDetailViewRenderer = new FormDetailViewRenderer(VIEW_CONTAINER.patientIdentifiers, identifiersDef, new NamePermissionChecker(), BootstrapFormConfigHelper.getInstance(), true);

                this.identifiersView = new DetailViewImplementation(
                    {
                        resultsContainerId: VIEW_CONTAINER.patientIdentifiers,
                        dataSourceId: VIEW_NAME.patientIdentifiers
                    }, renderer);

                const startingDisplayOrder = BasicObjectDefinitionFactory.getInstance().generateStartingDisplayOrder(identifiersDef);
                this.identifiersView.onDocumentLoaded();
                this.identifiersView.initialise(startingDisplayOrder, false, true);
                this.identifiersView.show();
            }
        }
    }

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {}
    delete(controller: DataObjectController, typeName: string, dataObj: any): void {}


    handlePostCodeSearch(event: Event, ui: any) {
        event.preventDefault();
        event.stopPropagation();
        logger(`User ${ui.item.label} with id ${ui.item.value} selected`);
        // @ts-ignore
        event.target.innerText = '';

        const postCode = Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.postCodes, {_id: ui.item.value});
        if (postCode && this.contactForm) {
            this.contactForm.setFieldValue('suburb',postCode.suburb);
            this.contactForm.setFieldValue('postcode',postCode.postcode);
            this.contactForm.setFieldValue('state',postCode.state);
        }
    }

    patientClosed(patient: any): void {
        logger(`handling patient closed`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient closed - is the current patient`);
                this.currentPatient = null;
                this.basicsView.clearDisplay();
                this.contactView.clearDisplay();
                this.identifiersView.clearDisplay();
                this.nameView.clearDisplay();
            }
        }
    }

    patientLoaded(patient: any): void {
        logger(`handling patient loaded`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient loaded - is the current patient`);
                logger(this.currentPatient);
                if (this.currentPatient.decorator === Decorator.Incomplete) {
                    logger(`handling patient loaded - is the current patient - updating full details`);
                    this.currentPatient = patient;
                    this.basicsView.displayItem(patient);
                    this.contactView.displayItem(patient.contact);
                    this.identifiersView.displayItem(patient.identifiers);
                    this.nameView.displayItem(patient.name);
                }
            }
        }
    }

    patientSaved(patient: any): void {
        logger(`handling patient saved`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient saved - is the current patient`);
                this.currentPatient = patient;
            }
        }

    }

    patientSelected(patient: any): void {
        logger(`handling patient selected`);
        logger(patient);
        this.currentPatient = copyObject(patient);
        this.basicsView.displayItem(patient);
        this.contactView.displayItem(patient.contact);
        this.identifiersView.displayItem(patient.identifiers);
        this.nameView.displayItem(patient.name);

    }

    filterResults(managerName: string, name: string, filterResults: any): void {}

    getListenerName(): string {
        return "";
    }

    stateChanged(managerName: string, name: string, newState: any): void {
        if (name === STATE_NAMES.postCodes) {
            if (this.contactForm) {
                logger(`Handling post codes`);
                const fastSearchValues: any = [];
                newState.forEach((item: any) => {
                    const searchValue = {
                        label: `${item.suburb} ${item.postcode} ${item.state}`,
                        value: item._id,
                    };
                    fastSearchValues.push(searchValue);
                });
                logger (`Number of post codes ${fastSearchValues.length}`);

                this.suburbElementId = this.contactForm.getElementIdForField('suburb');
                let el = document.getElementById(this.suburbElementId);
                logger(el);
                logger(`Setting up fast search for suburbs ${this.suburbElementId}`);
                const postCodeSearchElBySuburb = $(el);
                logger(postCodeSearchElBySuburb);
                // @ts-ignore
                postCodeSearchElBySuburb.on('autocompleteselect',this.handlePostCodeSearch);
                postCodeSearchElBySuburb.autocomplete({source: fastSearchValues});
                postCodeSearchElBySuburb.autocomplete('option', {disabled: false, minLength: 2});

                this.postCodeElementId = this.contactForm.getElementIdForField('postcode');
                el = document.getElementById(this.postCodeElementId);
                logger(`Setting up fast search for suburbs ${this.postCodeElementId}`);
                const postCodeSearchElByPostCode = $(el);
                logger(postCodeSearchElByPostCode);
                // @ts-ignore
                postCodeSearchElByPostCode.on('autocompleteselect',this.handlePostCodeSearch);
                postCodeSearchElByPostCode.autocomplete({source: fastSearchValues});
                postCodeSearchElByPostCode.autocomplete('option', {disabled: false, minLength: 2});

            }
        }

    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {}

    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {}

    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {}
}
