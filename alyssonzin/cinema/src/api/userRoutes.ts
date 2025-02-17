import { UserLogin } from "../types/schemas/user/LoginSchema";
import { UserRegister } from "../types/schemas/user/RegisterSchema";
import { apiSpringBoot } from "./api";
import { ResponseError } from "./ResponseError";
import { AxiosError } from "axios";
export const createUser = async (user: UserRegister) => {
    user.cpf = user.cpf.replace(/\D/g, ''); //Remove a máscara do CPF
    delete user.confirmPassword; //Remove o campo de confirmação de senha

    try {
        return apiSpringBoot.post('/user', user);
    } catch (error) {
        throw error;
    }
}
export const loginUser = async (user: UserLogin) => {
    try {
        const response = await apiSpringBoot.post('/user/login', user).then(res => res.data);
        return response;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.status === 401 || error.status === 404) {
                const error: ResponseError = {
                    status: 401,
                    message: 'E-mail ou senha incorretos.'
                };
                throw error;
            }
        }

        throw { status: 500, message: 'Ocorreu um erro, tente novamente mais tarde.' } as ResponseError;
    }
}