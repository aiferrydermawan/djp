import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import Label from "@/Components/Label.jsx";
import NPWPInput from "@/Components/NPWPInput.jsx";
import Validation from "@/Components/Validation.jsx";
import Input from "@/Components/Input.jsx";
import Select from "@/Components/Select.jsx";

function Create({ errors, pk_all, permintaan }) {
    const [npwp, setNpwp] = useState(permintaan.npwp);
    const [formData, setFormData] = useState({
        nomor_urut: permintaan.nomor_urut,
        nomor_surat_pp: permintaan.nomor_surat_pp,
        tgl_surat_pp: permintaan.tgl_surat_pp,
        tgl_resi_pp: permintaan.tgl_resi_pp,
        tgl_diterima_kanwil: permintaan.tgl_diterima_kanwil,
        nomor_sengketa: permintaan.nomor_sengketa,
        jenis_sengketa: permintaan.jenis_sengketa,
        nama_wajib_pajak: permintaan.nama_wajib_pajak,
        nomor_surat_banding_gugatan_wp:
            permintaan.nomor_surat_banding_gugatan_wp,
        tgl_surat_banding_gugatan: permintaan.tgl_surat_banding_gugatan,
        tgl_diterima_pp: permintaan.tgl_diterima_pp,
        nomor_kep_surat_yang_di_banding_gugat:
            permintaan.nomor_kep_surat_yang_di_banding_gugat,
        tgl_kep_surat_yang_di_banding_gugat:
            permintaan.tgl_kep_surat_yang_di_banding_gugat,
        no_surat_tugas: permintaan.no_surat_tugas,
        tgl_surat_tugas: permintaan.tgl_surat_tugas,
        no_matriks: permintaan.no_matriks,
        tgl_matriks: permintaan.tgl_matriks,
        no_surat_tugas_pengganti: permintaan.no_surat_tugas_pengganti,
        tgl_surat_tugas_pengganti: permintaan.tgl_surat_tugas_pengganti,
        pk: permintaan.pk_id,
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
        router.put(route("input-permintaan.update", permintaan.id), {
            nomor_urut: formData.nomor_urut,
            nomor_surat_pp: formData.nomor_surat_pp,
            tgl_surat_pp: formData.tgl_surat_pp,
            tgl_resi_pp: formData.tgl_resi_pp,
            tgl_diterima_kanwil: formData.tgl_diterima_kanwil,
            nomor_sengketa: formData.nomor_sengketa,
            jenis_sengketa: formData.jenis_sengketa,
            npwp: npwp,
            nama_wajib_pajak: formData.nama_wajib_pajak,
            nomor_surat_banding_gugatan_wp:
                formData.nomor_surat_banding_gugatan_wp,
            tgl_surat_banding_gugatan: formData.tgl_surat_banding_gugatan,
            tgl_diterima_pp: formData.tgl_diterima_pp,
            nomor_kep_surat_yang_di_banding_gugat:
                formData.nomor_kep_surat_yang_di_banding_gugat,
            tgl_kep_surat_yang_di_banding_gugat:
                formData.tgl_kep_surat_yang_di_banding_gugat,
            no_surat_tugas: formData.no_surat_tugas,
            tgl_surat_tugas: formData.tgl_surat_tugas,
            no_matriks: formData.no_matriks,
            tgl_matriks: formData.tgl_matriks,
            no_surat_tugas_pengganti: formData.no_surat_tugas_pengganti,
            tgl_surat_tugas_pengganti: formData.tgl_surat_tugas_pengganti,
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
                                    <NPWPInput
                                        value={npwp}
                                        onChange={(formattedValue) =>
                                            setNpwp(formattedValue)
                                        }
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
                                    <Input
                                        type="date"
                                        name="tgl_surat_banding_gugatan"
                                        placeholder="Type Here"
                                        value={
                                            formData.tgl_surat_banding_gugatan
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_surat_banding_gugatan && (
                                        <Validation>
                                            {errors.tgl_surat_banding_gugatan}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL DITERIMA PP" />
                                    <Input
                                        type="date"
                                        name="tgl_diterima_pp"
                                        placeholder="Type Here"
                                        value={formData.tgl_diterima_pp}
                                        onChange={handleChange}
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
                                    <Input
                                        type="date"
                                        name="tgl_kep_surat_yang_di_banding_gugat"
                                        placeholder="Type Here"
                                        value={
                                            formData.tgl_kep_surat_yang_di_banding_gugat
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_kep_surat_yang_di_banding_gugat && (
                                        <Validation>
                                            {
                                                errors.tgl_kep_surat_yang_di_banding_gugat
                                            }
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NO SURAT TUGAS" />
                                    <Input
                                        type="text"
                                        name="no_surat_tugas"
                                        placeholder="Type Here"
                                        value={formData.no_surat_tugas}
                                        onChange={handleChange}
                                    />
                                    {errors.no_surat_tugas && (
                                        <Validation>
                                            {errors.no_surat_tugas}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT TUGAS" />
                                    <Input
                                        type="date"
                                        name="tgl_surat_tugas"
                                        placeholder="Type Here"
                                        value={formData.tgl_surat_tugas}
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_surat_tugas && (
                                        <Validation>
                                            {errors.tgl_surat_tugas}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NO MATRIKS" />
                                    <Input
                                        type="text"
                                        name="no_matriks"
                                        placeholder="Type Here"
                                        value={formData.no_matriks}
                                        onChange={handleChange}
                                    />
                                    {errors.no_matriks && (
                                        <Validation>
                                            {errors.no_matriks}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL MATRIKS" />
                                    <Input
                                        type="date"
                                        name="tgl_matriks"
                                        placeholder="Type Here"
                                        value={formData.tgl_matriks}
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_matriks && (
                                        <Validation>
                                            {errors.tgl_matriks}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="NO SURAT TUGAS PENGGANTI" />
                                    <Input
                                        type="text"
                                        name="no_surat_tugas_pengganti"
                                        placeholder="Type Here"
                                        value={
                                            formData.no_surat_tugas_pengganti
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.no_surat_tugas_pengganti && (
                                        <Validation>
                                            {errors.no_surat_tugas_pengganti}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control col-span-1`}>
                                    <Label name="TGL SURAT TUGAS PENGGANTI" />
                                    <Input
                                        type="date"
                                        name="tgl_surat_tugas_pengganti"
                                        placeholder="Type Here"
                                        value={
                                            formData.tgl_surat_tugas_pengganti
                                        }
                                        onChange={handleChange}
                                    />
                                    {errors.tgl_surat_tugas_pengganti && (
                                        <Validation>
                                            {errors.tgl_surat_tugas_pengganti}
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
