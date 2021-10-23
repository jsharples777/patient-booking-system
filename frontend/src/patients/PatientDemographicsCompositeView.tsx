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
    isSameMongo, ItemEvent, ItemViewListener,
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
import {Fragment} from "@mobiscroll/javascript/dist/src/preact/renderer";
import moment from "moment";
import {v4} from "uuid";

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

export class PatientDemographicsCompositeView extends AbstractView implements DataObjectListener, PatientListener,StateChangeListener,ItemViewListener{

    private static ICON_Linked = '<i class="fas fa-link"></i>';
    private static ICON_Unlinked = '<i class="fas fa-unlink"></i>';

    private currentPatient: any | null = null;
    private initialised: boolean = false;
    private nameView: DetailViewImplementation;
    private contactView: DetailViewImplementation;
    private basicsView: DetailViewImplementation;
    private identifiersView: DetailViewImplementation;
    private suburbElementId: string;
    private postCodeElementId: string;
    private contactForm: Form;
    private fastPatientSearchEl: HTMLElement;
    private btnLinkUnlinkEl: HTMLElement;
    private linkToPatientId:string = '';
    private isLinked: boolean;
    private nameForm: Form;
    private basicsForm: Form;
    private identifiersForm: Form;

    constructor() {
        super({resultsContainerId: '', dataSourceId: 'patientDemographics'});
        this.handlePostCodeSearch = this.handlePostCodeSearch.bind(this);
        this.eventLinkUnlink = this.eventLinkUnlink.bind(this);
        this.handlePatientSearch = this.handlePatientSearch.bind(this);
    }

    hidden(): void {
    }

    onDocumentLoaded() {
        super.onDocumentLoaded();
        this.render();

        PatientController.getInstance().addListener(this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.postCodes,this);
        Controller.getInstance().getStateManager().addChangeListenerForName(STATE_NAMES.patientSearch,this);
    }

