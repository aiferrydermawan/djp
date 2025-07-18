import React, { Fragment, useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Label from "../../Components/Label.jsx";
import Input from "../../Components/Input.jsx";
import NOPInput from "../../Components/NOPInput.jsx";
import Validation from "../../Components/Validation.jsx";
import CustomCombobox from "../../Components/CustomCombobox.jsx";
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
const formatNumber = (value) => {
    const numbers = value.toString().replace(/\D/g, ""); // Make sure value is a string
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
function Edit({
    errors,
    kpp_all,
    jenis_permohonan_all,
    jenis_ketetapan_all,
    dasar_pemrosesan_all,
    pk_all,
    permohonan,
}) {
    const [isLoading, setIsLoading] = useState(false);

    const [namaWp, setNamaWp] = useState(permohonan.nama_wp);
    const [npwp, setNpwp] = useState(permohonan.npwp);
    const [nop, setNop] = useState(permohonan.nop);
    const [kpp, setKpp] = useState(
        kpp_all.find((item) => item.id === permohonan.kode_kpp_terdaftar),
    );
    const [jenisPermohonan, setJenisPermohonan] = useState(
        jenis_permohonan_all.find(
            (item) => item.id === permohonan.jenis_permohonan,
        ),
    );
    const [nomorKetetapan, setNomorKetetapan] = useState(
        permohonan.nomor_ketetapan,
    );
    const [tanggalKetetapan, setTanggalKetetapan] = useState(
        new Date(permohonan.tanggal_ketetapan),
    );
    const [masaPajak, setMasaPajak] = useState(permohonan.masa_pajak);
    const [tahunPajak, setTahunPajak] = useState(permohonan.tahun_pajak);
    const [nilai1, setNilai1] = useState(formatNumber(permohonan.nilai_1));
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
    const [tahunBerkas, setTahunBerkas] = useState(permohonan.tahun_berkas);
    const edit = async (e) => {
        e.preventDefault();
        const tanggal_ketetapan = tanggalKetetapan
            ? tanggalKetetapan.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_wp = tanggalSuratWp
            ? tanggalSuratWp.toLocaleDateString("en-CA")
            : null;
        const tanggal_diterima = tanggalDiterima
            ? tanggalDiterima.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_pengantar = tanggalSuratPengantar
            ? tanggalSuratPengantar.toLocaleDateString("en-CA")
            : null;
        const tanggal_pengiriman_kpp = tanggalPengirimanKpp
            ? tanggalPengirimanKpp.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_tugas = tanggalSuratTugas
            ? tanggalSuratTugas.toLocaleDateString("en-CA")
            : null;
        const tanggal_matriks = tanggalMatriks
            ? tanggalMatriks.toLocaleDateString("en-CA")
            : null;
        const tanggal_surat_tugas_2 = tanggalSuratTugas2
            ? tanggalSuratTugas2.toLocaleDateString("en-CA")
            : null;
        router.put(route("permohonan-keb-nkeb.update", permohonan.id), {
            nama_wp: namaWp,
            npwp: npwp,
            nop: nop,
            kode_kpp_terdaftar: kpp ? kpp.id : null,
            jenis_permohonan: jenisPermohonan ? jenisPermohonan.id : null,
            nomor_ketetapan: nomorKetetapan,
            tanggal_ketetapan: tanggal_ketetapan,
            masa_pajak: masaPajak,
            tahun_pajak: tahunPajak,
            nilai_1: nilai1,
            dasar_pemrosesan: dasarPemrosesan,
            nomor_surat_wp: nomorSuratWp,
            tanggal_surat_wp: tanggal_surat_wp,
            nomor_lpad: nomorLpad,
            tanggal_diterima: tanggal_diterima,
            no_surat_pengantar_kpp: noSuratPengantarKpp,
            tanggal_surat_pengantar: tanggal_surat_pengantar,
            tanggal_pengiriman_kpp: tanggal_pengiriman_kpp,
            nomor_surat_tugas: nomorSuratTugas,
            tanggal_surat_tugas: tanggal_surat_tugas,
            no_matriks: noMatriks,
            tanggal_matriks: tanggal_matriks,
            nama_pk: namaPk,
            nomor_surat_tugas_2: nomorSuratTugas2 ?? null,
            tanggal_surat_tugas_2: tanggal_surat_tugas_2,
            nama_pk_2: namaPk2 ?? null,
            tahun_berkas: tahunBerkas,
        });
    };

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
                                <a href={route("permohonan-keb-nkeb.index")}>
                                    Permohonan Keb dan Non Keb
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
                                        <Label name="Nama WP (wajib)" />
                                        <Input
                                            value={namaWp}
                                            onChange={(e) =>
                                                setNamaWp(e.target.value)
                                            }
                                            placeholder="Type Here"
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
                                        <Label name="NPWP (wajib)" />
                                        <Input
                                            value={npwp}
                                            onChange={(e) =>
                                                setNpwp(e.target.value)
                                            }
                                            placeholder="Type Here"
                                        />
                                        {errors.npwp && (
                                            <Validation>
                                                {errors.npwp}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="NOP" />
                                        <NOPInput
                                            value={nop}
                                            onChange={(formattedValue) =>
                                                setNop(formattedValue)
                                            }
                                            placeholder="Type Here"
                                        />
                                        {errors.nop && (
                                            <Validation>
                                                {errors.nop}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Kode KPP Terdaftar (wajib)" />
                                        <CustomCombobox
                                            selected={kpp}
                                            onChange={setKpp}
                                            placeholder="Pilih KPP"
                                            items={kpp_all}
                                        />
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
                                        <Label name="Jenis Permohonan (wajib)" />
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
                                    <div className={`col-span-2`}></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Nomor Ketetapan (wajib)" />
                                        <NoKetetapanInput
                                            value={nomorKetetapan}
                                            onChange={(formattedValue) =>
                                                setNomorKetetapan(
                                                    formattedValue,
                                                )
                                            }
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
                                        <Label name="Tanggal Ketetapan (wajib)" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalKetetapan}
                                            onChange={(date) =>
                                                setTanggalKetetapan(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
                                        />
                                        {errors.tanggal_ketetapan && (
                                            <Validation>
                                                {errors.tanggal_ketetapan}
                                            </Validation>
                                        )}
                                    </label>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Masa Pajak (wajib)" />
                                        <Select
                                            value={masaPajak}
                                            onChange={(e) =>
                                                setMasaPajak(e.target.value)
                                            }
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
                                        <Label name="Tahun Pajak (wajib)" />
                                        <Input
                                            value={tahunPajak}
                                            type="number"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setTahunPajak(e.target.value)
                                            }
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
                                        <Label name="Nilai Ketetapan (SKP / STP) (wajib)" />
                                        <NumberInput
                                            value={nilai1}
                                            placeholder="Kosong"
                                            onChange={(formattedValue) =>
                                                setNilai1(formattedValue)
                                            }
                                        />
                                        {errors.nilai_1 && (
                                            <Validation>
                                                {errors.nilai_1}
                                            </Validation>
                                        )}
                                    </label>
                                    <div className="col-span-2"></div>
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Dasar Pemrosesan (wajib)" />
                                        <Select
                                            value={dasarPemrosesan}
                                            onChange={(e) =>
                                                setDasarPemrosesan(
                                                    e.target.value,
                                                )
                                            }
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
                                        <Label name="Nomor LPAD (wajib)" />
                                        <Input
                                            value={nomorLpad}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNomorLpad(e.target.value)
                                            }
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
                                        <Label name="Tanggal Diterima (wajib)" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalDiterima}
                                            onChange={(date) =>
                                                setTanggalDiterima(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <Label name="Nama PK (wajib)" />
                                        <Select
                                            value={namaPk}
                                            onChange={(e) =>
                                                setNamaPk(e.target.value)
                                            }
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
                                        <Label name="Nomor Surat Tugas Pengganti" />
                                        <Input
                                            value={nomorSuratTugas2}
                                            type="text"
                                            placeholder="Kosong"
                                            onChange={(e) =>
                                                setNomorSuratTugas2(
                                                    e.target.value,
                                                )
                                            }
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
                                        <Label name="Tanggal Surat Tugas Pengganti" />
                                        <DatePicker
                                            placeholderText="kosong"
                                            className="input input-bordered"
                                            selected={tanggalSuratTugas2}
                                            onChange={(date) =>
                                                setTanggalSuratTugas2(date)
                                            }
                                            dateFormat="dd-MM-yyyy"
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
                                        <Label name="Nama PK Pengganti" />
                                        <Select
                                            value={namaPk2}
                                            onChange={(e) =>
                                                setNamaPk2(e.target.value)
                                            }
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
                                    <label
                                        className={`form-control col-span-2`}
                                    >
                                        <Label name="Tahun Berkas (wajib)" />
                                        <Input
                                            value={tahunBerkas}
                                            onChange={(e) =>
                                                setTahunBerkas(e.target.value)
                                            }
                                            placeholder="Contoh: 2025"
                                            type="number"
                                        />
                                        {errors.tahun_berkas && (
                                            <Validation>
                                                {errors.tahun_berkas}
                                            </Validation>
                                        )}
                                    </label>
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
                                        <button
                                            type="submit"
                                            className={`btn btn-warning`}
                                            disabled={isLoading}
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
