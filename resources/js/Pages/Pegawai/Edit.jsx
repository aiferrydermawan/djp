import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Input from "@/Components/Input.jsx";
import Label from "@/Components/Label.jsx";
import Validation from "@/Components/Validation.jsx";
import Select from "@/Components/Select.jsx";

function Edit(props) {
    const errors = props.errors;
    const user = props.user;
    const unitOrganisasiAll = props.unit_organisasi_all;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [nip, setNip] = useState(user.detail.nip);
    const [ip, setIp] = useState(user.detail.ip);
    const [jabatan, setJabatan] = useState(user.detail.jabatan);
    const [pangkat, setPangkat] = useState(user.detail.pangkat);
    const [unitOrganisasi, setUnitOrganisasi] = useState(
        user.detail.unit_organisasi_id,
    );

    const edit = async (e) => {
        e.preventDefault();
        router.put(route("pegawai.update", user.id), {
            name: name,
            email: email,
            nip: nip,
            ip: ip,
            jabatan: jabatan,
            pangkat: pangkat,
            unit_organisasi: unitOrganisasi,
        });
    };
    return (
        <>
            <Head title="Edit Pegawai" />
            <AuthenticatedLayout>
                <div className={`p-5`}>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>
                                <Link href={route("pegawai.index")}>
                                    Pegawai
                                </Link>
                            </li>
                            <li>Edit</li>
                        </ul>
                    </div>
                    <div className="card mt-5 bg-base-100 shadow">
                        <div className="card-body">
                            <form onSubmit={edit}>
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
                                        className={`btn btn-warning`}
                                    >
                                        Edit
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

export default Edit;
