import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "../../Components/Input.jsx";

function Index(props) {
    const { data: permohonanAll, meta } = props.permohonanAll;

    return (
        <>
            <Head title="SPID dan Pembahasan" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>SPID dan Pembahasan</li>
                        </ul>
                    </div>
                    <div className={`mt-5 flex justify-between`}>
                        <div>
                            <Input
                                className={`max-w-xs`}
                                placeholder="No LPAD"
                            />
                        </div>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <div className="overflow-x-auto">
                                <table className="table table-xs">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>No LPAD</th>
                                            <th>Tanggal LPAD</th>
                                            <th>Nama WP</th>
                                            <th>NPWP</th>
                                            <th>Jenis Permohonan</th>
                                            <th>Jenis Pajak</th>
                                            <th>Masa Pajak</th>
                                            <th>Tahun Pajak</th>
                                            <th>Nomor Ketetapan</th>
                                            <th>Nama Pelaksana</th>
                                            <th>Seksi Pelaksana</th>
                                            <th>Sisa Waktu</th>
                                            <th>SPID dan Pembahasan</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {permohonanAll.map((item, index) => (
                                            <tr key={item.id}>
                                                <th>1</th>
                                                <td>{item.nomor_lpad}</td>
                                                <td>{item.tanggal_lpad}</td>
                                                <td>{item.nama_wp}</td>
                                                <td>{item.npwp}</td>
                                                <td>{item.jenis_permohonan}</td>
                                                <td>{item.jenis_pajak}</td>
                                                <td>{item.masa_pajak}</td>
                                                <td>{item.tahun_pajak}</td>
                                                <td>{item.nomor_ketetapan}</td>
                                                <td>{item.pelaksana}</td>
                                                <td>{item.seksi_pelaksana}</td>
                                                <td>{item.sisa_waktu}</td>
                                                <td>
                                                    {
                                                        item.status_spid_pembahasan
                                                    }
                                                </td>
                                                <td>
                                                    <Link
                                                        className={`btn btn-warning btn-xs mr-1`}
                                                        href={route(
                                                            "spid-pembahasan.edit",
                                                            item.id,
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                        {permohonanAll.length == 0 ? (
                                            <tr>
                                                <th colSpan="13">Kosong</th>
                                            </tr>
                                        ) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Index;
