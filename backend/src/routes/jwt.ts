import jwt from 'jsonwebtoken';
import {Request, Response} from "express";

export function authenticateToken(req: Request, res: Response, next: () => any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

export function generateAccessToken(user:any) {
    // @ts-ignore
    return jwt.sign({user:user}, process.env.TOKEN_SECRET,{expiresIn:"1d"});

}
