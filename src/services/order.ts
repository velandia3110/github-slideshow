//logica de negocio, en el controlador no va nada de esto
import { Car } from "../interfaces/carr.interface";
import itemModel from "../models/item";


const getOrders = async () => {
    const responseItem = await itemModel.find({});
    return responseItem;
}

export {getOrders};