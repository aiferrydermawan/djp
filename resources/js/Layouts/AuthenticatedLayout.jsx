import React, { useState, useEffect } from "react";
import { IconCircleX, IconMenu2 } from "@tabler/icons-react";
import Alert from "../Components/Alert.jsx";
import { Link, usePage } from "@inertiajs/react";
import MenuList from "@/Components/MenuList.jsx";

export default function Authenticated({ children, auth }) {
    const [isMenu, setIsMenu] = useState(true);
    const { session } = usePage().props;

    useEffect(() => {
        const storedData = localStorage.getItem("_x_myMenu");
        if (storedData) {
            setIsMenu(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("_x_myMenu", JSON.stringify(isMenu));
    }, [isMenu]);

    return (
        <div className="flex">
            {isMenu ? (
                <div className="max-h-screen min-h-screen w-1/4 overflow-auto bg-blue-800">
                    <div className="flex justify-between px-8 py-5">
                        <img
                            className="h-12"
                            src="/images/djp-logo-white.png"
                            alt="DJP Logo"
                        />
                        <button onClick={() => setIsMenu(false)}>
                            <IconCircleX className="stroke-white" />
                        </button>
                    </div>
                    <MenuList />
                </div>
            ) : null}
            <div className="max-h-screen min-h-screen w-full grow overflow-y-auto">
                <div className="navbar bg-base-100">
                    <div className="flex-none">
                        {!isMenu ? (
                            <button
                                onClick={() => setIsMenu(true)}
                                className="btn btn-square btn-ghost mr-2"
                            >
                                <IconMenu2 />
                            </button>
                        ) : null}
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col items-start">
                            <div className="text-lg font-medium">
                                Keberatan, Banding dan Pengurangan
                            </div>
                            <p className="text-xs text-slate-500">
                                Kantor Wilayah DJP Sumatera Utara II
                            </p>
                        </div>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            {/*<li>*/}
                            {/*    <a>Link</a>*/}
                            {/*</li>*/}
                            <li>
                                <details>
                                    <summary>Pengaturan</summary>
                                    <ul className="rounded-t-none bg-base-100 p-2">
                                        <li>
                                            <a href={route("user.kata-sandi")}>
                                                Kata Sandi
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Keluar
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    {session && session.success ? (
                        <div className={`px-5 pt-5`}>
                            <Alert status="success">{session.success}</Alert>
                        </div>
                    ) : null}
                    {session && session.warning ? (
                        <div className={`px-5 pt-5`}>
                            <Alert status="warning">{session.warning}</Alert>
                        </div>
                    ) : null}
                    {session && session.error ? (
                        <div className={`px-5 pt-5`}>
                            <Alert status="error">{session.error}</Alert>
                        </div>
                    ) : null}
                    <div>{children}</div>
                    <footer className="p-4 text-sm font-medium">
                        Copyright &copy; bsn2024
                    </footer>
                </div>
            </div>
        </div>
    );
}
