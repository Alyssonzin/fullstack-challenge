import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    placeholder?: string,
    label?: string,
    isError?: boolean,
}

export default function Input({ type, label, placeholder, isError,...rest }: InputProps) {
    return (
        <div>
            {label && <label>{label}</label>}
            <input
                className={`w-full text-black mt-1 mb-1 p-2 rounded outline-none ${isError? 'outline-red-500': 'outline-cyan-600'}`}
                placeholder={placeholder}
                type={type}
                {...rest}
            />
        </div>
    );
}