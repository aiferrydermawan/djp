import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";

function Create(props) {
    const title = props.title;
    const kategori = props.kategori;
    const errors = props.errors;
    const myTitle = capitalizeWords(title);

    const [nama, setNama] = useState("");

    const store = async (e) => {
        e.preventDefault();
        router.post(route("referensi.store"), {
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
                            <li>Buat</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={store}>
                                <label className={`form-control`}>
                                    <Label name="Nama" />
                                    <Input
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

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
}

export default Create;
