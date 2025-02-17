import Link from "next/link";
import LoginForm from "../../components/forms/LoginForm";

export default function Login() {
    return (
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center text-white">
                <div className="w-1/3 bg-gray-800 rounded p-8 mt-10">
                    <LoginForm />

                    <div className="mt-8 text-center">
                        <p className="text-sm font-semibold">
                            É novo por aqui?
                            <Link
                                className="ml-2 text-blue-500 hover:underline"
                                href="/register">
                                Crie uma conta
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}