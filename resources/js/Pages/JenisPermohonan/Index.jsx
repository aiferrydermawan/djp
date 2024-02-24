import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";

function Index(props) {
    const {
        data: permohonan_all,
        links,
        from,
        total,
        per_page,
    } = props.permohonan_all;

    const deleteData = async (id) => {
        router.delete(route("jenis-permohonan.destroy", { id: id }));
    };

    return (
        <>
            <Head title="KPP" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>Jenis Permohonan</li>
                        </ul>
                    </div>
                    <div className={`mt-5 flex justify-between`}>
                        <div>
                            <Input
                                className={`w-full max-w-xs`}
                                placeholder="Cari"
                            />
                        </div>
                        <div>
                            <Link
                                className={`btn btn-primary`}
                                href={route("jenis-permohonan.create")}
                            >
                                Buat
                            </Link>
                        </div>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <table className={`table table-xs`}>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>IKU</th>
                                        <th>UU</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {permohonan_all.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{from + index}</td>
                                            <td>{item.nama}</td>
                                            <td>{item.jatuh_tempo_iku}</td>
                                            <td>{item.jatuh_tempo_uu}</td>
                                            <td>
                                                <Link
                                                    className={`btn btn-warning btn-xs mr-1`}
                                                    href={route(
                                                        "jenis-permohonan.edit",
                                                        {
                                                            id: item.id,
                                                        },
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteData(item.id)
                                                    }
                                                    className={`btn btn-error btn-xs`}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {per_page < total ? (
                                <div className={`join mt-5`}>
                                    {links.map(
                                        (link, index) =>
                                            link.url && (
                                                <Link
                                                    className={`btn join-item ${link.active ? "btn-active" : null}`}
                                                    key={index}
                                                    href={link.url}
                                                    disabled={link.active}
                                                >
                                                    {link.label}
                                                </Link>
                                            ),
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Index;
