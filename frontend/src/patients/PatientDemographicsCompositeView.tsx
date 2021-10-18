/** @jsx jsxCreateElement */
/*** @jsxFrag jsxCreateFragment */
import {
    AbstractView,
    DataObjectController,
    DataObjectListener,
    jsxCreateFragment,jsxCreateElement
} from "ui-framework-jps";

export class PatientDemographicsCompositeView extends AbstractView implements DataObjectListener {

    constructor() {
        super({resultsContainerId:'',dataSourceId:'patientDemographics'});
    }

    onDocumentLoaded() {
        super.onDocumentLoaded();
        console.log('blah')

        const demographicsView =
            <div id={"demographics-view"} className={"container-fluid"}>
                <div className={"row"}>
                    <div id={"patient-name"} className={"col-12-sm col-md-6"}/>
                    <div id={"patient-contact"} className={"col-12-sm col-md-6"}/>
                </div>
                <div className={"row"}>
                    <div id={"patient-identifiers"} className={"col-12-sm col-md-6"}/>
                </div>
            </div>;

        // @ts-ignore
        this.containerEl.append(demographicsView)
    }


    hidden(): void {
    }

    render(): void {
    }

    show(): void {
    }

    update(controller: DataObjectController, typeName: string, dataObj: any): void {
    }

    create(controller: DataObjectController, typeName: string, dataObj: any): void {
    }

    delete(controller: DataObjectController, typeName: string, dataObj: any): void {
    }


}