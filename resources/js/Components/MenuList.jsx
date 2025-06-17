import React from "react";
import {
    IconAffiliate,
    IconChartBar,
    IconDashboard,
    IconFolder,
    IconFolderSearch,
    IconLock,
    IconLogout,
    IconPrinter,
} from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

function MenuList() {
    return (
        <ul className="menu menu-lg w-full text-white">
            <li>
                <a href={route("dashboard")}>
                    <IconDashboard />
                    Dashboard
                </a>
            </li>
            <li>
                <details>
                    <summary>
                        <IconFolder />
                        KEB - NKEB
                    </summary>
                    <ul>
                        <li>
                            <a href={route("permohonan-keb-nkeb.index")}>
                                Permohonan
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href={route("penelitian-formal.index")}>*/}
                        {/*        Penelitian Formal*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href={route("spid-pembahasan.index")}>*/}
                        {/*        SPID dan Pembahasan*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href={route("spuh.index")}>SPUH</a>*/}
                        {/*</li>*/}
                        <li>
                            <a href={route("data-keputusan.index")}>
                                Data Keputusan
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href={route("kriteria-permohonan.index")}>*/}
                        {/*        Kriteria Permohonan*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li>
                            <a href={route("data-pengiriman.index")}>
                                Data Pengiriman
                            </a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>
                        <IconFolder />
                        SUB - STG
                    </summary>
                    <ul>
                        <li>
                            <a href={route("input-permintaan")}>
                                Input Permintaan
                            </a>
                        </li>
                        <li>
                            <a href={route("surat-jawaban")}>Surat Jawaban</a>
                        </li>
                        <li>
                            <a href={route("pengiriman")}>Pengiriman</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>
                        <IconChartBar />
                        Statistik
                    </summary>
                    <ul>
                        <li>
                            <a href={route("berkas-masuk-selesai.masuk")}>
                                Statistik Berkas Masuk/Selesai
                            </a>
                        </li>
                        <li>
                            <a
                                href={route(
                                    "distribusi-berkas.penelaah-keberatan",
                                )}
                            >
                                Distribusi Berkas
                            </a>
                        </li>
                        <li>
                            <a href={route("amar-putusan")}>
                                Statistik Amar Putusan
                            </a>
                        </li>
                        <li>
                            <a href={route("list-tunggakan-keb-nkeb.index")}>
                                List Tunggakan KEB dan Non Keb
                            </a>
                        </li>
                        <li>
                            <a href={route("list-tunggakan-sub-stg")}>
                                List Tunggakan SUB dan STG
                            </a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>
                        <IconFolderSearch />
                        Monitoring
                    </summary>
                    <ul>
                        <li>
                            <a href={route("monitoring.pengiriman-kep-surat")}>
                                Pengiriman KEP/Surat
                            </a>
                        </li>
                        <li>
                            <a href={route("monitoring.jatuh-tempo-berkas")}>
                                Jatuh Tempo Berkas
                            </a>
                        </li>
                        <li>
                            <a href={route("monitoring.pencarian-sk")}>
                                Pencarian SK
                            </a>
                        </li>
                        <li>
                            <a href={route("monitoring.penyelesaian-permohonan") }>
                                Penyelesaian Permohonan
                            </a>
                        </li>
                        <li>
                            <a href={route("monitoring.penyelesaian-per-pk") }>
                                Penyelesaian Per PK
                            </a>
                        </li>
                        <li>
                            <a href={ route("monitoring.jangka-waktu-penyelesaian-per-pk") }>
                                Jangka Waktu Penyelesaian Per PK
                            </a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>
                        <IconPrinter />
                        Cetak
                    </summary>
                    <ul>
                        <li>
                            <a href="">
                                <IconLock />
                                Kriteria Permohonan
                            </a>
                        </li>
                        <li>
                            <a href={route("template-map.index")}>
                                Template MAP
                            </a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>
                        <IconAffiliate />
                        Referensi
                    </summary>
                    <ul>
                        <li>
                            <a
                                href={route("referensi.index", {
                                    kategori: "amar-putusan",
                                })}
                            >
                                Amar Putusan
                            </a>
                        </li>
                        <li>
                            <a href={route("kpp.index")}>Kode KPP</a>
                        </li>
                        <li>
                            <a href={route("jenis-pajak.index")}>Jenis Pajak</a>
                        </li>
                        <li>
                            <a
                                href={route("referensi.index", {
                                    kategori: "alasan",
                                })}
                            >
                                Alasan
                            </a>
                        </li>
                        <li>
                            <a href={route("jenis-permohonan.index")}>
                                Jenis Permohonan
                            </a>
                        </li>
                        <li>
                            <a
                                href={route("referensi.index", {
                                    kategori: "dasar-pemrosesan",
                                })}
                            >
                                Dasar Pemrosesan
                            </a>
                        </li>
                        <li>
                            <a
                                href={route("referensi.index", {
                                    kategori: "pemenuhan-kriteria",
                                })}
                            >
                                Pemenuhan Kriteria
                            </a>
                        </li>
                        <li>
                            <a
                                href={route("referensi.index", {
                                    kategori: "unit-organisasi",
                                })}
                            >
                                Unit Organisasi
                            </a>
                        </li>
                        <li>
                            <a href={route("pegawai.index")}>Pegawai</a>
                        </li>
                        <li>
                            <a
                                href={route("referensi.index", {
                                    kategori: "jenis-ketetapan",
                                })}
                            >
                                Jenis Ketetapan
                            </a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <Link href={route("logout")} method="post" as="button">
                    <IconLogout />
                    Keluar
                </Link>
            </li>
        </ul>
    );
}

export default MenuList;
