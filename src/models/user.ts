import {Schema, Types, model, Model} from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
    {
        name:{
            required:true,
            type: String,
        },
        password:{
            required:true,
            type: String,
        },
        email:{
            required:true,
            type: String,
            unique:true,
        },
        description:{
            type: String,
            default:'Hola mi vida',
        },
    },
    {
        versionKey:false,
        timestamps: true,
    }
);

const userModel = model('users', userSchema);

export default userModel;