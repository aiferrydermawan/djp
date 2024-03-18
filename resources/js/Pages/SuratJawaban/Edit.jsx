import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Label from "@/Components/Label.jsx";
import NPWPInput from "@/Components/NPWPInput.jsx";
import Validation from "@/Components/Validation.jsx";
import Input from "@/Components/Input.jsx";
import Select from "@/Components/Select.jsx";

function Create({ errors, permintaan }) {
    const [npwp, setNpwp] = useState(permintaan.npwp);
    const [formData, setFormData] = useState({
        nomor_urut: permintaan.nomor_urut,
        nomor_surat_pp: permintaan.nomor_surat_pp,
        tgl_surat_pp: permintaan.tgl_surat_pp,
        tgl_resi_pp: permintaan.tgl_resi_pp,
        tgl_diterima_kanwil: permintaan.tgl_diterima_kanwil,
        nomor_sengketa: permintaan.nomor_sengketa,
        jenis_sengketa: permintaan.jenis_sengketa,
        nomor_surat_ke_dkb: permintaan.surat_jawaban
            ? permintaan.surat_jawaban.nomor_surat_ke_dkb
            : "",
        tgl_surat_ke_dkb: permintaan.surat_jawaban
            ? permintaan.surat_jawaban.tgl_surat_ke_dkb
            : "",
        nomor_surat_ke_pp: permintaan.surat_jawaban
            ? permintaan.surat_jawaban.nomor_surat_ke_pp
            : "",
        tgl_surat_ke_pp: permintaan.surat_jawaban
            ? permintaan.surat_jawaban.tgl_surat_ke_pp
            : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const store = async (e) => {
        e.preventDefault();
        router.put(route("surat-jawaban.update", permintaan.id), {
            nomor_surat_ke_dkb: formData.nomor_surat_ke_dkb,
            tgl_surat_ke_dkb: formData.tgl_surat_ke_dkb,
            nomor_surat_ke_pp: formData.nomor_surat_ke_pp,
            tgl_surat_ke_pp: formData.tgl_surat_ke_pp,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head>
                <title>Surat Jawaban</title>
            </Head>
            <div className={`p-5`}>
                <div className="breadcrumbs text-sm">
                    <ul>
                        <li>
                            <a href={route("surat-jawaban")}>Surat Jawaban</a>
                        </li>
                        <li>Edit</li>
                    </ul>
                </div>
                <div className="card mt-5 bg-base-100 shadow">
                    <div className="card-body">
                        <form onSubmit={store}>
                            <div className="grid grid-cols-2 gap-5">
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR URUT" />
                                    <Input
                                        type="text"
                                        name="nomor_urut"
                                        placeholder="Type Here"
                                        value={formData.nomor_urut}
                                        onChange={handleChange}
                                        disabled
                                    />
                                    {errors.nomor_urut && (
                                        <Validation>
                                            {errors.nomor_urut}
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
                                        disabled
                                    />
                                    {errors.nomor_surat_pp && (
                                        <Validation>
                                            {errors.nomor_surat_pp}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT PP" />
                                    <Input
                                        type="date"
                                        name="tgl_surat_pp"
                                        placeholder="Type Here"
                                        value={formData.tgl_surat_pp}
                                        onChange={handleChange}
                                        disabled
                                    />
                                    {errors.tgl_surat_pp && (
                                        <Validation>
                                            {errors.tgl_surat_pput}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL RESI PP" />
                                    <Input
                                        type="date"
                                        name="tgl_resi_pp"
                                        placeholder="Type Here"
                                        value={formData.tgl_resi_pp}
                                        onChange={handleChange}
                                        disabled
                                    />
                                    {errors.tgl_resi_pp && (
                                        <Validation>
                                            {errors.tgl_resi_pprut}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL DITERIMA KANWIL" />
                                    <Input
                                        type="date"
                                        name="tgl_diterima_kanwil"
                                        placeholder="Type Here"
                                        value={formData.tgl_diterima_kanwil}
                                        onChange={handleChange}
                                        disabled
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
                                        disabled
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
                                        disabled
                                    />
                                    {errors.jenis_sengketa && (
                                        <Validation>
                                            {errors.jenis_sengketa}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NPWP" />
                                    <NPWPInput
                                        value={npwp}
                                        onChange={(formattedValue) =>
                                            setNpwp(formattedValue)
                                        }
                                        disabled
                                    />
                                    {errors.npwp && (
                                        <Validation>
                                            {errorsnpwpnomor_urut}
                                        </Validation>
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
                                        disabled
                                    />
                                    {errors.nama_wajib_pajak && (
                                        <Validation>
                                            {errors.nama_wajib_pajak}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR SURAT KE DKB" />
                                    <Input
                                        type="text"
                                        name="nomor_surat_ke_dkb"
                                        placeholder="Type Here"
                                        value={formData.nomor_surat_ke_dkb}
                                        onChange={handleChange}
                                    />
                                    {errors.nomor_surat_ke_dkb && (
                                        <Validation>
                                            {errors.nomor_surat_ke_dkb}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT KE DKB" />
                                    <Input
                                        type="date"
                                        name="tgl_surat_ke_dkb"
                                        placeholder="Type Here"
                                        value={formData.tgl_surat_ke_dkb}
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_surat_ke_dkb && (
                                        <Validation>
                                            {errors.tgl_surat_ke_dkb}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NOMOR SURAT KE PP" />
                                    <Input
                                        type="text"
                                        name="nomor_surat_ke_pp"
                                        placeholder="Type Here"
                                        value={formData.nomor_surat_ke_pp}
                                        onChange={handleChange}
                                    />
                                    {errors.nomor_surat_ke_pp && (
                                        <Validation>
                                            {errors.nomor_surat_ke_pp}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT KE PP" />
                                    <Input
                                        type="date"
                                        name="tgl_surat_ke_pp"
                                        placeholder="Type Here"
                                        value={formData.tgl_surat_ke_pp}
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_surat_ke_pp && (
                                        <Validation>
                                            {errors.tgl_surat_ke_pp}
                                        </Validation>
                                    )}
                                </label>
                            </div>
                            <div className="mt-5">
                                <button
                                    type="submit"
                                    className="btn btn-warning"
                                >
                                    Edit
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
