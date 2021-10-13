import bCrypt from "bcrypt-nodejs";

export const generateHash = function (password: string): string {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8));
};
