"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "../../api/userRoutes";
import { cpfMask } from "../../lib/Masks"
import { UserRegister, RegisterSchema } from "../../types/schemas/user/RegisterSchema";
import Input from "../formComponents/Input"
import ErrorMessage from "../formComponents/ErrorMessage"
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../formComponents/Button";

const onSubmit: SubmitHandler<UserRegister> = (data) => {
    createUser(data);
}

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegister>({ resolver: zodResolver(RegisterSchema) });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex space-y-5 flex-col">
                <div className="w-full">
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Nome completo"
                        label="Nome"
                        {...register('name')}
                        isError={!!errors.name}
                    />
                    {errors.name && <ErrorMessage text={errors.name.message} />}
                </div>

                <div className="w-full">
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Seu CPF"
                        label="CPF"
                        {...register('cpf')}
                        isError={!!errors.cpf}
                        onChange={(e) => { e.target.value = cpfMask(e.target.value) }}
                    />
                    {errors.cpf && <ErrorMessage text={errors.cpf.message} />}
                </div>

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
                        placeholder="Crie uma senha"
                        label="Senha"
                        {...register('password')}
                        isError={!!errors.password}
                    />
                    {errors.password && <ErrorMessage text={errors.password.message} />}
                </div>

                <div className="w-full">
                    <Input
                        type="password"
                        autoComplete="off"
                        placeholder="Digite a senha novamente"
                        {...register('confirmPassword')}
                        isError={!!errors.confirmPassword}
                    />
                    {errors.confirmPassword && <ErrorMessage text={errors.confirmPassword.message} />}
                </div >

                <Button type="submit">Cadastrar</Button>
            </div>
        </form>
    )
}