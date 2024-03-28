import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
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
            const data = permohonan.spid_pembahasan;
            setSpidKpp(data.spid_kpp);
            setTanggalSpidKpp(
                data.tanggal_spid_kpp ? new Date(data.tanggal_spid_kpp) : null,
            );
            setSpidKpp2(data.spid_kpp_2);
            setTanggalSpidKpp2(
                data.tanggal_spid_kpp_2
                    ? new Date(data.tanggal_spid_kpp_2)
                    : null,
            );
            setSpidKpp3(data.spid_kpp_3);
            setTanggalSpidKpp3(
                data.tanggal_spid_kpp_3
                    ? new Date(data.tanggal_spid_kpp_3)
                    : null,
            );
            setSpidWp1(data.spid_wp_1);
            setTanggalSpidWp1(
                data.tanggal_spid_wp_1
                    ? new Date(data.tanggal_spid_wp_1)
                    : null,
            );
            setSpidWp2(data.spid_wp_2);
            setTanggalSpidWp2(
                data.tanggal_spid_wp_2
                    ? new Date(data.tanggal_spid_wp_2)
                    : null,
            );
            setSpidWp3(data.spid_wp_3);
            setTanggalSpidWp3(
                data.tanggal_spid_wp_3
                    ? new Date(data.tanggal_spid_wp_3)
                    : null,
            );
            setNomorBaTidakBeriDokumen(data.nomor_ba_tidak_beri_dokumen);
            setTanggalBaTidakBeriDokumen(
                data.tanggal_ba_tidak_beri_dokumen
                    ? new Date(data.tanggal_ba_tidak_beri_dokumen)
                    : null,
            );
            setNomorSuratPemanggilanPemeriksa(
                data.nomor_surat_pemanggilan_pemeriksa,
            );
            setTanggalSuratPemanggilanPemeriksa(
                data.tanggal_surat_pemanggilan_pemeriksa
                    ? new Date(data.tanggal_surat_pemanggilan_pemeriksa)
                    : null,
            );
            setNomorSuratPemanggilanPemeriksa2(
                data.nomor_surat_pemanggilan_pemeriksa_2,
            );
            setTanggalSuratPemanggilanPemeriksa2(
                data.tanggal_surat_pemanggilan_pemeriksa_2
                    ? new Date(data.tanggal_surat_pemanggilan_pemeriksa_2)
                    : null,
            );
            setNomorSuratPemanggilanPemeriksa3(
                data.nomor_surat_pemanggilan_pemeriksa_3,
            );
            setTanggalSuratPemanggilanPemeriksa3(
                data.tanggal_surat_pemanggilan_pemeriksa_3
                    ? new Date(data.tanggal_surat_pemanggilan_pemeriksa_3)
                    : null,
            );
            setNomorBaPembahasanPemeriksa(data.nomor_ba_pembahasan_pemeriksa);
            setTanggalBaPembahasanPemeriksa(
                data.tanggal_ba_pembahasan_pemeriksa
                    ? new Date(data.tanggal_ba_pembahasan_pemeriksa)
                    : null,
            );
            setNomorBaPembahasanPemeriksa2(
                data.nomor_ba_pembahasan_pemeriksa_2,
            );
            setTanggalBaPembahasanPemeriksa2(
                data.tanggal_ba_pembahasan_pemeriksa_2
                    ? new Date(data.tanggal_ba_pembahasan_pemeriksa_2)
                    : null,
            );
            setNomorBaPembahasanPemeriksa3(
                data.nomor_ba_pembahasan_pemeriksa_3,
            );
            setTanggalBaPembahasanPemeriksa3(
                data.tanggal_ba_pembahasan_pemeriksa_3
                    ? new Date(data.tanggal_ba_pembahasan_pemeriksa_3)
                    : null,
            );
            setNomorSuratPemanggilanWp(data.nomor_surat_pemanggilan_wp);
            setTanggalSuratPemanggilanWp(
                data.tanggal_surat_pemanggilan_wp
                    ? new Date(data.tanggal_surat_pemanggilan_wp)
                    : null,
            );
            setNomorSuratPemanggilanWp2(data.nomor_surat_pemanggilan_wp_2);
            setTanggalSuratPemanggilanWp2(
                data.tanggal_surat_pemanggilan_wp_2
                    ? new Date(data.tanggal_surat_pemanggilan_wp_2)
                    : null,
            );
            setNomorSuratPemanggilanWp3(data.nomor_surat_pemanggilan_wp_3);
            setTanggalSuratPemanggilanWp3(
                data.tanggal_surat_pemanggilan_wp_3
                    ? new Date(data.tanggal_surat_pemanggilan_wp_3)
                    : null,
            );
            setNomorBaPembahasanWp(data.nomor_ba_pembahasan_wp);
            setTanggalBaPembahasanWp(
                data.tanggal_ba_pembahasan_wp
                    ? new Date(data.tanggal_ba_pembahasan_wp)
                    : null,
            );
            setNomorBaPembahasanWp2(data.nomor_ba_pembahasan_wp_2);
            setTanggalBaPembahasanWp2(
                data.tanggal_ba_pembahasan_wp_2
                    ? new Date(data.tanggal_ba_pembahasan_wp_2)
                    : null,
            );
            setNomorBaPembahasanWp3(data.nomor_ba_pembahasan_wp_3);
            setTanggalBaPembahasanWp3(
                data.tanggal_ba_pembahasan_wp_3
                    ? new Date(data.tanggal_ba_pembahasan_wp_3)
                    : null,
            );
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        const tanggal_spid_kpp = tanggalSpidKpp
            ? tanggalSpidKpp.toLocaleDateString("en-CA")
            : null;
        const tanggal_spid_kpp_2 = tanggalSpidKpp2
            ? tanggalSpidKpp2.toLocaleDateString("en-CA")
            : null;
        const tanggal_spid_kpp_3 = tanggalSpidKpp3
            ? tanggalSpidKpp3.toLocaleDateString("en-CA")
            : null;
        const tanggal_spid_wp_1 = tanggalSpidWp1
            ? tanggalSpidWp1.toLocaleDateString("en-CA")
            : null;
        const tanggal_spid_wp_2 = tanggalSpidWp2
            ? tanggalSpidWp2.toLocaleDateString("en-CA")
            : null;
        const tanggal_spid_wp_3 = tanggalSpidWp3
            ? tanggalSpidWp3.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_tidak_beri_dokumen = tanggalBaTidakBeriDokumen
            ? tanggalBaTidakBeriDokumen.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_pemanggilan_pemeriksa =
            tanggalSuratPemanggilanPemeriksa
                ? tanggalSuratPemanggilanPemeriksa.toLocaleDateString("en-CA")
                : null;
        const tanggal_surat_pemanggilan_pemeriksa_2 =
            tanggalSuratPemanggilanPemeriksa2
                ? tanggalSuratPemanggilanPemeriksa2.toLocaleDateString("en-CA")
                : null;
        const tanggal_surat_pemanggilan_pemeriksa_3 =
            tanggalSuratPemanggilanPemeriksa3
                ? tanggalSuratPemanggilanPemeriksa3.toLocaleDateString("en-CA")
                : null;
        const tanggal_ba_pembahasan_pemeriksa = tanggalBaPembahasanPemeriksa
            ? tanggalBaPembahasanPemeriksa.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_pembahasan_pemeriksa_2 = tanggalBaPembahasanPemeriksa2
            ? tanggalBaPembahasanPemeriksa2.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_pembahasan_pemeriksa_3 = tanggalBaPembahasanPemeriksa3
            ? tanggalBaPembahasanPemeriksa3.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_pemanggilan_wp = tanggalSuratPemanggilanWp
            ? tanggalSuratPemanggilanWp.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_pemanggilan_wp_2 = tanggalSuratPemanggilanWp2
            ? tanggalSuratPemanggilanWp2.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_pemanggilan_wp_3 = tanggalSuratPemanggilanWp3
            ? tanggalSuratPemanggilanWp3.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_pembahasan_wp = tanggalBaPembahasanWp
            ? tanggalBaPembahasanWp.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_pembahasan_wp_2 = tanggalBaPembahasanWp2
            ? tanggalBaPembahasanWp2.toLocaleDateString("en-CA")
            : null;
        const tanggal_ba_pembahasan_wp_3 = tanggalBaPembahasanWp3
            ? tanggalBaPembahasanWp3.toLocaleDateString("en-CA")
            : null;
        router.put(route("spid-pembahasan.update", permohonan.id), {
            spidKpp: spidKpp,
            tanggalSpidKpp: tanggal_spid_kpp,
            spidKpp2: spidKpp2,
            tanggalSpidKpp2: tanggal_spid_kpp_2,
            spidKpp3: spidKpp3,
            tanggalSpidKpp3: tanggal_spid_kpp_3,
            spidWp1: spidWp1,
            tanggalSpidWp1: tanggal_spid_wp_1,
            spidWp2: spidWp2,
            tanggalSpidWp2: tanggal_spid_wp_2,
            spidWp3: spidWp3,
            tanggalSpidWp3: tanggal_spid_wp_3,
            nomorBaTidakBeriDokumen: nomorBaTidakBeriDokumen,
            tanggalBaTidakBeriDokumen: tanggal_ba_tidak_beri_dokumen,
            nomorSuratPemanggilanPemeriksa: nomorSuratPemanggilanPemeriksa,
            tanggalSuratPemanggilanPemeriksa:
                tanggal_surat_pemanggilan_pemeriksa,
            nomorSuratPemanggilanPemeriksa2: nomorSuratPemanggilanPemeriksa2,
            tanggalSuratPemanggilanPemeriksa2:
                tanggal_surat_pemanggilan_pemeriksa_2,
            nomorSuratPemanggilanPemeriksa3: nomorSuratPemanggilanPemeriksa3,
            tanggalSuratPemanggilanPemeriksa3:
                tanggal_surat_pemanggilan_pemeriksa_3,
            nomorBaPembahasanPemeriksa: nomorBaPembahasanPemeriksa,
            tanggalBaPembahasanPemeriksa: tanggal_ba_pembahasan_pemeriksa,
            nomorBaPembahasanPemeriksa2: nomorBaPembahasanPemeriksa2,
            tanggalBaPembahasanPemeriksa2: tanggal_ba_pembahasan_pemeriksa_2,
            nomorBaPembahasanPemeriksa3: nomorBaPembahasanPemeriksa3,
            tanggalBaPembahasanPemeriksa3: tanggal_ba_pembahasan_pemeriksa_3,
            nomorSuratPemanggilanWp: nomorSuratPemanggilanWp,
            tanggalSuratPemanggilanWp: tanggal_surat_pemanggilan_wp,
            nomorSuratPemanggilanWp2: nomorSuratPemanggilanWp2,
            tanggalSuratPemanggilanWp2: tanggal_surat_pemanggilan_wp_2,
            nomorSuratPemanggilanWp3: nomorSuratPemanggilanWp3,
            tanggalSuratPemanggilanWp3: tanggal_surat_pemanggilan_wp_3,
            nomorBaPembahasanWp: nomorBaPembahasanWp,
            tanggalBaPembahasanWp: tanggal_ba_pembahasan_wp,
            nomorBaPembahasanWp2: nomorBaPembahasanWp2,
            tanggalBaPembahasanWp2: tanggal_ba_pembahasan_wp_2,
            nomorBaPembahasanWp3: nomorBaPembahasanWp3,
            tanggalBaPembahasanWp3: tanggal_ba_pembahasan_wp_3,
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
                                <a href={route("spid-pembahasan.index")}>
                                    SPID dan Pembahasan
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
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="TGL DITERIMA" />
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpidKpp}
                                            onChange={(date) =>
                                                setTanggalSpidKpp(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpidKpp2}
                                            onChange={(date) =>
                                                setTanggalSpidKpp2(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpidKpp3}
                                            onChange={(date) =>
                                                setTanggalSpidKpp3(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpidWp1}
                                            onChange={(date) =>
                                                setTanggalSpidWp1(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpidWp2}
                                            onChange={(date) =>
                                                setTanggalSpidWp2(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSpidWp3}
                                            onChange={(date) =>
                                                setTanggalSpidWp3(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalBaTidakBeriDokumen}
                                            onChange={(date) =>
                                                setTanggalBaTidakBeriDokumen(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalSuratPemanggilanPemeriksa
                                            }
                                            onChange={(date) =>
                                                setTanggalSuratPemanggilanPemeriksa(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalSuratPemanggilanPemeriksa2
                                            }
                                            onChange={(date) =>
                                                setTanggalSuratPemanggilanPemeriksa2(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalSuratPemanggilanPemeriksa3
                                            }
                                            onChange={(date) =>
                                                setTanggalSuratPemanggilanPemeriksa3(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalBaPembahasanPemeriksa
                                            }
                                            onChange={(date) =>
                                                setTanggalBaPembahasanPemeriksa(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalBaPembahasanPemeriksa2
                                            }
                                            onChange={(date) =>
                                                setTanggalBaPembahasanPemeriksa2(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalBaPembahasanPemeriksa3
                                            }
                                            onChange={(date) =>
                                                setTanggalBaPembahasanPemeriksa3(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSuratPemanggilanWp}
                                            onChange={(date) =>
                                                setTanggalSuratPemanggilanWp(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalSuratPemanggilanWp2
                                            }
                                            onChange={(date) =>
                                                setTanggalSuratPemanggilanWp2(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={
                                                tanggalSuratPemanggilanWp3
                                            }
                                            onChange={(date) =>
                                                setTanggalSuratPemanggilanWp3(
                                                    date,
                                                )
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalBaPembahasanWp}
                                            onChange={(date) =>
                                                setTanggalBaPembahasanWp(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalBaPembahasanWp2}
                                            onChange={(date) =>
                                                setTanggalBaPembahasanWp2(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalBaPembahasanWp3}
                                            onChange={(date) =>
                                                setTanggalBaPembahasanWp3(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
