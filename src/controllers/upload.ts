import { Request, Response } from "express";
import {RequesExt} from "../interfaces/req-ext";
import dbConnect from "../config/mongo";
import {Storage} from "../interfaces/storage";
import {registerUpload} from "../services/storage";
import { handleHttp } from "../utils/error.handle";


const getFile = async (req:RequesExt, res:Response) => {
    try {
        const {user, file} = req;
        console.log(file," archivo");
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        };
        const response = await registerUpload(dataToRegister);
        res.send(response);
    } catch (e) {
        console.log({e});        
        handleHttp(res, 'ERROR_GET_BLOG');
    }
}

export {getFile};