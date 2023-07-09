import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import userModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await userModel.findOne({email});
    if(checkIs) return "ALREADY_USER";
    const passHash = await encrypt(password)
    const registerNewUser = await userModel.create({email, password:passHash, name});
    return registerNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await userModel.findOne({email});
    if(!checkIs) return "INVALID_DATA";
    const passwordHash = checkIs.password //el encriptado de la bd
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "PASSWORD_INCORRECT";

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs,
    }

    return data;
}

export {registerNewUser, loginUser};