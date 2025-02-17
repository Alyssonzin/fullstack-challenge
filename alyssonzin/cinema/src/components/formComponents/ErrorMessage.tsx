
interface ErrorMessage {
    text?: string;
}

export default function ErrorMessage({ text }: ErrorMessage) {
    return (
        <p className="text-red-500">{text}</p>
    )
}