'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import InputErrorMessage from "../../components/formComponents/InputErrorMessage";
import { cpfMask } from "../../lib/Masks";
import { User } from "../../types/schemas/UserSchema";
import { createUser } from "../../api/userRoutes";
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from "../../types/schemas/UserSchema";

const onSubmit: SubmitHandler<User> = (data) => {
    createUser(data);
}

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<User>({ resolver: zodResolver(UserSchema) });

    return (
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center text-white">
                <div className="w-1/3 bg-gray-800 rounded p-8 mt-10">
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
                                {errors.name && <InputErrorMessage text={errors.name.message} />}
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
                                {errors.cpf && <InputErrorMessage text={errors.cpf.message} />}
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
                                {errors.email && <InputErrorMessage text={errors.email.message} />}
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
                                {errors.password && <InputErrorMessage text={errors.password.message} />}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Digite a senha novamente"
                                    {...register('confirmPassword')}
                                    isError={!!errors.confirmPassword}
                                />
                                {errors.confirmPassword && <InputErrorMessage text={errors.confirmPassword.message} />}
                            </div >

                            <Button type="submit">Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}