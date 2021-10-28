import jwt from 'jsonwebtoken';
import {Request, Response} from "express";

export function authenticateToken(req: Request, res: Response, next: () => any) {
    const token = req.headers['authorization'];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) return res.sendStatus(403).json(err);
        req.user = user;
        next();
    });
}

export function generateAccessToken(user:any) {
    // @ts-ignore
    let token = jwt.sign({user:user}, process.env.TOKEN_SECRET,{expiresIn:"1d"});
    return token;

}
