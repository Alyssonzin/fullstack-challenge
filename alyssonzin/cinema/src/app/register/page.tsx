'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/formComponents/Input";

interface FormData {
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

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
}

export default function Register() {
    const { register, handleSubmit, formState } = useForm<FormData>();
    return (
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center text-white">
                <div className="w-1/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex space-y-5 flex-col">
                            <div className="w-full">
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Nome completo"
                                    label="Nome"
                                    {...register('name', { required: true })}
                                />
                                {formState.errors.name && <p className="text-red-500">Nome é obrigatório</p>}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Seu CPF"
                                    label="CPF"
                                    {...register('cpf', { required: true })}
                                />
                                {formState.errors.cpf && <p className="text-red-500">CPF é obrigatório</p>}
                            </div>

                            <div className="flex space-x-3">
                                <div className="w-20">
                                    <Input
                                        type="text"
                                        autoComplete="off"
                                        placeholder="DDD"
                                        label="DDD"
                                        {...register('phone.ddd', { required: true })}
                                    />
                                    {formState.errors.phone?.ddd && <p className="text-red-500">DDD é obrigatório</p>}
                                </div>

                                <div className="w-full">
                                    <Input
                                        type="text"
                                        autoComplete="off"
                                        placeholder="Número de telefone"
                                        label="Telefone"
                                        {...register('phone.number', { required: true })}
                                        isError={formState.errors.phone?.number}
                                    />
                                    {formState.errors.phone?.number && <p className="text-red-500">Telefone é obrigatório</p>}
                                </div>
                            </div>

                            <div className="w-full">
                                <Input
                                    type="email"
                                    autoComplete="off"
                                    placeholder="Seu e-mail"
                                    label="E-mail"
                                    {...register('email', { required: true })}
                                />
                                {formState.errors.email && <p className="text-red-500">E-mail é obrigatório</p>}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Crie uma senha"
                                    label="Senha"
                                    {...register('password', { required: true })}
                                />
                                {formState.errors.password && <p className="text-red-500">Senha é obrigatório</p>}
                            </div>

                            <div className="w-full">
                                <Input
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Digite a senha novamente"
                                    {...register('confirmPassword', { required: true })}
                                />
                                {formState.errors.confirmPassword && <p className="text-red-500">confirmPassword é obrigatório</p>}
                            </div>

                            <button className="bg-blue-500 text-white rounded p-1" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}