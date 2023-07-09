import { Response } from "express"
const handleHttp = (res:Response, err:string, errRaw?: any) => {
    console.log(errRaw);
    res.status(500);
    res.send({err});
};

export {handleHttp};