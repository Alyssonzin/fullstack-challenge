"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../formComponents/Input";
import InputErrorMessage from "../formComponents/InputErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../formComponents/Button";
import { LoginSchema, UserLogin } from "../../types/schemas/user/LoginSchema";
import { loginUser } from "../../api/userRoutes";

const onSubmit: SubmitHandler<UserLogin> = (data) => {
    loginUser(data);
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLogin>({ resolver: zodResolver(LoginSchema) });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-y-5 flex-col">
                <div className="w-full">
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Seu e-mail"
                        label="E-mail"
                        {...register('email')}
                        isError={!!errors.email}
                    />
                    {errors.email && <InputErrorMessage text={errors.email.message} />}
                </div>

                <div className="w-full">
                    <Input
                        type="password"
                        autoComplete="off"
                        placeholder="Sua senha"
                        label="Senha"
                        {...register('password')}
                        isError={!!errors.password}
                    />
                    {errors.password && <InputErrorMessage text={errors.password.message} />}
                </div>

                <Button type="submit">Entrar</Button>
            </div>
        </form>
    )

}