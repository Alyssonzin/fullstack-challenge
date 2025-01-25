export default interface UserForm {
    name: string;
    cpf: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: {
        ddd: string;
        number: string;
    }
}