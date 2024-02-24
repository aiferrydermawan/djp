import React, { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";
import Select from "@/Components/Select.jsx";

function Edit(props) {
    const errors = props.errors;
    const existingData = props.jenis_permohonan;
    const [showIKU, setShowIKU] = useState(false);
    const [showUU, setShowUU] = useState(false);
    const [nama, setNama] = useState("");
    const [kategoriIKU, setKategoriIKU] = useState("hari");
    const [kuantitasIKU, setKuantitasIKU] = useState(0);
    const [kategoriUU, setKategoriUU] = useState("hari");
    const [kuantitasUU, setKuantitasUU] = useState(0);

    useEffect(() => {
        if (existingData) {
            setNama(existingData.nama || "");
            if (existingData.jatuh_tempo_iku) {
                setShowIKU(true);
                setKategoriIKU(
                    JSON.parse(existingData.jatuh_tempo_iku).kategori || "",
                );
                setKuantitasIKU(
                    JSON.parse(existingData.jatuh_tempo_iku).kuantitas || "",
                );
            }
            if (existingData.jatuh_tempo_uu) {
                setShowUU(true);
                setKategoriUU(
                    JSON.parse(existingData.jatuh_tempo_uu).kategori || "",
                );
                setKuantitasUU(
                    JSON.parse(existingData.jatuh_tempo_uu).kuantitas || "",
                );
            }
        }
    }, [existingData]);
    const store = async (e) => {
        e.preventDefault();
        const data = {
            nama,
            ...(showIKU && {
                jatuh_tempo_iku: {
                    kategori: kategoriIKU,
                    kuantitas: Number(kuantitasIKU),
                },
            }),
            ...(showUU && {
                jatuh_tempo_uu: {
                    kategori: kategoriUU,
                    kuantitas: Number(kuantitasUU),
                },
            }),
        };
        router.post(route("jenis-permohonan.store"), data);
    };
    return (
        <>
            <Head title="Buat KPP" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("jenis-permohonan.index")}>
                                    Jenis Permohonan
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
                                <div className="form-control">
                                    <div className="flex gap-5">
                                        <label className="label flex cursor-pointer">
                                            <span className="label-text mr-2">
                                                IKU
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={showIKU}
                                                onChange={() =>
                                                    setShowIKU(!showIKU)
                                                }
                                            />
                                        </label>
                                        <label className="label flex cursor-pointer">
                                            <span className="label-text mr-2">
                                                UU
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={showUU}
                                                onChange={() =>
                                                    setShowUU(!showUU)
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                                {showIKU && (
                                    <>
                                        <label className={`form-control`}>
                                            <Label name="Kategori IKU" />
                                            <Select
                                                value={kategoriIKU}
                                                onChange={(e) =>
                                                    setKategoriIKU(
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option value="hari">
                                                    Hari
                                                </option>
                                                <option value="minggu">
                                                    Minggu
                                                </option>
                                                <option value="bulan">
                                                    Bulan
                                                </option>
                                                <option value="tahun">
                                                    Tahun
                                                </option>
                                            </Select>
                                        </label>
                                        <label className={`form-control`}>
                                            <Label name="Kuantitas IKU" />
                                            <Input
                                                type="number"
                                                value={kuantitasIKU}
                                                onChange={(e) =>
                                                    setKuantitasIKU(
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Kosong"
                                            />
                                        </label>
                                    </>
                                )}
                                {showUU && (
                                    <>
                                        <label className={`form-control`}>
                                            <Label name="Kategori UU" />
                                            <Select
                                                value={kategoriUU}
                                                onChange={(e) =>
                                                    setKategoriUU(
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option value="hari">
                                                    Hari
                                                </option>
                                                <option value="minggu">
                                                    Minggu
                                                </option>
                                                <option value="bulan">
                                                    Bulan
                                                </option>
                                                <option value="tahun">
                                                    Tahun
                                                </option>
                                            </Select>
                                        </label>
                                        <label className={`form-control`}>
                                            <Label name="Kuantitas UU" />
                                            <Input
                                                type="number"
                                                value={kuantitasUU}
                                                onChange={(e) =>
                                                    setKuantitasUU(
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Kosong"
                                            />
                                        </label>
                                    </>
                                )}
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

export default Edit;
