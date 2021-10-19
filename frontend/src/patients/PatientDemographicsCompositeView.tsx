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

        const demographicsView =
            <div id={"demographics-view"} className={"container-fluid"}>
                <div className={"row"}>
                    <div id={"patient-name"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Name Details</h5>
                                <div className="card-text" id={"patient-name-details"}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-basics"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Details</h5>
                                <div className="card-text" id={"patient-basics-details"}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div id={"patient-contact"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contact Details</h5>
                                <div className="card-text" id={"patient-contact-details"}></div>
                            </div>
                        </div>
                    </div>
                    <div id={"patient-identifiers"} className={"col-12-sm col-md-6"}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Identifiers</h5>
                                <div className="card-text" id={"patient-contact-details"}></div>
                            </div>
                        </div>
                    </div>
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
