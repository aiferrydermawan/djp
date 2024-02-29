import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";
import Select from "@/Components/Select.jsx";

function Create(props) {
    const errors = props.errors;
    const unitOrganisasiAll = props.unit_organisasi_all;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nip, setNip] = useState("");
    const [ip, setIp] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [pangkat, setPangkat] = useState("");
    const [unitOrganisasi, setUnitOrganisasi] = useState("");

    const store = async (e) => {
        e.preventDefault();
        router.post(route("pegawai.store"), {
            name: name,
            email: email,
            password: password,
            nip: nip,
            ip: ip,
            jabatan: jabatan,
            pangkat: pangkat,
            unit_organisasi: unitOrganisasi,
        });
    };
    return (
        <>
            <Head title="Tambah Pegawai" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <a href={route("pegawai.index")}>Pegawai</a>
                            </li>
                            <li>Tambah</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={store}>
                                <h2 className={`card-title`}>
                                    Informasi Pribadi
                                </h2>
                                <label className={`form-control`}>
                                    <Label name="Nama" />
                                    <Input
                                        type="text"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Nama Lengkap"
                                    />
                                    {errors.name && (
                                        <Validation>{errors.name}</Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Email" />
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="user@example.com"
                                    />
                                    {errors.email && (
                                        <Validation>{errors.email}</Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Password" />
                                    <Input
                                        type="text"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="******"
                                    />
                                    {errors.password && (
                                        <Validation>
                                            {errors.password}
                                        </Validation>
                                    )}
                                </label>
                                <h2 className={`card-title mt-5`}>
                                    Informasi Tambahan
                                </h2>
                                <label className={`form-control`}>
                                    <Label name="NIP" />
                                    <Input
                                        type="text"
                                        value={nip}
                                        onChange={(e) => setNip(e.target.value)}
                                        placeholder="Kosong"
                                    />
                                    {errors.nip && (
                                        <Validation>{errors.nip}</Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="IP" />
                                    <Input
                                        type="text"
                                        value={ip}
                                        onChange={(e) => setIp(e.target.value)}
                                        placeholder="Kosong"
                                    />
                                    {errors.ip && (
                                        <Validation>{errors.ip}</Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Pangkat" />
                                    <Input
                                        type="text"
                                        value={pangkat}
                                        onChange={(e) =>
                                            setPangkat(e.target.value)
                                        }
                                        placeholder="Kosong"
                                    />
                                    {errors.pangkat && (
                                        <Validation>
                                            {errors.pangkat}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Jabatan" />
                                    <Select
                                        type="text"
                                        value={jabatan}
                                        onChange={(e) =>
                                            setJabatan(e.target.value)
                                        }
                                        placeholder="Kosong"
                                    >
                                        <option value="">Pilih 1</option>
                                        <option value="admin">Admin</option>
                                        <option value="kepala kanwil">
                                            Kepala Kanwil
                                        </option>
                                        <option value="kepala bidang">
                                            Kepala Bidang
                                        </option>
                                        <option value="kepala seksi">
                                            Kepala Seksi
                                        </option>
                                        <option value="pelaksana">
                                            Pelaksana
                                        </option>
                                        <option value="penelaah keberatan">
                                            Penelaah Keberatan
                                        </option>
                                    </Select>
                                    {errors.jabatan && (
                                        <Validation>
                                            {errors.jabatan}
                                        </Validation>
                                    )}
                                </label>
                                <label className={`form-control`}>
                                    <Label name="Unit Organisasi" />
                                    <Select
                                        type="text"
                                        value={unitOrganisasi}
                                        onChange={(e) =>
                                            setUnitOrganisasi(e.target.value)
                                        }
                                        placeholder="Kosong"
                                    >
                                        <option value="">Kosong</option>
                                        {unitOrganisasiAll.map(
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
                                    {errors.unit_organisasi && (
                                        <Validation>
                                            {errors.unit_organisasi}
                                        </Validation>
                                    )}
                                </label>
                                {Object.keys(errors).length > 0 ? (
                                    <div
                                        className={`mt-4 rounded-lg bg-error p-4 shadow`}
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
                                <div className={`mt-4`}>
                                    <button
                                        type="submit"
                                        className={`btn btn-primary`}
                                    >
                                        Buat
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}

export default Create;
