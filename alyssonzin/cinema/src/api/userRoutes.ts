import { UserLogin } from "../types/schemas/user/LoginSchema";
import { UserRegister } from "../types/schemas/user/RegisterSchema";
import { apiSpringBoot } from "./api";

export const createUser = async (user: UserRegister) => {
    user.cpf = user.cpf.replace(/\D/g, ''); //Remove a máscara do CPF
    delete user.confirmPassword; //Remove o campo de confirmação de senha

    try {
        return apiSpringBoot.post('/user', user);
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (user: UserLogin) => {
    try {
        return apiSpringBoot.post('/login', user);
    } catch (error) {
        console.log(error);
    }
}