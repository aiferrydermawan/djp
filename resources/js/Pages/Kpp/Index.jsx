import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";

function Index(props) {
    const { data: kpp_all, links, from, total, per_page } = props.kpp_all;

    const deleteData = async (id) => {
        router.delete(route("kpp.destroy", { id: id }));
    };

    return (
        <>
            <Head title="KPP" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>KPP</li>
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
                                href={route("kpp.create")}
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
                                        <th>Kode KPP</th>
                                        <th>Nama</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kpp_all.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{from + index}</td>
                                            <td>{item.kode_kpp}</td>
                                            <td>{item.nama}</td>
                                            <td>
                                                <Link
                                                    className={`btn btn-warning btn-xs mr-1`}
                                                    href={route("kpp.edit", {
                                                        id: item.id,
                                                    })}
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
