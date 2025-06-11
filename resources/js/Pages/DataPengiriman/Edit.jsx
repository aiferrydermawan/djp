import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import Validation from "@/Components/Validation.jsx";
import DatePicker from "react-datepicker";
function Edit({ errors, permohonan }) {
    const nomorLpad = permohonan.nomor_lpad;
    const tanggalDiterima = permohonan.tanggal_diterima
        ? new Date(permohonan.tanggal_diterima)
        : null;
    const namaWp = permohonan.nama_wp;
    const npwp = permohonan.npwp;
    const jenisPermohonan = permohonan.jenis_permohonan.nama;
    const masaPajak = permohonan.masa_pajak;
    const tahunPajak = permohonan.tahun_pajak;
    const nomorKetetapan = permohonan.nomor_ketetapan;

    const [nomorResiWp, setNomorResiWp] = useState("");
    const [tanggalResiWp, setTanggalResiWp] = useState("");
    const [nomorResiKpp, setNomorResiKpp] = useState("");
    const [tanggalResiKpp, setTanggalResiKpp] = useState("");

    useEffect(() => {
        if (permohonan.data_pengiriman != null) {
            const data = permohonan.data_pengiriman;
            setNomorResiWp(data.nomor_resi_wp);
            setTanggalResiWp(
                data.tanggal_resi_wp ? new Date(data.tanggal_resi_wp) : null,
            );
            setNomorResiKpp(data.nomor_resi_kpp);
            setTanggalResiKpp(
                data.tanggal_resi_kpp ? new Date(data.tanggal_resi_kpp) : null,
            );
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        const tanggal_resi_wp = tanggalResiWp
            ? tanggalResiWp.toLocaleDateString("en-CA")
            : null;
        const tanggal_resi_kpp = tanggalResiKpp
            ? tanggalResiKpp.toLocaleDateString("en-CA")
            : null;
        router.put(route("data-pengiriman.update", permohonan.id), {
            nomorResiWp: nomorResiWp,
            tanggalResiWp: tanggal_resi_wp,
            nomorResiKpp: nomorResiKpp,
            tanggalResiKpp: tanggal_resi_kpp,
        });
    };

    return (
        <>
            <Head title="Edit Data Keputusan" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <a href={route("data-keputusan.index")}>
                                    Data Keputusan
                                </a>
                            </li>
                            <li>Edit</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={edit}>
                                <div className={`grid grid-cols-4 gap-5`}>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor LPAD" />
                                        <Input value={nomorLpad} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="TGL DITERIMA (TGL LPAD/TGL CAP POS)" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalDiterima}
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nama WP" />
                                        <Input value={namaWp} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="NPWP" />
                                        <Input value={npwp} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Jenis Permohonan" />
                                        <Input
                                            value={jenisPermohonan}
                                            disabled
                                        />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Masa Pajak" />
                                        <Input value={masaPajak} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Tahun Pajak" />
                                        <Input value={tahunPajak} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Ketetapan" />
                                        <Input
                                            value={nomorKetetapan}
                                            disabled
                                        />
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Resi WP" />
                                        <Input
                                            type="text"
                                            value={nomorResiWp}
                                            onChange={(e) =>
                                                setNomorResiWp(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorResiWp && (
                                            <Validation>
                                                {errors.nomorResiWp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Tanggal Resi WP" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalResiWp}
                                            onChange={(date) =>
                                                setTanggalResiWp(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                        />
                                        {errors.tanggalResiWp && (
                                            <Validation>
                                                {errors.tanggalResiWp}
                                            </Validation>
                                        )}
                                    </label>
                                    {/* KPP */}
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Resi KPP" />
                                        <Input
                                            type="text"
                                            value={nomorResiKpp}
                                            onChange={(e) =>
                                                setNomorResiKpp(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorResiKpp && (
                                            <Validation>
                                                {errors.nomorResiKpp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Tanggal Resi KPP" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalResiKpp}
                                            onChange={(date) =>
                                                setTanggalResiKpp(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                        />
                                        {errors.tanggalResiKpp && (
                                            <Validation>
                                                {errors.tanggalResiKpp}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-4`}>
                                        <button
                                            type="submit"
                                            className={`btn btn-warning`}
                                        >
                                            Update
                                        </button>
                                    </div>
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
