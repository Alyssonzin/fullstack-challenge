import { User } from "../types/schemas/UserSchema";
import { apiSpringBoot } from "./api";

export const createUser = async (user: User) => {
    user.cpf = user.cpf.replace(/\D/g, ''); //Remove a máscara do CPF

    try {
        return apiSpringBoot.post('/user', user);
    } catch (error) {
        console.log(error);
    }
}