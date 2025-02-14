import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().nonempty("Informe seu e-mail").email("E-mail inválido").trim(),
    password: z.string().nonempty("Informe sua senha"),
})

export type UserLogin = z.infer<typeof LoginSchema>;