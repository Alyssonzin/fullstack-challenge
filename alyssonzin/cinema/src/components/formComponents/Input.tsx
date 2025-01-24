import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    type: string,
    placeholder?: string,
    label?: string,
    isError?: boolean,
}

export default function Input({ type, label, placeholder, ...rest }: InputProps) {
    return (
        <div>
            {label && <label>{label}</label>}
            <input
                className={`w-full text-black mt-1 p-2 outline-cyan-700 rounded ${rest.isError ? 'border-red-500' : null}`}
                placeholder={placeholder}
                type={type}
                {...rest}
            />
        </div>
    );
}