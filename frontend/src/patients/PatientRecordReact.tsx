import React from "react";
import {PatientRecordTabularView} from "./PatientRecordTabularView";
import {PatientDemographicsCompositeView} from "./PatientDemographicsCompositeView";


export class PatientRecordReact extends React.Component {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div id="patientRecord" className="container-fluid d-none"></div>
        )
    }

    componentDidMount() {
        const patientView = PatientRecordTabularView.getInstance();
        patientView.addViewToTab('demographics', new PatientDemographicsCompositeView());
        patientView.onDocumentLoaded();
    }
}