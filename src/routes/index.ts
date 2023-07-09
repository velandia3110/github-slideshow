import { Router } from "express";
import{readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`; //directorio actual
const router = Router();

/**
 * Retornar nombre de archivo
 * @param fileName 
 * @returns 
 */
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift();
    return file;
}

//Leer cuantos y cuales archivos en el directorio
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName!= "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Cargando ruta: ${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
    
})

export {router};