import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import { jwt_config} from "../config";
import { Payload } from "../types";


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]!;
        const tokenInfo = jwt.verify(token, jwt_config.secret) as Payload;
        console.log(tokenInfo);

        if (tokenInfo.roles.includes("admin")) {
            //@ts-ignore
            req.authorid = tokenInfo.id;
            next();
        } else {
            res.status(403).json({ message: "Def not admin approved. Get outta here, user #" + tokenInfo.id});
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized", error: error.message })
    }
};

export const isAuthor = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]!;
        const tokenInfo = jwt.verify(token, jwt_config.secret) as Payload;
        
        if (tokenInfo.roles.includes("author")) {
            //@ts-ignore
            req.authorid = tokenInfo.id;
            next();
        } else {
            res.status(403).json({ message: "Def not approved. Get outta here, user #" + tokenInfo.id});
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized", error: error.message })
    }
};