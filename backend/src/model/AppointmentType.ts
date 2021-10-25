import {model, Schema} from "mongoose";


export interface AppointmentType {
    _id: string;
    name: string;
    colour:string;
    isStatus:boolean;
}

// 2. Create a Schema corresponding to the document interface.
export const AppointmentTypeSchema = new Schema<AppointmentType>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    colour: { type: String, required: true },
    isStatus: {type: "boolean",  required:false}
},{collection:'pms-appt-types'});


// 3. Create a Model.
export const AppointmentTypeModel = model<AppointmentType>('AppointmentType', AppointmentTypeSchema);
