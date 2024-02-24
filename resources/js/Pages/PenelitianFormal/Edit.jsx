import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import Validation from "@/Components/Validation.jsx";
function Edit({ errors, permohonan }) {
    console.log(permohonan);
    const [status, setStatus] = useState("");
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

    useEffect(() => {
        if (permohonan.penelitian_formal != null) {
            setStatus(permohonan.penelitian_formal.status);
        } else {
            setStatus("");
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        router.put(route("penelitian-formal.update", permohonan.id), {
            status: status,
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
                                <Link href={route("permohonan-keb-nkeb.index")}>
                                    Permohonan Keb dan Non Keb
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
                                        <Label name="Status" />
                                        <Select
                                            value={status}
                                            onChange={(e) =>
                                                setStatus(e.target.value)
                                            }
                                        >
                                            <option value="">Pilih 1</option>
                                            <option value="ya">Ya</option>
                                            <option value="tidak">Tidak</option>
                                        </Select>
                                        {errors.status && (
                                            <Validation>
                                                {errors.status}
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
