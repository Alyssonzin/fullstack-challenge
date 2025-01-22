'use client';
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
    name: string;
    cpf: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
}

export default function Register() {
    const { register, handleSubmit, formState } = useForm<FormData>();
    return (
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex space-y-3 flex-col">
                        <div>
                            <input
                                className="p-1 rounded"
                                {...register('name', { required: true })}
                                type="text"
                                autoComplete="off"
                                placeholder="Nome completo"
                            />
                            {formState.errors.name && <p className="text-red-500">Nome é obrigatório</p>}
                        </div>

                        <div>
                            <input
                                className="p-1 rounded"
                                {...register('cpf', { required: true })}
                                type="text"
                                autoComplete="off"
                                placeholder="CPF"
                            />
                            {formState.errors.cpf && <p className="text-red-500">CPF é obrigatório</p>}
                        </div>

                        <button className="bg-blue-500 text-white rounded p-1" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}