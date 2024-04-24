<ul class="menu menu-lg w-full text-white">
    <li>
        <a href="{{ route("dashboard") }}">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-dashboard"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M13.45 11.55l2.05 -2.05" />
                <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
            </svg>
            Dashboard
        </a>
    </li>
    <li>
        <details>
            <summary>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
                    />
                </svg>
                KEB - NKEB
            </summary>
            <ul>
                <li>
                    <a href="{{ route("permohonan-keb-nkeb.index") }}">
                        Permohonan
                    </a>
                </li>
                <li>
                    <a href="{{ route("penelitian-formal.index") }}">
                        Penelitian Formal
                    </a>
                </li>
                <li>
                    <a href="{{ route("spid-pembahasan.index") }}">
                        SPID dan Pembahasan
                    </a>
                </li>
                <li>
                    <a href="{{ route("spuh.index") }}">SPUH</a>
                </li>
                <li>
                    <a href="{{ route("data-keputusan.index") }}">
                        Data Keputusan
                    </a>
                </li>
                <li>
                    <a href="{{ route("kriteria-permohonan.index") }}">
                        Kriteria Permohonan
                    </a>
                </li>
                <li>
                    <a href="{{ route("data-pengiriman.index") }}">
                        Data Pengiriman
                    </a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
                    />
                </svg>
                SUB - STG
            </summary>
            <ul>
                <li>
                    <a href="{{ route("input-permintaan") }}">
                        Input Permintaan
                    </a>
                </li>
                <li>
                    <a href="{{ route("surat-jawaban") }}">Surat Jawaban</a>
                </li>
                <li>
                    <a href="{{ route("pengiriman") }}">Pengiriman</a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chart-bar"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                    />
                    <path
                        d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                    />
                    <path
                        d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                    />
                    <path d="M4 20l14 0" />
                </svg>
                Statistik
            </summary>
            <ul>
                <li>
                    <a href="{{ route("berkas-masuk-selesai.index") }}">
                        Statistik Berkas Masuk/Selesai
                    </a>
                </li>
                <li>
                    <a
                        href="{{ route("distribusi-berkas.penelaah-keberatan") }}"
                    >
                        Distribusi Berkas
                    </a>
                </li>
                <li>
                    <a href="">Statistik Amar Putusan</a>
                </li>
                <li>
                    <a href="{{ route("list-tunggakan-keb-nkeb.index") }}">
                        List Tunggakan KEB dan Non Keb
                    </a>
                </li>
                <li>
                    <a href="">List Tunggakan SUB dan STG</a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-folder-search"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2.5"
                    />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M20.2 20.2l1.8 1.8" />
                </svg>
                Monitoring
            </summary>
            <ul>
                <li>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-lock"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
                            />
                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                        </svg>
                        Monitoring Pengiriman KEP/Surat
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-lock"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
                            />
                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                        </svg>
                        Monitoring Jatuh Tempo Berkas
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-lock"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
                            />
                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                        </svg>
                        Pencarian SK
                    </a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-printer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"
                    />
                    <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                    <path
                        d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"
                    />
                </svg>
                Cetak
            </summary>
            <ul>
                <li>
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-lock"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
                            />
                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                        </svg>
                        Kriteria Permohonan
                    </a>
                </li>
                <li>
                    <a href="{{ route("template-map.index") }}">
                        Template MAP
                    </a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <details>
            <summary>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-affiliate"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"
                    />
                    <path d="M11.683 12.317l5.759 -5.759" />
                    <path
                        d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"
                    />
                    <path
                        d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"
                    />
                    <path
                        d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"
                    />
                    <path
                        d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"
                    />
                </svg>
                Referensi
            </summary>
            <ul>
                <li>
                    <a
                        href="{{ route("referensi.index", ["kategori" => "amar-putusan"]) }}"
                    >
                        Amar Putusan
                    </a>
                </li>
                <li>
                    <a href="{{ route("kpp.index") }}">Kode KPP</a>
                </li>
                <li>
                    <a href="{{ route("jenis-pajak.index") }}">Jenis Pajak</a>
                </li>
                <li>
                    <a
                        href="{{ route("referensi.index", ["kategori" => "alasan"]) }}"
                    >
                        Alasan
                    </a>
                </li>
                <li>
                    <a href="{{ route("jenis-permohonan.index") }}">
                        Jenis Permohonan
                    </a>
                </li>
                <li>
                    <a
                        href="{{ route("referensi.index", ["kategori" => "dasar-pemrosesan"]) }}"
                    >
                        Dasar Pemrosesan
                    </a>
                </li>
                <li>
                    <a
                        href="{{ route("referensi.index", ["kategori" => "pemenuhan-kriteria"]) }}"
                    >
                        Pemenuhan Kriteria
                    </a>
                </li>
                <li>
                    <a
                        href="{{ route("referensi.index", ["kategori" => "unit-organisasi"]) }}"
                    >
                        Unit Organisasi
                    </a>
                </li>
                <li>
                    <a href="{{ route("pegawai.index") }}">Pegawai</a>
                </li>
                <li>
                    <a
                        href="{{ route("referensi.index", ["kategori" => "jenis-ketetapan"]) }}"
                    >
                        Jenis Ketetapan
                    </a>
                </li>
            </ul>
        </details>
    </li>
    <li>
        <form
            action="{{ route("logout") }}"
            method="POST"
            style="display: inline"
        >
            @csrf
            <button type="submit" class="flex gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-logout"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                    />
                    <path d="M9 12h12l-3 -3" />
                    <path d="M18 15l3 -3" />
                </svg>
                Keluar
            </button>
        </form>
    </li>
</ul>
