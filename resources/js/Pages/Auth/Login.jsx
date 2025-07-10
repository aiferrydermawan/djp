import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        ip: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div>
            <Head title="Login" />

            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="flex w-full max-w-5xl shadow-lg border rounded overflow-hidden flex-col md:flex-row items-center">

                    {/* Kiri: Gambar SIMANTAN */}
                    <div className="hidden md:block md:w-1/2 bg-white p-4">
                        <img
                            src="/images/login-app.webp"
                            alt="SIMANTAN"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Kanan: Form Login */}
                    <div className="w-full md:w-1/2 p-8">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="user_ip" value="IP" />

                                <TextInput
                                    id="ip"
                                    type="text"
                                    name="user_ip"
                                    value={data.nip}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData("user_ip", e.target.value)}
                                />

                                <InputError message={errors.user_ip} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData("password", e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4 block">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData("remember", e.target.checked)
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                                </label>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm font-medium text-slate-500">
                                    Copyright©bsn2024
                                </div>
                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
