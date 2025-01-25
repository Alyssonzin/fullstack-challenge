import UserForm from "../types/forms/UserForm";
import { apiSpringBoot } from "./api";

export const createUser = async (user: UserForm) => {
    try {
        return apiSpringBoot.post('/user', user);
    } catch (error) {
        console.log(error);
        
    }
}