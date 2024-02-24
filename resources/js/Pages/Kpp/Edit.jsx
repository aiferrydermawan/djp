import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";

function Edit(props) {
    const errors = props.errors;
    const kpp = props.kpp;

    const [kodeKpp, setKodeKpp] = useState(kpp.kode_kpp);
    const [nama, setNama] = useState(kpp.nama);

    const update = async (e) => {
        e.preventDefault();
        router.put(route("kpp.update", kpp.id), {
            kode_kpp: kodeKpp,
            nama: nama,
        });
    };
    return (
        <>
            <Head title="Edit KPP" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("kpp.index")}>KPP</Link>
                            </li>
                            <li>Edit</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={update}>
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
                                        className={`btn btn-warning`}
                                    >
                                        Edit
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

export default Edit;
