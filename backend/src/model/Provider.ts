import {model, Schema} from "mongoose";

export interface Provider {
    _id: string;
    username: string;
    password:string;
    providerNo: string;
    isCurrent:boolean;
    isAdmin:boolean;
}

// 2. Create a Schema corresponding to the document interface.
export const UserSchema = new Schema<User>({
    _id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    providerNo: { type: String, required: false },
    isCurrent: { type: "boolean", required: true },
    isAdmin: {type: "boolean",  required:true}
},{collection:'pms-users'});

UserSchema.virtual('isProvider').get(function(this:User) {
    let result = false;
    if (this.providerNo) {
        if (this.providerNo.trim().length > 0) {
            result = true;
        }
    }
    return false;
});

// 3. Create a Model.
export const UserModel = model<User>('User', UserSchema);
