import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import Validation from "@/Components/Validation.jsx";
function Edit({ errors, permohonan, amar_putusan_all }) {
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

    const [jenisKeputusan, setJenisKeputusan] = useState("");
    const [noKeputusan, setNoKeputusan] = useState("");
    const [tanggalKeputusan, setTanggalKeputusan] = useState("");
    const [amarKeputusanId, setAmarKeputusanId] = useState("");
    const [nilaiAkhirMenurutKeputusan, setNilaiAkhirMenurutKeputusan] =
        useState("");

    useEffect(() => {
        if (permohonan.data_keputusan != null) {
            setJenisKeputusan(permohonan.data_keputusan.jenis_keputusan);
            setNoKeputusan(permohonan.data_keputusan.no_keputusan);
            setTanggalKeputusan(permohonan.data_keputusan.tanggal_keputusan);
            setAmarKeputusanId(permohonan.data_keputusan.amar_keputusan_id);
            setNilaiAkhirMenurutKeputusan(
                permohonan.data_keputusan.nilai_akhir_menurut_keputusan,
            );
        }
    }, [permohonan]);
    const edit = async (e) => {
        e.preventDefault();
        router.put(route("data-keputusan.update", permohonan.id), {
            jenisKeputusan: jenisKeputusan,
            noKeputusan: noKeputusan,
            tanggalKeputusan: tanggalKeputusan,
            amarKeputusanId: amarKeputusanId,
            nilaiAkhirMenurutKeputusan: nilaiAkhirMenurutKeputusan,
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
                                        <Label name="Jenis Keputusan" />
                                        <Select
                                            type="date"
                                            value={jenisKeputusan}
                                            onChange={(e) =>
                                                setJenisKeputusan(
                                                    e.target.value,
                                                )
                                            }
                                        >
                                            <option value="">Pilih 1</option>
                                            <option value="keberatan">
                                                Keberatan
                                            </option>
                                            <option value="non keberatan">
                                                Non Keberatan
                                            </option>
                                        </Select>
                                        {errors.jenisKeputusan && (
                                            <Validation>
                                                {errors.jenisKeputusan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="No Keputusan" />
                                        <Input
                                            type="text"
                                            value={noKeputusan}
                                            onChange={(e) =>
                                                setNoKeputusan(e.target.value)
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.noKeputusan && (
                                            <Validation>
                                                {errors.noKeputusan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Keputusan" />
                                        <Input
                                            type="date"
                                            value={tanggalKeputusan}
                                            onChange={(e) =>
                                                setTanggalKeputusan(
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.tanggalKeputusan && (
                                            <Validation>
                                                {errors.tanggalKeputusan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Amar Putusan" />
                                        <Select
                                            value={amarKeputusanId}
                                            onChange={(e) =>
                                                setAmarKeputusanId(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        >
                                            <option value="">Pilih 1</option>
                                            {amar_putusan_all.map(
                                                (item, index) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.nama}
                                                    </option>
                                                ),
                                            )}
                                        </Select>
                                        {errors.amarKeputusanId && (
                                            <Validation>
                                                {errors.amarKeputusanId}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Nilai Akhir Menurut Keputusan" />
                                        <Input
                                            type="text"
                                            value={nilaiAkhirMenurutKeputusan}
                                            onChange={(e) =>
                                                setNilaiAkhirMenurutKeputusan(
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Kosong"
                                        />
                                        {errors.nilaiAkhirMenurutKeputusan && (
                                            <Validation>
                                                {
                                                    errors.nilaiAkhirMenurutKeputusan
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
