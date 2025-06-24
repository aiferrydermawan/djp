import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import NPWPInput from "../../Components/NPWPInput.jsx";
import Validation from "../../Components/Validation.jsx";
import NoKetetapanInput from "../../Components/NoKetetapanInput.jsx";
import axios from "axios";
import Select from "../../Components/Select.jsx";
import { IconLoader2 } from "@tabler/icons-react";
import NumberInput from "../../Components/NumberInput.jsx";
import DatePicker from "react-datepicker";

const masaPajakAll = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
];
const mataUangAll = ["rupiah", "dollar"];
const formatNumber = (value) => {
    const numbers = value.toString().replace(/\D/g, ""); // Make sure value is a string
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
function Preview({
    errors,
    kpp_all,
    jenis_permohonan_all,
    unit_yang_memproses_all,
    jenis_ketetapan_all,
    dasar_pemrosesan_all,
    pk_all,
    permohonan,
}) {
    const [jenisPajakAll, setJenisPajakAll] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [namaWp, setNamaWp] = useState(permohonan.nama_wp);
    const [npwp, setNpwp] = useState(permohonan.npwp);
    const [nop, setNop] = useState(permohonan.nop);
    const [kpp, setKpp] = useState(permohonan.kode_kpp_terdaftar);
    const [jenisPermohonan, setJenisPermohonan] = useState(
        permohonan.jenis_permohonan,
    );
    const [unitYangMemproses, setUnitYangMemproses] = useState(
        permohonan.unit_yang_memproses,
    );
    const [jenisKetetapan, setJenisKetetapan] = useState(
        permohonan.jenis_ketetapan,
    );
    const [nomorKetetapan, setNomorKetetapan] = useState(
        permohonan.nomor_ketetapan,
    );
    const [tanggalKetetapan, setTanggalKetetapan] = useState(
        new Date(permohonan.tanggal_ketetapan),
    );
    const [tanggalKirimKetetapan, setTanggalKirimKetetapan] = useState(
        new Date(permohonan.tanggal_kirim_ketetapan),
    );
    const [jenisPajak, setJenisPajak] = useState(permohonan.jenis_pajak);
    const [masaPajak, setMasaPajak] = useState(permohonan.masa_pajak);
    const [tahunPajak, setTahunPajak] = useState(permohonan.tahun_pajak);
    const [mataUang, setMataUang] = useState(permohonan.mata_uang);
    const [nilai1, setNilai1] = useState(formatNumber(permohonan.nilai_1));
    // const [nilai2, setNilai2] = useState(formatNumber(permohonan.nilai_2));
    // const [nilai3, setNilai3] = useState(formatNumber(permohonan.nilai_3));
    // const [nilai4, setNilai4] = useState(formatNumber(permohonan.nilai_4));
    const [dasarPemrosesan, setDasarPemrosesan] = useState(
        permohonan.dasar_pemrosesan,
    );
    const [nomorSuratWp, setNomorSuratWp] = useState(permohonan.nomor_surat_wp);
    const [tanggalSuratWp, setTanggalSuratWp] = useState(
        new Date(permohonan.tanggal_surat_wp),
    );
    const [nomorLpad, setNomorLpad] = useState(permohonan.nomor_lpad);
    const [tanggalDiterima, setTanggalDiterima] = useState(
        new Date(permohonan.tanggal_diterima),
    );
    const [noSuratPengantarKpp, setNoSuratPengantarKpp] = useState(
        permohonan.no_surat_pengantar_kpp,
    );
    const [tanggalSuratPengantar, setTanggalSuratPengantar] = useState(
        new Date(permohonan.tanggal_surat_pengantar),
    );
    const [tanggalPengirimanKpp, setTanggalPengirimanKpp] = useState(
        new Date(permohonan.tanggal_pengiriman_kpp),
    );
    const [nomorSuratTugas, setNomorSuratTugas] = useState(
        permohonan.nomor_surat_tugas,
    );
    const [tanggalSuratTugas, setTanggalSuratTugas] = useState(
        new Date(permohonan.tanggal_surat_tugas),
    );
    const [namaPk, setNamaPk] = useState(permohonan.nama_pk);
    const [noMatriks, setNoMatriks] = useState(permohonan.no_matriks);
    const [tanggalMatriks, setTanggalMatriks] = useState(
        new Date(permohonan.tanggal_matriks),
    );
    const [nomorSuratTugas2, setNomorSuratTugas2] = useState(
        permohonan.nomor_surat_tugas_2 ?? "",
    );
    const [tanggalSuratTugas2, setTanggalSuratTugas2] = useState(
        permohonan.tanggal_surat_tugas_2
            ? new Date(permohonan.tanggal_surat_tugas_2)
            : "",
    );
    const [namaPk2, setNamaPk2] = useState(permohonan.nama_pk_2 ?? "");
    useEffect(() => {
        if (jenisKetetapan != null) {
            axios
                .get("/api/jenis-pajak", {
                    params: { jenis_ketetapan_id: jenisKetetapan },
                })
                .then((response) => {
                    setJenisPajakAll(response.data);
                    setJenisPajak(permohonan.jenis_pajak);
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        } else {
            setJenisPajakAll([]);
        }
    }, [jenisKetetapan]);

    return (
        <>
            <Head title="Input Permohonan KEB dan NKEB" />
            {isLoading ? (
                <div
                    className={`fixed top-0 z-50 flex min-h-screen w-full items-center justify-center bg-white/50`}
                >
                    <IconLoader2 className={`h-16 w-16 animate-spin`} />
                </div>
            ) : null}
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
                                        <Label name="Nama WP" />
                                        <Input
                                            value={namaWp}
                                            onChange={(e) =>
                                                setNamaWp(e.target.value)
                                            }
                                            placeholder="Type Here"
                                            disabled
                                        />
                                        {errors.nama_wp && (
                                            <Validation>
                                                {errors.nama_wp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="NPWP" />
                                        <NPWPInput
                                            value={npwp}
                                            onChange={(formattedValue) =>
                                                setNpwp(formattedValue)
                                            }
                                            placeholder="Type Here"
                                            disabled
                                        />
                                        {errors.npwp && (
                                            <Validation>
                                                {errors.npwp}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Kode KPP Terdaftar" />
                                        <Select
                                            value={kpp}
                                            onChange={(e) =>
                                                setKpp(e.target.value)
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {kpp_all.map((item, index) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Select>

                                        {errors.kode_kpp_terdaftar && (
                                            <Validation>
                                                {errors.kode_kpp_terdaftar}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Jenis Permohonan" />
                                        <Select
                                            value={jenisPermohonan}
                                            onChange={(e) =>
                                                setJenisPermohonan(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {jenis_permohonan_all.map(
                                                (item, index) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ),
                                            )}
                                        </Select>
                                        {errors.jenis_permohonan && (
                                            <Validation>
                                                {errors.jenis_permohonan}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Unit yang Memproses" />
                                        <Select
                                            value={unitYangMemproses}
                                            onChange={(e) =>
                                                setUnitYangMemproses(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {unit_yang_memproses_all.map(
                                                (item, index) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ),
                                            )}
                                        </Select>
                                        {errors.unit_yang_memproses && (
                                            <Validation>
                                                {errors.unit_yang_memproses}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Jenis Ketetapan" />
                                        <Select
                                            value={jenisKetetapan}
                                            onChange={(e) =>
                                                setJenisKetetapan(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {jenis_ketetapan_all.map(
                                                (item, index) => (
                                                    <option
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ),
                                            )}
                                        </Select>
                                        {errors.jenis_ketetapan && (
                                            <Validation>
                                                {errors.jenis_ketetapan}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Ketetapan" />
                                        <NoKetetapanInput
                                            value={nomorKetetapan}
                                            onChange={(formattedValue) =>
                                                setNomorKetetapan(
                                                    formattedValue,
                                                )
                                            }
                                            disabled
                                        />
                                        {errors.nomor_ketetapan && (
                                            <Validation>
                                                {errors.nomor_ketetapan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Ketetapan" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalKetetapan}
                                            onChange={(date) =>
                                                setTanggalKetetapan(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_ketetapan && (
                                            <Validation>
                                                {errors.tanggal_ketetapan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Kirim Ketetapan" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalKirimKetetapan}
                                            onChange={(date) =>
                                                setTanggalKirimKetetapan(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_kirim_ketetapan && (
                                            <Validation>
                                                {errors.tanggal_kirim_ketetapan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Jenis Pajak" />
                                        <Select
                                            value={jenisPajak}
                                            onChange={(e) =>
                                                setJenisPajak(e.target.value)
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {jenisPajakAll.map(
                                                (item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ),
                                            )}
                                        </Select>
                                        {errors.jenis_pajak && (
                                            <Validation>
                                                {errors.jenis_pajak}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Masa Pajak" />
                                        <Select
                                            value={masaPajak}
                                            onChange={(e) =>
                                                setMasaPajak(e.target.value)
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {masaPajakAll.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </Select>
                                        {errors.masa_pajak && (
                                            <Validation>
                                                {errors.masa_pajak}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tahun Pajak" />
                                        <Input
                                            value={tahunPajak}
                                            type="number"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setTahunPajak(e.target.value)
                                            }
                                            disabled
                                        />
                                        {errors.tahun_pajak && (
                                            <Validation>
                                                {errors.tahun_pajak}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Mata Uang" />
                                        <Select
                                            value={mataUang}
                                            onChange={(e) =>
                                                setMataUang(e.target.value)
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {mataUangAll.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </Select>
                                        {errors.mata_uang && (
                                            <Validation>
                                                {errors.mata_uang}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nilai Ketetapan (SKP / STP)" />
                                        <NumberInput
                                            value={nilai1}
                                            placeholder="Kosong"
                                            onChange={(formattedValue) =>
                                                setNilai1(formattedValue)
                                            }
                                            disabled
                                        />
                                        {errors.nilai_1 && (
                                            <Validation>
                                                {errors.nilai_1}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    {/*<label*/}
                                    {/*    className={`form-control col-span-2`}*/}
                                    {/*>*/}
                                    {/*    <Label name="Nilai Sanksi Administrasi" />*/}
                                    {/*    <NumberInput*/}
                                    {/*        value={nilai2}*/}
                                    {/*        placeholder="Kosong"*/}
                                    {/*        onChange={(formattedValue) =>*/}
                                    {/*            setNilai2(formattedValue)*/}
                                    {/*        }*/}
                                    {/*        disabled*/}
                                    {/*    />*/}
                                    {/*    {errors.nilai_2 && (*/}
                                    {/*        <Validation>*/}
                                    {/*            {errors.nilai_2}*/}
                                    {/*        </Validation>*/}
                                    {/*    )}*/}
                                    {/*</label>*/}
                                    <div className="col-span-2"></div>
                                    {/*<label*/}
                                    {/*    className={`form-control col-span-2`}*/}
                                    {/*>*/}
                                    {/*    <Label name="Nilai Ketetapan / Sanksi Administrasi yang disetujui" />*/}
                                    {/*    <NumberInput*/}
                                    {/*        value={nilai3}*/}
                                    {/*        type="text"*/}
                                    {/*        placeholder="Kosong"*/}
                                    {/*        onChange={(formattedValue) =>*/}
                                    {/*            setNilai3(formattedValue)*/}
                                    {/*        }*/}
                                    {/*        disabled*/}
                                    {/*    />*/}
                                    {/*    {errors.nilai_3 && (*/}
                                    {/*        <Validation>*/}
                                    {/*            {errors.nilai_3}*/}
                                    {/*        </Validation>*/}
                                    {/*    )}*/}
                                    {/*</label>*/}
                                    <div className="col-span-2"></div>
                                    {/*<label*/}
                                    {/*    className={`form-control col-span-2`}*/}
                                    {/*>*/}
                                    {/*    <Label name="Nilai Ajukan Upaya Hukum" />*/}
                                    {/*    <NumberInput*/}
                                    {/*        value={nilai4}*/}
                                    {/*        placeholder="Kosong"*/}
                                    {/*        onChange={(formattedValue) =>*/}
                                    {/*            setNilai4(formattedValue)*/}
                                    {/*        }*/}
                                    {/*        disabled*/}
                                    {/*    />*/}
                                    {/*    {errors.nilai_4 && (*/}
                                    {/*        <Validation>*/}
                                    {/*            {errors.nilai_4}*/}
                                    {/*        </Validation>*/}
                                    {/*    )}*/}
                                    {/*</label>*/}
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Dasar Pemrosesan" />
                                        <Select
                                            value={dasarPemrosesan}
                                            onChange={(e) =>
                                                setDasarPemrosesan(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {dasar_pemrosesan_all.map(
                                                (item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item.id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ),
                                            )}
                                        </Select>
                                        {errors.dasar_pemrosesan && (
                                            <Validation>
                                                {errors.dasar_pemrosesan}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Surat WP/Surat Usulan KPP" />
                                        <Input
                                            value={nomorSuratWp}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNomorSuratWp(e.target.value)
                                            }
                                            disabled
                                        />
                                        {errors.nomor_surat_wp && (
                                            <Validation>
                                                {errors.nomor_surat_wp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Surat WP" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSuratWp}
                                            onChange={(date) =>
                                                setTanggalSuratWp(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_surat_wp && (
                                            <Validation>
                                                {errors.tanggal_surat_wp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor LPAD" />
                                        <Input
                                            value={nomorLpad}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNomorLpad(e.target.value)
                                            }
                                            disabled
                                        />
                                        {errors.nomor_lpad && (
                                            <Validation>
                                                {errors.nomor_lpad}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Diterima" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalDiterima}
                                            onChange={(date) =>
                                                setTanggalDiterima(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_diterima && (
                                            <Validation>
                                                {errors.tanggal_diterima}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="No Surat Pengantar dari KPP" />
                                        <Input
                                            value={noSuratPengantarKpp}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNoSuratPengantarKpp(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        />
                                        {errors.no_surat_pengantar_kpp && (
                                            <Validation>
                                                {errors.no_surat_pengantar_kpp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Surat Pengantar" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSuratPengantar}
                                            onChange={(date) =>
                                                setTanggalSuratPengantar(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_surat_pengantar && (
                                            <Validation>
                                                {errors.tanggal_surat_pengantar}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Pengiriman KPP" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalPengirimanKpp}
                                            onChange={(date) =>
                                                setTanggalPengirimanKpp(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_pengiriman_kpp && (
                                            <Validation>
                                                {errors.tanggal_pengiriman_kpp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Surat Tugas" />
                                        <Input
                                            value={nomorSuratTugas}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNomorSuratTugas(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        />
                                        {errors.nomor_surat_tugas && (
                                            <Validation>
                                                {errors.nomor_surat_tugas}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Surat Tugas" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSuratTugas}
                                            onChange={(date) =>
                                                setTanggalSuratTugas(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_surat_tugas && (
                                            <Validation>
                                                {errors.tanggal_surat_tugas}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="No Matriks" />
                                        <Input
                                            value={noMatriks}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNoMatriks(e.target.value)
                                            }
                                            disabled
                                        />
                                        {errors.no_matriks && (
                                            <Validation>
                                                {errors.no_matriks}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-1`}
                                    >
                                        <Label name="Tanggal Matriks" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalMatriks}
                                            onChange={(date) =>
                                                setTanggalMatriks(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_matriks && (
                                            <Validation>
                                                {errors.tanggal_matriks}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nama PK" />
                                        <Select
                                            value={namaPk}
                                            onChange={(e) =>
                                                setNamaPk(e.target.value)
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {pk_all.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item.id}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Select>
                                        {errors.nama_pk && (
                                            <Validation>
                                                {errors.nama_pk}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Surat Tugas Pengganti *Tidak Wajib" />
                                        <Input
                                            value={nomorSuratTugas2}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNomorSuratTugas2(
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        />
                                        {errors.nomor_surat_tugas_2 && (
                                            <Validation>
                                                {errors.nomor_surat_tugas_2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Tanggal Surat Tugas Pengganti *Tidak Wajib" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSuratTugas2}
                                            onChange={(date) =>
                                                setTanggalSuratTugas2(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                            disabled
                                        />
                                        {errors.tanggal_surat_tugas_2 && (
                                            <Validation>
                                                {errors.tanggal_surat_tugas_2}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nama PK Pengganti *Tidak Wajib" />
                                        <Select
                                            value={namaPk2}
                                            onChange={(e) =>
                                                setNamaPk2(e.target.value)
                                            }
                                            disabled
                                        >
                                            <option value="">Pilih 1</option>
                                            {pk_all.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item.id}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Select>
                                        {errors.nama_pk_2 && (
                                            <Validation>
                                                {errors.nama_pk_2}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    {Object.keys(errors).length > 0 ? (
                                        <div
                                            className={`col-span-4 rounded-lg bg-error p-4 shadow`}
                                        >
                                            <div className={`mb-4 font-medium`}>
                                                Daftar Error
                                            </div>
                                            <ul
                                                className={`w-full list-inside list-disc`}
                                            >
                                                {Object.keys(errors).map(
                                                    (key, index) => (
                                                        <li key={index}>
                                                            {errors[key]}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    ) : null}
                                    <div className={`col-span-4`}>
                                        <a
                                            href={route(
                                                "monitoring.pencarian-sk",
                                            )}
                                            type="submit"
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
