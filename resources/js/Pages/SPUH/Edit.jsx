import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Validation from "@/Components/Validation.jsx";
import DatePicker from "react-datepicker";
function Edit({ errors, permohonan }) {
    const [nomorLpad, setNomorLpad] = useState(permohonan.nomor_lpad);
    const tanggalDiterima = permohonan.tanggal_diterima
        ? new Date(permohonan.tanggal_diterima)
        : null;
    const [namaWp, setNamaWp] = useState(permohonan.nama_wp);
    const [npwp, setNpwp] = useState(permohonan.npwp);
    const [jenisPermohonan, setJenisPermohonan] = useState(
        permohonan.jenis_permohonan.nama,
    );
    const [jenisPajak, setJenisPajak] = useState(permohonan.jenis_pajak.nama);
    const [masaPajak, setMasaPajak] = useState(permohonan.masa_pajak);
    const [tahunPajak, setTahunPajak] = useState(permohonan.tahun_pajak);
    const [nomorKetetapan, setNomorKetetapan] = useState(
        permohonan.nomor_ketetapan,
    );

    const [nomorSpuh, setNomorSpuh] = useState("");
    const [tanggalSpuh, setTanggalSpuh] = useState("");
    const [tanggalKirimSpuh, setTanggalKirimSpuh] = useState("");
    const [noBaPembahasanAkhir, setNoBaPembahasanAkhir] = useState("");
    const [tanggalBaPembahasanAkhir, setTanggalBaPembahasanAkhir] =
        useState("");

    useEffect(() => {
        if (permohonan.spuh != null) {
            const data = permohonan.spuh;
            setNomorSpuh(data.nomor_spuh);
            setTanggalSpuh(
                data.tanggal_spuh ? new Date(data.tanggal_spuh) : null,
            );
            setTanggalKirimSpuh(
                data.tanggal_kirim_spuh
                    ? new Date(data.tanggal_kirim_spuh)
                    : null,
            );
            setNoBaPembahasanAkhir(data.no_ba_pembahasan_akhir);
            setTanggalBaPembahasanAkhir(
                data.tanggal_ba_pembahasan_akhir
                    ? new Date(data.tanggal_ba_pembahasan_akhir)
                    : null,
            );
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        const tanggal_spuh = tanggalSpuh
            ? tanggalSpuh.toLocaleDateString("en-CA")
            : null;
        const tanggal_kirim_spuh = tanggalKirimSpuh
            ? tanggalKirimSpuh.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_pembahasan_akhir = tanggalBaPembahasanAkhir
            ? tanggalBaPembahasanAkhir.toLocaleDateString("en-CA")
            : null;
        router.put(route("spuh.update", permohonan.id), {
            nomorSpuh: nomorSpuh,
            tanggalSpuh: tanggal_spuh,
            tanggalKirimSpuh: tanggal_kirim_spuh,
            noBaPembahasanAkhir: noBaPembahasanAkhir,
            tanggalBaPembahasanAkhir: tanggal_ba_pembahasan_akhir,
        });
    };

    return (
        <>
            <Head title="Edit SPUH" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("spuh.index")}>SPUH</Link>
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
                                        <Label name="Nomor SPUH" />
                                        <Input
                                            type="text"
                                            value={nomorSpuh}
                                            onChange={(e) =>
                                                setNomorSpuh(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSpuh && (
                                            <Validation>
                                                {errors.nomorSpuh}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal SPUH" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpuh}
                                            onChange={(date) =>
                                                setTanggalSpuh(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                        />
                                        {errors.tanggalSpuh && (
                                            <Validation>
                                                {errors.tanggalSpuh}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Kirim SPUH" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalKirimSpuh}
                                            onChange={(date) =>
                                                setTanggalKirimSpuh(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                        />
                                        {errors.tanggalKirimSpuh && (
                                            <Validation>
                                                {errors.tanggalKirimSpuh}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="No BA Pembahasan Akhir" />
                                        <Input
                                            type="text"
                                            value={noBaPembahasanAkhir}
                                            onChange={(e) =>
                                                setNoBaPembahasanAkhir(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.noBaPembahasanAkhir && (
                                            <Validation>
                                                {errors.noBaPembahasanAkhir}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="No BA Pembahasan Akhir" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalBaPembahasanAkhir}
                                            onChange={(date) =>
                                                setTanggalBaPembahasanAkhir(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
                                        />
                                        {errors.tanggalBaPembahasanAkhir && (
                                            <Validation>
                                                {
                                                    errors.tanggalBaPembahasanAkhir
                                                }
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
