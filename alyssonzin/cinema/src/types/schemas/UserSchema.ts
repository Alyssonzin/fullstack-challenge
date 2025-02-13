import { z } from "zod";

export const UserSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório").trim(),
    email: z.string().nonempty("E-mail é obrigatório").email("E-mail inválido").trim(),
    cpf: z.string().nonempty("CPF é obrigatório").trim(),
    password: z.string().nonempty("Senha é obrigatória"),
    confirmPassword: z.string().nonempty("Confirme a senha"),
}).refine(user => user.password === user.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
});

export type User = z.infer<typeof UserSchema>;