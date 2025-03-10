import RegisterForm from "../../components/forms/RegisterForm";

export default function Register() {
    return (
        <main className="min-h-screen">
            <div className="flex flex-col items-center justify-center text-white">
                <div className="w-1/3 bg-gray-800 rounded p-8 mt-10">
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}