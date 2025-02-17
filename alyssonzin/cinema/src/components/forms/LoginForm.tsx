"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../formComponents/Input";
import ErrorMessage from "../formComponents/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../formComponents/Button";
import { LoginSchema, UserLogin } from "../../types/schemas/user/LoginSchema";
import { loginUser } from "../../api/userRoutes";
import { useState } from "react";

export default function LoginForm() {
    const [error, setError] = useState<string | null>(null);

    const onSubmit: SubmitHandler<UserLogin> = async (data) => {
        try {
            await loginUser(data);
        } catch (error) {
            setError(error.message);
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLogin>({ resolver: zodResolver(LoginSchema) });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-y-5 flex-col">
                {error && <ErrorMessage text={error} />}

                <div className="w-full">
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Seu e-mail"
                        label="E-mail"
                        {...register('email')}
                        isError={!!errors.email}
                    />
                    {errors.email && <ErrorMessage text={errors.email.message} />}
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
                    {errors.password && <ErrorMessage text={errors.password.message} />}
                </div>

                <Button type="submit">Entrar</Button>
            </div>
        </form>
    )

}