import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";
import Select from "@/Components/Select.jsx";

function Edit(props) {
    const errors = props.errors;
    const jenisKetetapanAll = props.jenis_ketetapan_all;
    const jenisPajak = props.jenis_pajak;

    const [jenisKetetapan, setJenisKetetapan] = useState(
        jenisPajak.jenis_ketetapan_id,
    );
    const [kode, setKode] = useState(jenisPajak.kode);
    const [nama, setNama] = useState(jenisPajak.nama);

    const update = async (e) => {
        e.preventDefault();
        router.put(route("jenis-pajak.update", jenisPajak.id), {
            jenis_ketetapan: jenisKetetapan,
            kode: kode,
            nama: nama,
        });
    };
    return (
        <>
            <Head title="Edit Jenis Pajak" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("jenis-pajak.index")}>
                                    Jenis Pajak
                                </Link>
                            </li>
                            <li>Edit</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={update}>
                                <label className={`form-control`}>
                                    <Label name="Jenis Ketetapan" />
                                    <Select
                                        value={jenisKetetapan}
                                        onChange={(e) =>
                                            setJenisKetetapan(e.target.value)
                                        }
                                        placeholder="Type Here"
                                    >
                                        <option value="">Pilih 1</option>
                                        {jenisKetetapanAll.map(
                                            (item, index) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.nama}
                                                </option>
                                            ),
                                        )}
                                    </Select>
                                    {errors.jenis_ketetapan && (
                                        <Validation>
                                            {errors.jenis_ketetapan}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Kode" />
                                    <Input
                                        value={kode}
                                        onChange={(e) =>
                                            setKode(e.target.value)
                                        }
                                        placeholder="Type Here"
                                    />
                                    {errors.kode && (
                                        <Validation>{errors.kode}</Validation>
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
