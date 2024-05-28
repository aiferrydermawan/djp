import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import Select from "@/Components/Select.jsx";
import Validation from "@/Components/Validation.jsx";
import DatePicker from "react-datepicker";
import NumberInput from "@/Components/NumberInput.jsx";
function Preview({ errors, permohonan, amar_putusan_all }) {
    const formatNumber = (value) => {
        const numbers = value.toString().replace(/\D/g, ""); // Make sure value is a string
        return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

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

    const [jenisKeputusan, setJenisKeputusan] = useState("");
    const [noKeputusan, setNoKeputusan] = useState("");
    const [tanggalKeputusan, setTanggalKeputusan] = useState("");
    const [amarKeputusanId, setAmarKeputusanId] = useState("");
    const [nilaiAkhirMenurutKeputusan, setNilaiAkhirMenurutKeputusan] =
        useState("");

    useEffect(() => {
        if (permohonan.data_keputusan != null) {
            const data = permohonan.data_keputusan;
            setJenisKeputusan(data.jenis_keputusan);
            setNoKeputusan(data.no_keputusan);
            setTanggalKeputusan(
                data.tanggal_keputusan
                    ? new Date(data.tanggal_keputusan)
                    : null,
            );
            setAmarKeputusanId(data.amar_keputusan_id);
            setNilaiAkhirMenurutKeputusan(
                formatNumber(data.nilai_akhir_menurut_keputusan),
            );
        }
    }, [permohonan]);

    return (
        <>
            <Head title="Preview Data Keputusan" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <a href={route("monitoring.pencarian-sk")}>
                                    Pencarian SK
                                </a>
                            </li>
                            <li>Preview</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form>
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
                                        <Label name="Jenis Keputusan" />
                                        <Select
                                            value={jenisKeputusan}
                                            onChange={(e) =>
                                                setJenisKeputusan(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
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
                                            disabled
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
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalKeputusan}
                                            onChange={(date) =>
                                                setTanggalKeputusan(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
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
                                            disabled
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
                                        <NumberInput
                                            value={nilaiAkhirMenurutKeputusan}
                                            placeholder="Kosong"
                                            onChange={(formattedValue) =>
                                                setNilaiAkhirMenurutKeputusan(
                                                    formattedValue,
                                                )
                                            }
                                            disabled
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
                                        <a
                                            href={route(
                                                "monitoring.pencarian-sk",
                                            )}
                                            className={`btn btn-warning`}
                                        >
                                            Kembali
                                        </a>
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

export default Preview;
