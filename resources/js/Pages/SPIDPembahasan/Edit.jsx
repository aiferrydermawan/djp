import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import Validation from "@/Components/Validation.jsx";
function Edit({ errors, permohonan }) {
    const nomorLpad = permohonan.nomor_lpad;
    const tanggalDiterima = permohonan.tanggal_diterima;

    const namaWp = permohonan.nama_wp;
    const npwp = permohonan.npwp;
    const jenisPermohonan = permohonan.jenis_permohonan.nama;

    const jenisPajak = permohonan.jenis_pajak.nama;
    const masaPajak = permohonan.masa_pajak;
    const tahunPajak = permohonan.tahun_pajak;
    const nomorKetetapan = permohonan.nomor_ketetapan;

    const [spidKpp, setSpidKpp] = useState("");
    const [tanggalSpidKpp, setTanggalSpidKpp] = useState("");
    const [spidKpp2, setSpidKpp2] = useState("");
    const [tanggalSpidKpp2, setTanggalSpidKpp2] = useState("");
    const [spidKpp3, setSpidKpp3] = useState("");
    const [tanggalSpidKpp3, setTanggalSpidKpp3] = useState("");
    const [spidWp1, setSpidWp1] = useState("");
    const [tanggalSpidWp1, setTanggalSpidWp1] = useState("");
    const [spidWp2, setSpidWp2] = useState("");
    const [tanggalSpidWp2, setTanggalSpidWp2] = useState("");
    const [spidWp3, setSpidWp3] = useState("");
    const [tanggalSpidWp3, setTanggalSpidWp3] = useState("");
    const [nomorBaTidakBeriDokumen, setNomorBaTidakBeriDokumen] = useState("");
    const [tanggalBaTidakBeriDokumen, setTanggalBaTidakBeriDokumen] =
        useState("");
    const [nomorSuratPemanggilanPemeriksa, setNomorSuratPemanggilanPemeriksa] =
        useState("");
    const [
        tanggalSuratPemanggilanPemeriksa,
        setTanggalSuratPemanggilanPemeriksa,
    ] = useState("");
    const [
        nomorSuratPemanggilanPemeriksa2,
        setNomorSuratPemanggilanPemeriksa2,
    ] = useState("");
    const [
        tanggalSuratPemanggilanPemeriksa2,
        setTanggalSuratPemanggilanPemeriksa2,
    ] = useState("");
    const [
        nomorSuratPemanggilanPemeriksa3,
        setNomorSuratPemanggilanPemeriksa3,
    ] = useState("");
    const [
        tanggalSuratPemanggilanPemeriksa3,
        setTanggalSuratPemanggilanPemeriksa3,
    ] = useState("");
    const [nomorBaPembahasanPemeriksa, setNomorBaPembahasanPemeriksa] =
        useState("");
    const [tanggalBaPembahasanPemeriksa, setTanggalBaPembahasanPemeriksa] =
        useState("");
    const [nomorBaPembahasanPemeriksa2, setNomorBaPembahasanPemeriksa2] =
        useState("");
    const [tanggalBaPembahasanPemeriksa2, setTanggalBaPembahasanPemeriksa2] =
        useState("");
    const [nomorBaPembahasanPemeriksa3, setNomorBaPembahasanPemeriksa3] =
        useState("");
    const [tanggalBaPembahasanPemeriksa3, setTanggalBaPembahasanPemeriksa3] =
        useState("");
    const [nomorSuratPemanggilanWp, setNomorSuratPemanggilanWp] = useState("");
    const [tanggalSuratPemanggilanWp, setTanggalSuratPemanggilanWp] =
        useState("");
    const [nomorSuratPemanggilanWp2, setNomorSuratPemanggilanWp2] =
        useState("");
    const [tanggalSuratPemanggilanWp2, setTanggalSuratPemanggilanWp2] =
        useState("");
    const [nomorSuratPemanggilanWp3, setNomorSuratPemanggilanWp3] =
        useState("");
    const [tanggalSuratPemanggilanWp3, setTanggalSuratPemanggilanWp3] =
        useState("");
    const [nomorBaPembahasanWp, setNomorBaPembahasanWp] = useState("");
    const [tanggalBaPembahasanWp, setTanggalBaPembahasanWp] = useState("");
    const [nomorBaPembahasanWp2, setNomorBaPembahasanWp2] = useState("");
    const [tanggalBaPembahasanWp2, setTanggalBaPembahasanWp2] = useState("");
    const [nomorBaPembahasanWp3, setNomorBaPembahasanWp3] = useState("");
    const [tanggalBaPembahasanWp3, setTanggalBaPembahasanWp3] = useState("");

    useEffect(() => {
        if (permohonan.spid_pembahasan != null) {
            setSpidKpp(permohonan.spid_pembahasan.spid_kpp);
            setTanggalSpidKpp(permohonan.spid_pembahasan.tanggal_spid_kpp);
            setSpidKpp2(permohonan.spid_pembahasan.spid_kpp_2);
            setTanggalSpidKpp2(permohonan.spid_pembahasan.tanggal_spid_kpp_2);
            setSpidKpp3(permohonan.spid_pembahasan.spid_kpp_3);
            setTanggalSpidKpp3(permohonan.spid_pembahasan.tanggal_spid_kpp_3);
            setSpidWp1(permohonan.spid_pembahasan.spid_wp_1);
            setTanggalSpidWp1(permohonan.spid_pembahasan.tanggal_spid_wp_1);
            setSpidWp2(permohonan.spid_pembahasan.spid_wp_2);
            setTanggalSpidWp2(permohonan.spid_pembahasan.tanggal_spid_wp_2);
            setSpidWp3(permohonan.spid_pembahasan.spid_wp_3);
            setTanggalSpidWp3(permohonan.spid_pembahasan.tanggal_spid_wp_3);
            setNomorBaTidakBeriDokumen(
                permohonan.spid_pembahasan.nomor_ba_tidak_beri_dokumen,
            );
            setTanggalBaTidakBeriDokumen(
                permohonan.spid_pembahasan.tanggal_ba_tidak_beri_dokumen,
            );
            setNomorSuratPemanggilanPemeriksa(
                permohonan.spid_pembahasan.nomor_surat_pemanggilan_pemeriksa,
            );
            setTanggalSuratPemanggilanPemeriksa(
                permohonan.spid_pembahasan.tanggal_surat_pemanggilan_pemeriksa,
            );
            setNomorSuratPemanggilanPemeriksa2(
                permohonan.spid_pembahasan.nomor_surat_pemanggilan_pemeriksa_2,
            );
            setTanggalSuratPemanggilanPemeriksa2(
                permohonan.spid_pembahasan
                    .tanggal_surat_pemanggilan_pemeriksa_2,
            );
            setNomorSuratPemanggilanPemeriksa3(
                permohonan.spid_pembahasan.nomor_surat_pemanggilan_pemeriksa_3,
            );
            setTanggalSuratPemanggilanPemeriksa3(
                permohonan.spid_pembahasan
                    .tanggal_surat_pemanggilan_pemeriksa_3,
            );
            setNomorBaPembahasanPemeriksa(
                permohonan.spid_pembahasan.nomor_ba_pembahasan_pemeriksa,
            );
            setTanggalBaPembahasanPemeriksa(
                permohonan.spid_pembahasan.tanggal_ba_pembahasan_pemeriksa,
            );
            setNomorBaPembahasanPemeriksa2(
                permohonan.spid_pembahasan.nomor_ba_pembahasan_pemeriksa_2,
            );
            setTanggalBaPembahasanPemeriksa2(
                permohonan.spid_pembahasan.tanggal_ba_pembahasan_pemeriksa_2,
            );
            setNomorBaPembahasanPemeriksa3(
                permohonan.spid_pembahasan.nomor_ba_pembahasan_pemeriksa_3,
            );
            setTanggalBaPembahasanPemeriksa3(
                permohonan.spid_pembahasan.tanggal_ba_pembahasan_pemeriksa_3,
            );
            setNomorSuratPemanggilanWp(
                permohonan.spid_pembahasan.nomor_surat_pemanggilan_wp,
            );
            setTanggalSuratPemanggilanWp(
                permohonan.spid_pembahasan.tanggal_surat_pemanggilan_wp,
            );
            setNomorSuratPemanggilanWp2(
                permohonan.spid_pembahasan.nomor_surat_pemanggilan_wp_2,
            );
            setTanggalSuratPemanggilanWp2(
                permohonan.spid_pembahasan.tanggal_surat_pemanggilan_wp_2,
            );
            setNomorSuratPemanggilanWp3(
                permohonan.spid_pembahasan.nomor_surat_pemanggilan_wp_3,
            );
            setTanggalSuratPemanggilanWp3(
                permohonan.spid_pembahasan.tanggal_surat_pemanggilan_wp_3,
            );
            setNomorBaPembahasanWp(
                permohonan.spid_pembahasan.nomor_ba_pembahasan_wp,
            );
            setTanggalBaPembahasanWp(
                permohonan.spid_pembahasan.tanggal_ba_pembahasan_wp,
            );
            setNomorBaPembahasanWp2(
                permohonan.spid_pembahasan.nomor_ba_pembahasan_wp_2,
            );
            setTanggalBaPembahasanWp2(
                permohonan.spid_pembahasan.tanggal_ba_pembahasan_wp_2,
            );
            setNomorBaPembahasanWp3(
                permohonan.spid_pembahasan.nomor_ba_pembahasan_wp_3,
            );
            setTanggalBaPembahasanWp3(
                permohonan.spid_pembahasan.tanggal_ba_pembahasan_wp_3,
            );
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        router.put(route("spid-pembahasan.update", permohonan.id), {
            spidKpp: spidKpp,
            tanggalSpidKpp: tanggalSpidKpp,
            spidKpp2: spidKpp2,
            tanggalSpidKpp2: tanggalSpidKpp2,
            spidKpp3: spidKpp3,
            tanggalSpidKpp3: tanggalSpidKpp3,
            spidWp1: spidWp1,
            tanggalSpidWp1: tanggalSpidWp1,
            spidWp2: spidWp2,
            tanggalSpidWp2: tanggalSpidWp2,
            spidWp3: spidWp3,
            tanggalSpidWp3: tanggalSpidWp3,
            nomorBaTidakBeriDokumen: nomorBaTidakBeriDokumen,
            tanggalBaTidakBeriDokumen: tanggalBaTidakBeriDokumen,
            nomorSuratPemanggilanPemeriksa: nomorSuratPemanggilanPemeriksa,
            tanggalSuratPemanggilanPemeriksa: tanggalSuratPemanggilanPemeriksa,
            nomorSuratPemanggilanPemeriksa2: nomorSuratPemanggilanPemeriksa2,
            tanggalSuratPemanggilanPemeriksa2:
                tanggalSuratPemanggilanPemeriksa2,
            nomorSuratPemanggilanPemeriksa3: nomorSuratPemanggilanPemeriksa3,
            tanggalSuratPemanggilanPemeriksa3:
                tanggalSuratPemanggilanPemeriksa3,
            nomorBaPembahasanPemeriksa: nomorBaPembahasanPemeriksa,
            tanggalBaPembahasanPemeriksa: tanggalBaPembahasanPemeriksa,
            nomorBaPembahasanPemeriksa2: nomorBaPembahasanPemeriksa2,
            tanggalBaPembahasanPemeriksa2: tanggalBaPembahasanPemeriksa2,
            nomorBaPembahasanPemeriksa3: nomorBaPembahasanPemeriksa3,
            tanggalBaPembahasanPemeriksa3: tanggalBaPembahasanPemeriksa3,
            nomorSuratPemanggilanWp: nomorSuratPemanggilanWp,
            tanggalSuratPemanggilanWp: tanggalSuratPemanggilanWp,
            nomorSuratPemanggilanWp2: nomorSuratPemanggilanWp2,
            tanggalSuratPemanggilanWp2: tanggalSuratPemanggilanWp2,
            nomorSuratPemanggilanWp3: nomorSuratPemanggilanWp3,
            tanggalSuratPemanggilanWp3: tanggalSuratPemanggilanWp3,
            nomorBaPembahasanWp: nomorBaPembahasanWp,
            tanggalBaPembahasanWp: tanggalBaPembahasanWp,
            nomorBaPembahasanWp2: nomorBaPembahasanWp2,
            tanggalBaPembahasanWp2: tanggalBaPembahasanWp2,
            nomorBaPembahasanWp3: nomorBaPembahasanWp3,
            tanggalBaPembahasanWp3: tanggalBaPembahasanWp3,
        });
    };

    return (
        <>
            <Head title="Penelitian Formal" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("spid-pembahasan.index")}>
                                    SPID dan Pembahasan
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
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="TGL DITERIMA" />
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
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="NPWP" />
                                        <Input value={npwp} disabled />
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Jenis Permohonan" />
                                        <Input
                                            value={jenisPermohonan}
                                            disabled
                                        />
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Jenis Pajak" />
                                        <Input value={jenisPajak} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Masa Pajak" />
                                        <Input value={masaPajak} disabled />
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
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
                                        <Label name="SPID KPP" />
                                        <Input
                                            type="text"
                                            value={spidKpp}
                                            onChange={(e) =>
                                                setSpidKpp(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.spidKpp && (
                                            <Validation>
                                                {errors.spidKpp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Tanggal SPID KPP" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSpidKpp}
                                            onChange={(e) =>
                                                setTanggalSpidKpp(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSpidKpp && (
                                            <Validation>
                                                {errors.tanggalSpidKpp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="SPID KPP 2" />
                                        <Input
                                            type="text"
                                            value={spidKpp2}
                                            onChange={(e) =>
                                                setSpidKpp2(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.spidKpp2 && (
                                            <Validation>
                                                {errors.spidKpp2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal SPID KPP 2" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSpidKpp2}
                                            onChange={(e) =>
                                                setTanggalSpidKpp2(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSpidKpp2 && (
                                            <Validation>
                                                {errors.tanggalSpidKpp2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="SPID KPP 3" />
                                        <Input
                                            type="text"
                                            value={spidKpp3}
                                            onChange={(e) =>
                                                setSpidKpp3(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.spidKpp3 && (
                                            <Validation>
                                                {errors.spidKpp3}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal SPID KPP 3" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSpidKpp3}
                                            onChange={(e) =>
                                                setTanggalSpidKpp3(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSpidKpp3 && (
                                            <Validation>
                                                {errors.tanggalSpidKpp3}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="SPID WP 1" />
                                        <Input
                                            type="text"
                                            value={spidWp1}
                                            onChange={(e) =>
                                                setSpidWp1(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.spidWp1 && (
                                            <Validation>
                                                {errors.spidWp1}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal SPID WP 1" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSpidWp1}
                                            onChange={(e) =>
                                                setTanggalSpidWp1(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSpidWp1 && (
                                            <Validation>
                                                {errors.tanggalSpidWp1}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="SPID WP 2" />
                                        <Input
                                            type="text"
                                            value={spidWp2}
                                            onChange={(e) =>
                                                setSpidWp2(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.spidWp2 && (
                                            <Validation>
                                                {errors.spidWp2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal SPID WP 2" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSpidWp2}
                                            onChange={(e) =>
                                                setTanggalSpidWp2(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSpidWp2 && (
                                            <Validation>
                                                {errors.tanggalSpidWp2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="SPID WP 3" />
                                        <Input
                                            type="text"
                                            value={spidWp3}
                                            onChange={(e) =>
                                                setSpidWp3(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.spidWp3 && (
                                            <Validation>
                                                {errors.spidWp3}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal SPID WP 3" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSpidWp3}
                                            onChange={(e) =>
                                                setTanggalSpidWp3(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSpidWp3 && (
                                            <Validation>
                                                {errors.tanggalSpidWp3}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Tidak Beri Dokumen" />
                                        <Input
                                            type="text"
                                            value={nomorBaTidakBeriDokumen}
                                            onChange={(e) =>
                                                setNomorBaTidakBeriDokumen(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaTidakBeriDokumen && (
                                            <Validation>
                                                {errors.nomorBaTidakBeriDokumen}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Tidak Beri Dokumen" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalBaTidakBeriDokumen}
                                            onChange={(e) =>
                                                setTanggalBaTidakBeriDokumen(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaTidakBeriDokumen && (
                                            <Validation>
                                                {
                                                    errors.tanggalBaTidakBeriDokumen
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor Surat Pemanggilan Pemeriksa" />
                                        <Input
                                            type="text"
                                            value={
                                                nomorSuratPemanggilanPemeriksa
                                            }
                                            onChange={(e) =>
                                                setNomorSuratPemanggilanPemeriksa(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSuratPemanggilanPemeriksa && (
                                            <Validation>
                                                {
                                                    errors.nomorSuratPemanggilanPemeriksa
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal Surat Pemanggilan Pemeriksa" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={
                                                tanggalSuratPemanggilanPemeriksa
                                            }
                                            onChange={(e) =>
                                                setTanggalSuratPemanggilanPemeriksa(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSuratPemanggilanPemeriksa && (
                                            <Validation>
                                                {
                                                    errors.tanggalSuratPemanggilanPemeriksa
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorSuratPemanggilanPemeriksa2 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor Surat Pemanggilan Pemeriksa 2" />
                                        <Input
                                            type="text"
                                            value={
                                                nomorSuratPemanggilanPemeriksa2
                                            }
                                            onChange={(e) =>
                                                setNomorSuratPemanggilanPemeriksa2(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSuratPemanggilanPemeriksa2 && (
                                            <Validation>
                                                {
                                                    errors.nomorSuratPemanggilanPemeriksa2
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal Surat Pemanggilan Pemeriksa 2" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={
                                                tanggalSuratPemanggilanPemeriksa2
                                            }
                                            onChange={(e) =>
                                                setTanggalSuratPemanggilanPemeriksa2(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSuratPemanggilanPemeriksa2 && (
                                            <Validation>
                                                {
                                                    errors.tanggalSuratPemanggilanPemeriksa2
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorSuratPemanggilanPemeriksa3 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor Surat Pemanggilan Pemeriksa 3" />
                                        <Input
                                            type="text"
                                            value={
                                                nomorSuratPemanggilanPemeriksa3
                                            }
                                            onChange={(e) =>
                                                setNomorSuratPemanggilanPemeriksa3(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSuratPemanggilanPemeriksa3 && (
                                            <Validation>
                                                {
                                                    errors.nomorSuratPemanggilanPemeriksa3
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal Surat Pemanggilan Pemeriksa 3" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={
                                                tanggalSuratPemanggilanPemeriksa3
                                            }
                                            onChange={(e) =>
                                                setTanggalSuratPemanggilanPemeriksa3(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSuratPemanggilanPemeriksa3 && (
                                            <Validation>
                                                {
                                                    errors.tanggalSuratPemanggilanPemeriksa3
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorBaPembahasanPemeriksa */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Pembahasan Pemeriksa" />
                                        <Input
                                            type="text"
                                            value={nomorBaPembahasanPemeriksa}
                                            onChange={(e) =>
                                                setNomorBaPembahasanPemeriksa(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaPembahasanPemeriksa && (
                                            <Validation>
                                                {
                                                    errors.nomorBaPembahasanPemeriksa
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Pembahasan Pemeriksa" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalBaPembahasanPemeriksa}
                                            onChange={(e) =>
                                                setTanggalBaPembahasanPemeriksa(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaPembahasanPemeriksa && (
                                            <Validation>
                                                {
                                                    errors.tanggalBaPembahasanPemeriksa
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorBaPembahasanPemeriksa2 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Pembahasan Pemeriksa 2" />
                                        <Input
                                            type="text"
                                            value={nomorBaPembahasanPemeriksa2}
                                            onChange={(e) =>
                                                setNomorBaPembahasanPemeriksa2(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaPembahasanPemeriksa2 && (
                                            <Validation>
                                                {
                                                    errors.nomorBaPembahasanPemeriksa2
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Pembahasan Pemeriksa 2" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={
                                                tanggalBaPembahasanPemeriksa2
                                            }
                                            onChange={(e) =>
                                                setTanggalBaPembahasanPemeriksa2(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaPembahasanPemeriksa2 && (
                                            <Validation>
                                                {
                                                    errors.tanggalBaPembahasanPemeriksa2
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorBaPembahasanPemeriksa3 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Pembahasan Pemeriksa 3" />
                                        <Input
                                            type="text"
                                            value={nomorBaPembahasanPemeriksa3}
                                            onChange={(e) =>
                                                setNomorBaPembahasanPemeriksa3(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaPembahasanPemeriksa3 && (
                                            <Validation>
                                                {
                                                    errors.nomorBaPembahasanPemeriksa3
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Pembahasan Pemeriksa 3" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={
                                                tanggalBaPembahasanPemeriksa3
                                            }
                                            onChange={(e) =>
                                                setTanggalBaPembahasanPemeriksa3(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaPembahasanPemeriksa3 && (
                                            <Validation>
                                                {
                                                    errors.tanggalBaPembahasanPemeriksa3
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorSuratPemanggilanWp */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor Surat Pemanggilan WP" />
                                        <Input
                                            type="text"
                                            value={nomorSuratPemanggilanWp}
                                            onChange={(e) =>
                                                setNomorSuratPemanggilanWp(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSuratPemanggilanWp && (
                                            <Validation>
                                                {errors.nomorSuratPemanggilanWp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal Surat Pemanggilan WP" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSuratPemanggilanWp}
                                            onChange={(e) =>
                                                setTanggalSuratPemanggilanWp(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSuratPemanggilanWp && (
                                            <Validation>
                                                {
                                                    errors.tanggalSuratPemanggilanWp
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorSuratPemanggilanWp2 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor Surat Pemanggilan WP 2" />
                                        <Input
                                            type="text"
                                            value={nomorSuratPemanggilanWp2}
                                            onChange={(e) =>
                                                setNomorSuratPemanggilanWp2(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSuratPemanggilanWp2 && (
                                            <Validation>
                                                {
                                                    errors.nomorSuratPemanggilanWp2
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal Surat Pemanggilan WP 2" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSuratPemanggilanWp2}
                                            onChange={(e) =>
                                                setTanggalSuratPemanggilanWp2(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSuratPemanggilanWp2 && (
                                            <Validation>
                                                {
                                                    errors.tanggalSuratPemanggilanWp2
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorSuratPemanggilanWp3 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor Surat Pemanggilan WP 3" />
                                        <Input
                                            type="text"
                                            value={nomorSuratPemanggilanWp3}
                                            onChange={(e) =>
                                                setNomorSuratPemanggilanWp3(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorSuratPemanggilanWp3 && (
                                            <Validation>
                                                {
                                                    errors.nomorSuratPemanggilanWp3
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal Surat Pemanggilan WP 3" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalSuratPemanggilanWp3}
                                            onChange={(e) =>
                                                setTanggalSuratPemanggilanWp3(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalSuratPemanggilanWp3 && (
                                            <Validation>
                                                {
                                                    errors.tanggalSuratPemanggilanWp3
                                                }
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorBaPembahasanWp */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Pembahasan WP" />
                                        <Input
                                            type="text"
                                            value={nomorBaPembahasanWp}
                                            onChange={(e) =>
                                                setNomorBaPembahasanWp(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaPembahasanWp && (
                                            <Validation>
                                                {errors.nomorBaPembahasanWp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Pembahasan WP" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalBaPembahasanWp}
                                            onChange={(e) =>
                                                setTanggalBaPembahasanWp(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaPembahasanWp && (
                                            <Validation>
                                                {errors.tanggalBaPembahasanWp}
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorBaPembahasanWp2 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Pembahasan WP 2" />
                                        <Input
                                            type="text"
                                            value={nomorBaPembahasanWp2}
                                            onChange={(e) =>
                                                setNomorBaPembahasanWp2(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaPembahasanWp2 && (
                                            <Validation>
                                                {errors.nomorBaPembahasanWp2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Pembahasan WP 2" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalBaPembahasanWp2}
                                            onChange={(e) =>
                                                setTanggalBaPembahasanWp2(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaPembahasanWp2 && (
                                            <Validation>
                                                {errors.tanggalBaPembahasanWp2}
                                            </Validation>
                                        )}
                                    </label>
                                    {/* nomorBaPembahasanWp3 */}
                                    <label className="form-control col-span-2">
                                        <Label name="Nomor BA Pembahasan WP 3" />
                                        <Input
                                            type="text"
                                            value={nomorBaPembahasanWp3}
                                            onChange={(e) =>
                                                setNomorBaPembahasanWp3(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nomorBaPembahasanWp3 && (
                                            <Validation>
                                                {errors.nomorBaPembahasanWp3}
                                            </Validation>
                                        )}
                                    </label>
                                    <label className="form-control col-span-2">
                                        <Label name="Tanggal BA Pembahasan WP 3" />
                                        <Input
                                            className="w-1/2"
                                            type="date"
                                            value={tanggalBaPembahasanWp3}
                                            onChange={(e) =>
                                                setTanggalBaPembahasanWp3(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalBaPembahasanWp3 && (
                                            <Validation>
                                                {errors.tanggalBaPembahasanWp3}
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
