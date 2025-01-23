'use client';
import { SubmitHandler, useForm } from "react-hook-form";

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
            <div className="flex flex-col items-center justify-center">
                <div className="w-1/4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex space-y-5 flex-col">
                            <div className="w-full">
                                <input
                                    className="w-full p-1 rounded"
                                    {...register('name', { required: true })}
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Nome completo"
                                />
                                {formState.errors.name && <p className="text-red-500">Nome é obrigatório</p>}
                            </div>

                            <div className="w-full">
                                <input
                                    className="w-full p-1 rounded"
                                    {...register('cpf', { required: true })}
                                    type="text"
                                    autoComplete="off"
                                    placeholder="CPF"
                                />
                                {formState.errors.cpf && <p className="text-red-500">CPF é obrigatório</p>}
                            </div>

                            <div className="flex space-x-3">
                                <div className="w-20">
                                    <input
                                        className="w-full p-1 rounded"
                                        {...register('phone.ddd', { required: true })}
                                        type="text"
                                        autoComplete="off"
                                        placeholder="DDD"
                                    />
                                    {formState.errors.phone?.ddd && <p className="text-red-500">DDD é obrigatório</p>}
                                </div>

                                <div className="w-full">
                                    <input
                                        className="w-full p-1 rounded"
                                        {...register('phone.number', { required: true })}
                                        type="text"
                                        autoComplete="off"
                                        placeholder="Telefone"
                                    />
                                    {formState.errors.phone?.number && <p className="text-red-500">Telefone é obrigatório</p>}
                                </div>
                            </div>

                            <div className="w-full">
                                <input
                                    className="w-full p-1 rounded"
                                    {...register('email', { required: true })}
                                    type="email"
                                    autoComplete="off"
                                    placeholder="E-mail"
                                />
                                {formState.errors.email && <p className="text-red-500">E-mail é obrigatório</p>}
                            </div>

                            <div className="w-full">
                                <input
                                    className="w-full p-1 rounded"
                                    {...register('password', { required: true })}
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Senha"
                                />
                                {formState.errors.password && <p className="text-red-500">Senha é obrigatório</p>}
                            </div>

                            <div className="w-full">
                                <input
                                    className="w-full p-1 rounded"
                                    {...register('confirmPassword', { required: true })}
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Confirme sua senha"
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