import UserForm from "../types/forms/UserForm";
import { apiSpringBoot } from "./api";

export const createUser = async (user: UserForm) => {
    user.name = user.name.trim();
    user.email = user.email.trim();
    user.cpf = user.cpf.replace(/\D/g, ''); //Remove o que não for numero

    try {
        return apiSpringBoot.post('/user', user);
    } catch (error) {
        console.log(error);
    }
}