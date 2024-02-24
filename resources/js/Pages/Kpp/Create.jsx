import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";

function Create(props) {
    const errors = props.errors;

    const [kodeKpp, setKodeKpp] = useState("");
    const [nama, setNama] = useState("");

    const store = async (e) => {
        e.preventDefault();
        router.post(route("kpp.store"), {
            kode_kpp: kodeKpp,
            nama: nama,
        });
    };
    return (
        <>
            <Head title="Buat KPP" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("kpp.index")}>KPP</Link>
                            </li>
                            <li>Buat</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={store}>
                                <label className={`form-control`}>
                                    <Label name="Kode KPP" />
                                    <Input
                                        value={kodeKpp}
                                        onChange={(e) =>
                                            setKodeKpp(e.target.value)
                                        }
                                        placeholder="Type Here"
                                    />
                                    {errors.kode_kpp && (
                                        <Validation>
                                            {errors.kode_kpp}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Nama" />
                                    <Input
                                        value={nama}
                                        onChange={(e) =>
                                            setNama(e.target.value)
                                        }
                                        placeholder="Type Here"
                                    />
                                    {errors.nama && (
                                        <Validation>{errors.nama}</Validation>
                                    )}
                                </label>
                                <div className={`mt-4`}>
                                    <button
                                        type="submit"
                                        className={`btn btn-primary`}
                                    >
                                        Buat
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Create;
