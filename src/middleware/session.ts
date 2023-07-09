import {Request, Response, NextFunction} from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequesExt extends Request{
    user?:string | JwtPayload;
}

const checkJWT = (req: RequesExt, res: Response, next: NextFunction) =>{
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as {id:string};
        console.log({isUser});
        if(!isUser){
            res.status(401);
            res.send("NO_TIENES_JWT_VALIDO");
        }else{
            req.user = isUser;
            console.log({jwtByUser});
            next();
        } 
    } catch (error) {
        console.log({error});
        res.status(400);
        res.send("Sesión no válida");
    }
};

export {checkJWT};