
interface InputErrorMessageProps {
    text?: string;
}

export default function InputErrorMessage({ text }: InputErrorMessageProps) {
    return (
        <p className="text-red-500">{text}</p>
    )
}