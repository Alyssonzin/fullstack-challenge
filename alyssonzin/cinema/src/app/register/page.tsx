'use client';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface FormData {
    name: string;
    cpf: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
}

const onErrorSubmit: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
}

export default function Register() {
    const { register, handleSubmit, getValues } = useForm<FormData>();
    return(
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit, onErrorSubmit)}>
                    <div className="flex space-y-3 flex-col">
                        <label>
                            <input className="p-1 rounded" {...register('name')} type="text" placeholder="Nome completo" />
                        </label>
                        <label>
                            <input className="p-1 rounded" {...register('cpf', {required: true})} type="text" placeholder="CPF" />
                        </label>

                        <button className="bg-blue-500 text-white rounded p-1" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}