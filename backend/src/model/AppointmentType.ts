import {model, Schema} from "mongoose";


export interface AppointmentType {
    _id: string;
    name: string;
    icon: string;
    colour:string;
    isStatus:boolean;
}

// 2. Create a Schema corresponding to the document interface.
export const AppointmentTypeSchema = new Schema<AppointmentType>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: false },
    colour: { type: String, required: true },
    isStatus: {type: "boolean",  required:false}
},{collection:'pms-appt-types'});


// 3. Create a Model.
export const AppointmentTypeModel = model<AppointmentType>('AppointmentType', AppointmentTypeSchema);
