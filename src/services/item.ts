//logica de negocio, en el controlador no va nada de esto
import { response } from "express";
import { Car } from "../interfaces/carr.interface";
import itemModel from "../models/item";

const insertCar = async (item:Car) =>{
    const responseInsert = await itemModel.create(item);
    return responseInsert;
};

const getCars = async () => {
    const responseItem = await itemModel.find({});
    return responseItem;
}

const getCar = async (id:string) => {
    const responseItem = await itemModel.findOne({_id:id});
    return responseItem;
}

const updateCar = async (id:string, data:Car) =>{
    const responseItem = await itemModel.findOneAndUpdate(
        {_id:id},
        data,
        {
            new:true
        });
    return responseItem;
}

const deleteCar = async (id:string) =>{
    const responseItem = await itemModel.findByIdAndRemove({_id:id});
    return responseItem;
}

export {insertCar, getCars, getCar, updateCar, deleteCar};