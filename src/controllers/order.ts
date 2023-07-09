import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequesExt extends Request{
    user?:string | JwtPayload;
}

const getItems = (req:RequesExt, res:Response) => {
    try {

        res.send({
            data: "Sólo visible por personas con sessión / jwt",
            user:req.user,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

export {getItems};