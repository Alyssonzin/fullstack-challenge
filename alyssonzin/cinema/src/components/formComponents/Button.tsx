import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type: "submit" | "button";
}

export default function Button({ type, children }: ButtonProps) {
    return (
        <button
            className="bg-sky-600 text-white font-semibold hover:bg-sky-700 transition rounded p-2"
            type={type}
        >
            {children}
        </button>
    )
}