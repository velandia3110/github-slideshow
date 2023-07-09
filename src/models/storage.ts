import { Schema, Types, Model, model } from "mongoose";

const StorageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String,
        },
        idUser: {
            type: String,
        },
        path: {
            type: String,
        },       
    },
    {
        versionKey: false,
        timestamps:true,
    }
);

const StorageModel = model("storage", StorageSchema)
export default StorageModel;