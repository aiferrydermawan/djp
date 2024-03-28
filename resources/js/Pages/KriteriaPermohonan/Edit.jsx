import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Validation from "@/Components/Validation.jsx";
import DatePicker from "react-datepicker";
import Select from "react-select";
function Edit({ errors, permohonan, alasan_all, pemenuhan_kriteria_all }) {
    const nomorLpad = permohonan.nomor_lpad;
    const tanggalDiterima = permohonan.tanggal_diterima
        ? new Date(permohonan.tanggal_diterima)
        : null;

    const namaWp = permohonan.nama_wp;
    const npwp = permohonan.npwp;
    const jenisPermohonan = permohonan.jenis_permohonan.nama;

    const jenisPajak = permohonan.jenis_pajak.nama;
    const masaPajak = permohonan.masa_pajak;
    const tahunPajak = permohonan.tahun_pajak;
    const nomorKetetapan = permohonan.nomor_ketetapan;

    const [alasanWp, setAlasanWp] = useState(null);
    const [pemenuhanKriteria, setPemenuhanKriteria] = useState(null);

    useEffect(() => {
        if (permohonan.kriteria_permohonan != null) {
            const data = permohonan.kriteria_permohonan;
            setAlasanWp(JSON.parse(data.alasan_id));
            setPemenuhanKriteria(JSON.parse(data.pemenuhan_kriteria_id));
        }
    }, [permohonan]);

    useEffect(() => {
        console.log(alasanWp);
    }, [alasanWp, pemenuhanKriteria]);
    const edit = async (e) => {
        e.preventDefault();
        router.put(route("kriteria-permohonan.update", permohonan.id), {
            alasanWp: alasanWp,
            pemenuhanKriteria: pemenuhanKriteria,
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
                                <Link href={route("data-keputusan.index")}>
                                    Data Keputusan
                                </Link>
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
                                        <Label name="Jenis Pajak" />
                                        <Input value={jenisPajak} disabled />
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
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Alasan WP" />
                                        <Select
                                            isMulti
                                            value={alasanWp}
                                            onChange={setAlasanWp}
                                            options={alasan_all}
                                        />
                                        {errors.alasanWp && (
                                            <Validation>
                                                {errors.alasanWp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Pemenuhan Kriteria" />
                                        <Select
                                            isMulti
                                            value={pemenuhanKriteria}
                                            onChange={setPemenuhanKriteria}
                                            options={pemenuhan_kriteria_all}
                                        />
                                        {errors.pemenuhanKriteria && (
                                            <Validation>
                                                {errors.pemenuhanKriteria}
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
