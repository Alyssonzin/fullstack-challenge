import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    isError?: boolean,
}

export default function Input({ label, isError, ...rest }: InputProps) {
    return (
        <div>
            {label && <label>{label}</label>}
            <input
                className={`w-full text-black mt-1 mb-1 p-2 rounded outline-none ${isError ? 'outline-red-500' : 'outline-cyan-600'}`}
                autoComplete="off"
                {...rest}
            />
        </div>
    );
}