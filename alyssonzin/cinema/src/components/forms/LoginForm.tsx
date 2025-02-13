"use client";

import { useForm } from "react-hook-form";
import Input from "../formComponents/Input";
import InputErrorMessage from "../formComponents/InputErrorMessage";
import { User, UserSchema } from "../../types/schemas/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../formComponents/Button";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>({ resolver: zodResolver(UserSchema) });
    return (
        <form>
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

                <div className="w-full">
                    <Button type="submit">Entrar</Button>
                </div>
            </div>
        </form>
    )

}