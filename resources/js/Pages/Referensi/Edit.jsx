import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";

function Edit(props) {
    const title = props.title;
    const kategori = props.kategori;
    const errors = props.errors;
    const referensi = props.referensi;
    const myTitle = capitalizeWords(title);

    const [nama, setNama] = useState(referensi.nama);

    const update = async (e) => {
        e.preventDefault();
        router.put(route("referensi.update", referensi.id), {
            nama: nama,
            kategori: kategori,
        });
    };
    return (
        <>
            <Head title={myTitle} />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link
                                    href={route("referensi.index", {
                                        kategori: kategori,
                                    })}
                                >
                                    {myTitle}
                                </Link>
                            </li>
                            <li>Edit</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={update}>
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

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
}

export default Edit;
