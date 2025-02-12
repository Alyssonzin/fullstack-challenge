'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import InputErrorMessage from "../../components/formComponents/InputErrorMessage";
import { cpfMask } from "../../lib/Masks";
import UserForm from "../../types/forms/UserForm";
import { createUser } from "../../api/userRoutes";

const onSubmit: SubmitHandler<UserForm> = (data) => {
    createUser(data);
}

export default function Register() {
    const { register, handleSubmit, formState } = useForm<UserForm>();
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
                                    {...register('name', { required: true })}
                                    isError={!!formState.errors.name}
                                />
                                {formState.errors.name && <InputErrorMessage text="Nome é obrigatório" />}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Seu CPF"
                                    label="CPF"
                                    {...register('cpf', { required: true })}
                                    isError={!!formState.errors.cpf}
                                    onChange={(e) => { e.target.value = cpfMask(e.target.value) }}
                                />
                                {formState.errors.cpf && <InputErrorMessage text="CPF é obrigatório" />}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="email"
                                    autoComplete="off"
                                    placeholder="Seu e-mail"
                                    label="E-mail"
                                    {...register('email', { required: true })}
                                    isError={!!formState.errors.email}
                                />
                                {formState.errors.email && <InputErrorMessage text="E-mail é obrigatório" />}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Crie uma senha"
                                    label="Senha"
                                    {...register('password', { required: true })}
                                    isError={!!formState.errors.password}
                                />
                                {formState.errors.password && <InputErrorMessage text="Senha é obrigatório" />}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Digite a senha novamente"
                                    {...register('confirmPassword', { required: true })}
                                    isError={!!formState.errors.confirmPassword}
                                />
                                {formState.errors.confirmPassword && <InputErrorMessage text="Nome é obrigatório" />}
                            </div >

                            <Button type="submit">Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}