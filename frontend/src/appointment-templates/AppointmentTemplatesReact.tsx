import React from "react";
import {AppointmentTemplateController} from "./AppointmentTemplateController";


export class AppointmentTemplatesReact extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div id="appointmentTemplates" className="container-fluid d-none">
                <div className="row">
                    <div className="col-sm-12 col-md-9">
                        <div className="col-12">
                            <div id="templateDetail"></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div id="providerFilter">
                            <div className="mbsc-form-group-title">Providers</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        AppointmentTemplateController.getInstance().onDocumentLoaded();
    }
}