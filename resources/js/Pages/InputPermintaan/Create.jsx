import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Label from "@/Components/Label.jsx";
import NPWPInput from "@/Components/NPWPInput.jsx";
import Validation from "@/Components/Validation.jsx";
import Input from "@/Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import DatePicker from "react-datepicker";
import CustomCombobox from "@/Components/CustomCombobox.jsx";

function Create({ errors, pk_all, jenis_permohonan_all, }) {
    const [jenisPermohonan, setJenisPermohonan] = useState(null);
    const [tglSuratPp, setTglSuratPp] = useState("");
    const [tglResiPp, setTglResiPp] = useState("");
    const [tglDiterimaKanwil, setTglDiterimaKanwil] = useState("");
    const [tglSuratBandingGugatan, setTglSuratBandingGugatan] = useState("");
    const [tglDiterimaPp, setTglDiterimaPp] = useState("");
    const [tglKepSuratYangDiBandingGugat, setTglKepSuratYangDiBandingGugat] =
        useState("");
    const [formData, setFormData] = useState({
        npwp: "",
        jenis_permohonan: jenisPermohonan ? jenisPermohonan.id : null,
        kategori_permintaan: "",
        tahun_berkas: "",
        nomor_surat_pp: "",
        nomor_sengketa: "",
        jenis_sengketa: "",
        nama_wajib_pajak: "",
        nomor_surat_banding_gugatan_wp: "",
        nomor_kep_surat_yang_di_banding_gugat: "",
        pk: "",
    });

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            jenis_permohonan: jenisPermohonan ? jenisPermohonan.id : null,
        }));
    }, [jenisPermohonan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const store = async (e) => {
        e.preventDefault();
        const tgl_surat_pp = tglSuratPp
            ? tglSuratPp.toLocaleDateString("en-CA")
            : null;
        const tgl_resi_pp = tglResiPp
            ? tglResiPp.toLocaleDateString("en-CA")
            : null;
        const tgl_diterima_kanwil = tglDiterimaKanwil
            ? tglDiterimaKanwil.toLocaleDateString("en-CA")
            : null;
        const tgl_surat_banding_gugatan = tglSuratBandingGugatan
            ? tglSuratBandingGugatan.toLocaleDateString("en-CA")
            : null;
        const tgl_diterima_pp = tglDiterimaPp
            ? tglDiterimaPp.toLocaleDateString("en-CA")
            : null;
        const tgl_kep_surat_yang_di_banding_gugat =
            tglKepSuratYangDiBandingGugat
                ? tglKepSuratYangDiBandingGugat.toLocaleDateString("en-CA")
                : null;
        console.log(formData);
        router.post(route("input-permintaan.store"), {
            kategori_permintaan: formData.kategori_permintaan,
            jenis_permohonan: formData.jenis_permohonan,
            tahun_berkas: formData.tahun_berkas,
            nomor_surat_pp: formData.nomor_surat_pp,
            tgl_surat_pp: tgl_surat_pp,
            tgl_resi_pp: tgl_resi_pp,
            tgl_diterima_kanwil: tgl_diterima_kanwil,
            nomor_sengketa: formData.nomor_sengketa,
            jenis_sengketa: formData.jenis_sengketa,
            npwp: formData.npwp,
            nama_wajib_pajak: formData.nama_wajib_pajak,
            nomor_surat_banding_gugatan_wp:
                formData.nomor_surat_banding_gugatan_wp,
            tgl_surat_banding_gugatan: tgl_surat_banding_gugatan,
            tgl_diterima_pp: tgl_diterima_pp,
            nomor_kep_surat_yang_di_banding_gugat:
                formData.nomor_kep_surat_yang_di_banding_gugat,
            tgl_kep_surat_yang_di_banding_gugat:
                tgl_kep_surat_yang_di_banding_gugat,
            pk: formData.pk,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head>
                <title>Input Permintaan</title>
            </Head>
            <div className={`p-5`}>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <a href={route("input-permintaan")}>
                                Input Permintaan
                            </a>
                        </li>
                        <li>Buat</li>
                    </ul>
                </div>
                <div className="card mt-5 bg-base-100 shadow">
                    <div className="card-body">
                        <form onSubmit={store}>
                            <div className="grid grid-cols-2 gap-5">
                                <label className={`form-control col-span-1`}>
                                    <Label name="KATEGORI PERMINTAAN" />
                                    <Select
                                        name="kategori_permintaan"
                                        placeholder="Type Here"
                                        value={formData.kategori_permintaan}
                                        onChange={handleChange}
                                    >
                                        <option value="">Pilih 1</option>
                                        <option value="SUB">SUB</option>
                                        <option value="STG">STG</option>
                                    </Select>
                                    {errors.kategori_permintaan && (
                                        <Validation>
                                            {errors.kategori_permintaan}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TAHUN BERKAS" />
                                    <Input
                                        type="number"
                                        name="tahun_berkas"
                                        placeholder="Contoh: 2025"
                                        value={formData.tahun_berkas}
                                        onChange={handleChange}
                                    />
                                    {errors.tahun_berkas && (
                                        <Validation>
                                            {errors.tahun_berkas}
                                        </Validation>
                                    )}
                                </label>
                                <label
                                    className={`form-control col-span-2`}
                                >
                                    <Label name="Jenis Permohonan" />
                                    <CustomCombobox
                                        selected={jenisPermohonan}
                                        onChange={setJenisPermohonan}
                                        placeholder="Kosong"
                                        items={jenis_permohonan_all}
                                    />
                                    {errors.jenis_permohonan && (
                                        <Validation>
                                            {errors.jenis_permohonan}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR SURAT PP" />
                                    <Input
                                        type="text"
                                        name="nomor_surat_pp"
                                        placeholder="Type Here"
                                        value={formData.nomor_surat_pp}
                                        onChange={handleChange}
                                    />
                                    {errors.nomor_surat_pp && (
                                        <Validation>
                                            {errors.nomor_surat_pp}
                                        </Validation>
                                    )}
                                </label>
                                <div className="col-span-1"></div>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT PP" />
                                    <DatePicker
                                        placeholderText="kosong"
                                        className="input input-bordered w-full"
                                        selected={tglSuratPp}
                                        onChange={(date) => setTglSuratPp(date)}
                                        dateFormat="dd-MM-yyyy"
                                    />

                                    {errors.tgl_surat_pp && (
                                        <Validation>
                                            {errors.tgl_surat_pput}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL RESI PP" />
                                    <DatePicker
                                        placeholderText="kosong"
                                        className="input input-bordered w-full"
                                        selected={tglResiPp}
                                        onChange={(date) => setTglResiPp(date)}
                                        dateFormat="dd-MM-yyyy"
                                    />
                                    {errors.tgl_resi_pp && (
                                        <Validation>
                                            {errors.tgl_resi_pprut}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL DITERIMA KANWIL" />
                                    <DatePicker
                                        placeholderText="kosong"
                                        className="input input-bordered w-full"
                                        selected={tglDiterimaKanwil}
                                        onChange={(date) =>
                                            setTglDiterimaKanwil(date)
                                        }
                                        dateFormat="dd-MM-yyyy"
                                    />
                                    {errors.tgl_diterima_kanwil && (
                                        <Validation>
                                            {errors.tgl_diterima_kanwil}
                                        </Validation>
                                    )}
                                </label>
                                <div></div>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR SENGKETA" />
                                    <Input
                                        type="text"
                                        name="nomor_sengketa"
                                        placeholder="Type Here"
                                        value={formData.nomor_sengketa}
                                        onChange={handleChange}
                                    />
                                    {errors.nomor_sengketa && (
                                        <Validation>
                                            {errors.nomor_sengketa}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="JENIS SENGKETA" />
                                    <Input
                                        type="text"
                                        name="jenis_sengketa"
                                        placeholder="Type Here"
                                        value={formData.jenis_sengketa}
                                        onChange={handleChange}
                                    />
                                    {errors.jenis_sengketa && (
                                        <Validation>
                                            {errors.jenis_sengketa}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NPWP" />
                                    <Input
                                        type="number"
                                        name="npwp"
                                        placeholder="Type Here"
                                        value={formData.npwp}
                                        onChange={handleChange}
                                    />
                                    {errors.npwp && (
                                        <Validation>{errors.npwp}</Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NAMA WAJIB PAJAK" />
                                    <Input
                                        type="text"
                                        name="nama_wajib_pajak"
                                        placeholder="Type Here"
                                        value={formData.nama_wajib_pajak}
                                        onChange={handleChange}
                                    />
                                    {errors.nama_wajib_pajak && (
                                        <Validation>
                                            {errors.nama_wajib_pajak}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR SURAT BANDING/GUGATAN WP" />
                                    <Input
                                        type="text"
                                        name="nomor_surat_banding_gugatan_wp"
                                        placeholder="Type Here"
                                        value={
                                            formData.nomor_surat_banding_gugatan_wp
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.nomor_surat_banding_gugatan_wp && (
                                        <Validation>
                                            {
                                                errors.nomor_surat_banding_gugatan_wp
                                            }
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT BANDING/GUGATAN" />
                                    <DatePicker
                                        placeholderText="kosong"
                                        className="input input-bordered w-full"
                                        selected={tglSuratBandingGugatan}
                                        onChange={(date) =>
                                            setTglSuratBandingGugatan(date)
                                        }
                                        dateFormat="dd-MM-yyyy"
                                    />
                                    {errors.tgl_surat_banding_gugatan && (
                                        <Validation>
                                            {errors.tgl_surat_banding_gugatan}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL DITERIMA PP" />
                                    <DatePicker
                                        placeholderText="kosong"
                                        className="input input-bordered w-full"
                                        selected={tglDiterimaPp}
                                        onChange={(date) =>
                                            setTglDiterimaPp(date)
                                        }
                                        dateFormat="dd-MM-yyyy"
                                    />
                                    {errors.tgl_diterima_pp && (
                                        <Validation>
                                            {errors.tgl_diterima_pp}
                                        </Validation>
                                    )}
                                </label>
                                <div></div>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR KEP/SURAT YANG DI BANDING/GUGAT" />
                                    <Input
                                        type="text"
                                        name="nomor_kep_surat_yang_di_banding_gugat"
                                        placeholder="Type Here"
                                        value={
                                            formData.nomor_kep_surat_yang_di_banding_gugat
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.nomor_kep_surat_yang_di_banding_gugat && (
                                        <Validation>
                                            {
                                                errors.nomor_kep_surat_yang_di_banding_gugat
                                            }
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL KEP/SURAT YANG DI BANDING/GUGAT" />
                                    <DatePicker
                                        placeholderText="kosong"
                                        className="input input-bordered w-full"
                                        selected={tglKepSuratYangDiBandingGugat}
                                        onChange={(date) =>
                                            setTglKepSuratYangDiBandingGugat(
                                                date,
                                            )
                                        }
                                        dateFormat="dd-MM-yyyy"
                                    />
                                    {errors.tgl_kep_surat_yang_di_banding_gugat && (
                                        <Validation>
                                            {
                                                errors.tgl_kep_surat_yang_di_banding_gugat
                                            }
                                        </Validation>
                                    )}
                                </label>
                                <label className="form-control">
                                    <Label name="Nama PK" />
                                    <Select
                                        name="pk"
                                        placeholder="Type Here"
                                        value={formData.pk}
                                        onChange={handleChange}
                                    >
                                        <option value="">Pilih 1</option>
                                        {pk_all.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </Select>
                                    {errors.pk && (
                                        <Validation>{errors.pk}</Validation>
                                    )}
                                </label>
                            </div>
                            <div className="mt-5">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Buat
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;
