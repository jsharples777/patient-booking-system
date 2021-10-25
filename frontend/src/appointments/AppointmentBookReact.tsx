import React from "react";
import {AppointmentController} from "./AppointmentController";

export class AppointmentBookReact extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div id="appointmentBook" className="container-fluid d-none">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div id="calendarControl"></div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div id="providers">
                            <div className="mbsc-form-group-title">Providers</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 scroll-calendar-detail">
                        <div id="calendarDetail"></div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        AppointmentController.getInstance().onDocumentLoaded();
    }
}