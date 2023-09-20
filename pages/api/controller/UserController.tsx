//import { createUserModel, findUserByCpfModel, findUserByEmailModel } from "../model/User";
import * as userModel from "../model/User";

export async function createUser(cpf: string, email: string, password: string, name?: string) {
    const userByCpf = await userModel.findUserByCpfModel(cpf);  
    if (userByCpf != undefined) {
        return {message: "CPF already registered."};
    }

    const userByEmail = await userModel.findUserByEmailModel(email);
    if (userByEmail != null) {
        return {message: "Email already registered."};
    }

    const response = await userModel.createUserModel(cpf, email, password, name);
    return response;
    
}