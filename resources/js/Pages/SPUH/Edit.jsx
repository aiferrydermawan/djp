import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import Validation from "@/Components/Validation.jsx";
function Edit({ errors, permohonan }) {
    const [nomorLpad, setNomorLpad] = useState(permohonan.nomor_lpad);
    const [tanggalDiterima, setTanggalDiterima] = useState(
        permohonan.tanggal_diterima,
    );
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
            setNomorSpuh(permohonan.spuh.nomor_spuh);
            setTanggalSpuh(permohonan.spuh.tanggal_spuh);
            setTanggalKirimSpuh(permohonan.spuh.tanggal_kirim_spuh);
            setNoBaPembahasanAkhir(permohonan.spuh.no_ba_pembahasan_akhir);
            setTanggalBaPembahasanAkhir(
                permohonan.spuh.tanggal_ba_pembahasan_akhir,
            );
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        router.put(route("spuh.update", permohonan.id), {
            nomorSpuh: nomorSpuh,
            tanggalSpuh: tanggalSpuh,
            tanggalKirimSpuh: tanggalKirimSpuh,
            noBaPembahasanAkhir: noBaPembahasanAkhir,
            tanggalBaPembahasanAkhir: tanggalBaPembahasanAkhir,
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
                                        <Input
                                            value={tanggalDiterima}
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
                                        <Input
                                            type="date"
                                            value={tanggalSpuh}
                                            onChange={(e) =>
                                                setTanggalSpuh(e.target.value)
                                            }
                                            placeholder="Kosong"
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
                                        <Input
                                            type="date"
                                            value={tanggalKirimSpuh}
                                            onChange={(e) =>
                                                setTanggalKirimSpuh(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
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
                                        <Input
                                            type="date"
                                            value={tanggalBaPembahasanAkhir}
                                            onChange={(e) =>
                                                setTanggalBaPembahasanAkhir(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
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