    render(): void {
        logger('render');

        browserUtil.removeAllChildren(this.containerEl);

        const demographicsView =
            <div id={"demographics-view"} className={"container-fluid mt-4"}>
                <div className={"row"}>
                    <div id={"patient-name"} className={"col-12-sm col-md-6 mb-2"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Name Details</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientName}></div>
                            </div>
                        </div>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Link</h5>
                                <div className="card-text">
                                    <input type={'text'} id={'patient-demographics-fast-patient-search'}></input>
                                    <button id={"contact-link-unlink"} className={"ml-2 btn btn-primary"}><i className="fas fa-link"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-basics"} className={"col-12-sm col-md-6 mb-2"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Basics</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientBasics}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div id={"patient-contact"} className={"col-12-sm col-md-6 mb-2"}>
                        <div className="shadow card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Details</h5>
                                <div className="card-text" id={VIEW_CONTAINER.patientContact}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-identifiers"} className={"col-12-sm col-md-6 mb-2"}>
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
        
        this.fastPatientSearchEl = document.getElementById("patient-demographics-fast-patient-search");
        this.btnLinkUnlinkEl = document.getElementById("contact-link-unlink");
        this.btnLinkUnlinkEl.addEventListener('click', this.eventLinkUnlink);
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

                this.nameForm = renderer.getForm();
                if (this.nameForm) {
                    this.nameForm.addListener(this);
                }
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
                this.contactForm.addListener(this);
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

                this.basicsForm = renderer.getForm();
                if (this.basicsForm) {
                    this.basicsForm.addListener(this);
                }

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

                this.identifiersForm = renderer.getForm();
                if (this.identifiersForm) {
                    this.identifiersForm.addListener(this);
                }
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
            this.markPatientChanged();
        }
    }

    handlePatientSearch(event: Event, ui: any) {
        event.preventDefault();
        event.stopPropagation();
        logger(`User ${ui.item.label} with id ${ui.item.value} selected`);
        // @ts-ignore
        event.target.value = ui.item.label;
        this.linkToPatientId = ui.item.value;
    }

    patientClosed(patient: any): void {
        this.viewHasChanged = false;
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
        this.viewHasChanged = false;
        logger(`handling patient loaded`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient loaded - is the current patient - updating full details`);
                this.currentPatient = patient;
                this.basicsView.displayItem(patient);
                this.contactView.displayItem(patient.contact);
                this.identifiersView.displayItem(patient.identifiers);
                this.nameView.displayItem(patient.name);
                if (this.isLinked) {
                    this.setLinked(true,false);
                }
                logger(this.currentPatient);
            }
        }
    }

    patientSaved(patient: any): void {
        logger(`handling patient saved`);
        if (this.currentPatient && patient) {
            if (isSameMongo(this.currentPatient, patient)) {
                logger(`handling patient saved - is the current patient`);
                this.patientSelected(patient);
            }
        }

    }

    eventLinkUnlink(event:MouseEvent) {
        event.stopPropagation();
        event.preventDefault();

        // reverse any link
        if (this.isLinked) {
            this.setLinked(false);
        }
        else {
            if (this.linkToPatientId.trim().length > 0) {
                this.setLinked(true);
            }
        }
    }

    private setLinked(isLinked:boolean,isChange:boolean = true):void {
        if (isLinked) {
            this.isLinked = true;

            const linkedToPatient = Controller.getInstance().getStateManager().findItemInState(STATE_NAMES.patientSearch,{_id:this.linkToPatientId});
            if (linkedToPatient) { // show the patient linked to
                // @ts-ignore
                this.fastPatientSearchEl.value = `${linkedToPatient.name.firstname} ${linkedToPatient.name.surname}`;

                if (this.currentPatient.contact) {

                    this.currentPatient.oldContact = copyObject(this.currentPatient.contact);

                    this.currentPatient.contact.line1 = linkedToPatient.contact.line1;
                    this.currentPatient.contact.line2 = linkedToPatient.contact.line2;
                    this.currentPatient.contact.suburb = linkedToPatient.contact.suburb;
                    this.currentPatient.contact.postcode = linkedToPatient.contact.postcode;
                    this.currentPatient.contact.country = linkedToPatient.contact.country;
                    this.currentPatient.contact.home = linkedToPatient.contact.home;
                    this.currentPatient.contact.mobile = linkedToPatient.contact.mobile;
                    this.currentPatient.contact.owner = linkedToPatient._id;
                    this.currentPatient.contact._id = linkedToPatient.contact._id;
                }
                else {
                    this.currentPatient.contact = copyObject(linkedToPatient.contact);
                }
                this.contactView.displayItem(this.currentPatient.contact);
                // set the contact elements to readonly
                this.contactForm.setFieldReadOnly('line1');
                this.contactForm.setFieldReadOnly('line2');
                this.contactForm.setFieldReadOnly('suburb');
                this.contactForm.setFieldReadOnly('postcode');
                this.contactForm.setFieldReadOnly('country');
                this.contactForm.setFieldReadOnly('home');
                this.contactForm.setFieldReadOnly('mobile');
            }
            this.btnLinkUnlinkEl.innerHTML = PatientDemographicsCompositeView.ICON_Unlinked;
        }
        else {
            this.isLinked = false;

            if (this.currentPatient.oldContact) {
                this.currentPatient.contact = this.currentPatient.oldContact;
                delete this.currentPatient.oldContact;
            }
            else {
                this.currentPatient.contact._id = v4();
                this.currentPatient.contact.owner = this.currentPatient._id;
            }
            this.contactView.displayItem(this.currentPatient.contact);

            // enable the contact elements
            this.contactForm.clearFieldReadOnly('line1');
            this.contactForm.clearFieldReadOnly('line2');
            this.contactForm.clearFieldReadOnly('suburb');
            this.contactForm.clearFieldReadOnly('postcode');
            this.contactForm.clearFieldReadOnly('country');
            this.contactForm.clearFieldReadOnly('home');
            this.contactForm.clearFieldReadOnly('mobile');
            // @ts-ignore
            this.fastPatientSearchEl.value = '';
            this.linkToPatientId = '';
            this.btnLinkUnlinkEl.innerHTML = PatientDemographicsCompositeView.ICON_Linked;
        }

        if (isChange) {
            this.contactForm.setChanged();
            this.markPatientChanged();
        }
    }

    private resetLink():void {
        this.isLinked = false;

        this.contactForm.clearFieldReadOnly('line1');
        this.contactForm.clearFieldReadOnly('line2');
        this.contactForm.clearFieldReadOnly('suburb');
        this.contactForm.clearFieldReadOnly('postcode');
        this.contactForm.clearFieldReadOnly('country');
        this.contactForm.clearFieldReadOnly('home');
        this.contactForm.clearFieldReadOnly('mobile');
        // @ts-ignore
        this.fastPatientSearchEl.value = '';
        this.linkToPatientId = '';
        this.btnLinkUnlinkEl.innerHTML = PatientDemographicsCompositeView.ICON_Linked;
    }


    patientSelected(patient: any): void {
        this.viewHasChanged = false;
        logger(`handling patient selected`);
        logger(patient);
        this.currentPatient = copyObject(patient);
        this.basicsView.displayItem(patient);
        this.contactView.displayItem(patient.contact);
        this.identifiersView.displayItem(patient.identifiers);
        this.nameView.displayItem(patient.name);

        let dob = "";
        if (patient.dob) dob = moment(patient.dob,'YYYYMMDD').format('DD/MM/YYYY');

        let linkIcon = '<i class="fas fa-link"></i>';
        this.resetLink();

        if (patient.contact) {
            if (patient.contact.owner) {
                if (patient.contact.owner !== patient._id) {
                    linkIcon = '<i class="fas fa-unlink"></i>';
                    this.linkToPatientId = patient.contact.owner;
                    this.setLinked(true,false);
                }
            }
        }
        this.btnLinkUnlinkEl.innerHTML = linkIcon;
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
                postCodeSearchElByPostCode.on('autocompleteselect',this.handlePatientSearch);
                postCodeSearchElByPostCode.autocomplete({source: fastSearchValues});
                postCodeSearchElByPostCode.autocomplete('option', {disabled: false, minLength: 2});

            }
        }
        if (name === STATE_NAMES.patientSearch) {
                logger(`Handling patient search`);
                const fastSearchValues: any = [];
                newState.forEach((item: any) => {
                    const searchValue = {
                        label: `${item.name.firstname} ${item.name.surname}`,
                        value: item._id,
                    };
                    fastSearchValues.push(searchValue);
                });

                logger(`Setting up fast search for suburbs ${this.fastPatientSearchEl}`);
                const autocompletePatientSearch = $(this.fastPatientSearchEl);
                logger(autocompletePatientSearch);
                // @ts-ignore
                autocompletePatientSearch.on('autocompleteselect',this.handlePatientSearch);
                autocompletePatientSearch.autocomplete({source: fastSearchValues});
                autocompletePatientSearch.autocomplete('option', {disabled: false, minLength: 2});
        }
    }

    stateChangedItemAdded(managerName: string, name: string, itemAdded: any): void {}
    stateChangedItemRemoved(managerName: string, name: string, itemRemoved: any): void {}
    stateChangedItemUpdated(managerName: string, name: string, itemUpdated: any, itemNewValue: any): void {}

    valuesChanged(name: string, event: ItemEvent, rowValues?: any): boolean {
        return false;
    }

    viewHasChanges(name: string): void {
        if (name === VIEW_NAME.patientIdentifiers) {
            this.currentPatient.modifiedDates.identifiers = parseInt(moment().format('YYYYMMDDHHmmss'));
        }

        this.markPatientChanged();
    }

    markPatientChanged():void {
        this.viewHasChanged = true;
        this.currentPatient.decorator = Decorator.Modified;
        this.currentPatient.modified = parseInt(moment().format('YYYYMMDDHHmmss'));
        this.currentPatient.modifiedBy = Controller.getInstance().getLoggedInUsername();
        PatientController.getInstance().getStateManager().updateItemInState(STATE_NAMES.openPatients,this.getCurrentPatient(),false);
    }

    getCurrentPatient():any {
        let result = copyObject(this.currentPatient);

        result.contact = this.contactForm.getFormattedDataObject();
        result.name = this.nameForm.getFormattedDataObject();
        result.identifiers = this.identifiersForm.getFormattedDataObject();
        let basics = this.basicsForm.getFormattedDataObject();
        result.dob = basics.dob;
        result.dod = basics.dod;
        result.gender = basics.gender;
        result.ethnicity = basics.ethnicity;
        result.countryofbirth = basics.countryofbirth;

        return result;
    }

    patientChanged(patient: any): void {
        logger(`Patient changed`);
    }
}
