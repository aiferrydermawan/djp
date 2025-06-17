<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>
                <a href="{{ route("permohonan-keb-nkeb.index") }}">
                    Permohonan Keb dan Non Keb
                </a>
            </li>
            <li>Import</li>
        </ul>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <form wire:submit="save" enctype="multipart/form-data">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Permohonan File .csv</span>
                    </div>
                    <input
                        wire:model="permohonan_file"
                        type="file"
                        class="file-input file-input-bordered w-full"
                    />
                    @error("permohonan_file")
                        <div class="label">
                            <span class="label-text-alt text-error">
                                {{ $message }}
                            </span>
                        </div>
                    @enderror
                </label>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">
                        Upload
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="card-title">Template Import</div>
            <p>Data dibaca mulai baris ke-2</p>
            <table class="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Kolom</th>
                        <th>Data</th>
                        <th>Contoh</th>
                        <th>Keterangan</th>
                        <th>Referensi</th>
                    </tr>
                </thead>
                <tbody
                    x-data="{
                        permohonan_all: [
                            {
                                id: 1,
                                kolom: 'A',
                                data: 'Nama WP',
                                contoh: 'PT JAYA MAKMUR',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 2,
                                kolom: 'B',
                                data: 'NPWP',
                                contoh: '03.000.000.4-115.000',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 3,
                                kolom: 'C',
                                data: 'Kode KPP Terdaftar',
                                contoh: '*kode kpp',
                                referensi: '{{ route("kpp.index") }}',
                                warna_baris: 'putih',
                            },
                            {
                                id: 4,
                                kolom: 'D',
                                data: 'Kategori Permohonan',
                                contoh: '*id',
                                referensi: '{{ route("jenis-permohonan.index") }}',
                                warna_baris: 'putih',
                            },
                            {
                                id: 5,
                                kolom: 'E',
                                data: 'Jenis Permohonan',
                                contoh: '*id',
                                referensi: '{{ route("jenis-permohonan.index") }}',
                                warna_baris: 'putih',
                            },
                            { id: 6, kolom: 'F', data: 'Masa Pajak', contoh: '01', referensi: '', warna_baris: 'putih', },
                            {
                                id: 7,
                                kolom: 'G',
                                data: 'Tahun Pajak',
                                contoh: '2020',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 8,
                                kolom: 'H',
                                data: 'Nomor Ketetapan',
                                contoh: '00012/201/22/115/20',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 9,
                                kolom: 'I',
                                data: 'Tanggal Ketetapan',
                                contoh: '20/12/2012',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 10,
                                kolom: 'J',
                                data: 'Nilai Ketetapan (SKP / STP)',
                                contoh: '10000',
                                referensi: '',
                                warna_baris: 'putih',
                                keterangan: 'Hanya Angka',
                            },
                            {
                                id: 11,
                                kolom: 'K',
                                data: 'Dasar Pemrosesan',
                                contoh: '*id',
                                referensi:
                                    '{{ route("referensi.index", ["kategori" => "jenis-ketetapan"]) }}',
                                    warna_baris: 'putih',
                            },
                            {
                                id: 12,
                                kolom: 'L',
                                data: 'Nomor Surat WP/Surat Usulan KPP',
                                contoh: '25626/XI/23',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 13,
                                kolom: 'M',
                                data: 'Tanggal Surat WP',
                                contoh: '20/12/2012',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 14,
                                kolom: 'N',
                                data: 'Nomor LPAD',
                                contoh: 'FORM-021522222/BPS.KPP266/2023',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 15,
                                kolom: 'O',
                                data: 'Tanggal Diterima',
                                contoh: '20/12/2012',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 16,
                                kolom: 'P',
                                data: 'Tanggal Berakhir',
                                contoh: '20/12/2012',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 17,
                                kolom: 'Q',
                                data: 'No Surat Pengantar dari KPP',
                                contoh: 'ND-2522/KPP.266/2023',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 18,
                                kolom: 'R',
                                data: 'Tanggal Surat Pengantar',
                                contoh: '20/12/2012',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 19,
                                kolom: 'S',
                                data: 'Nomor Surat Tugas',
                                contoh: 'ST-1252/WPJ.26/2023',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 20,
                                kolom: 'T',
                                data: 'Tanggal Surat Tugas',
                                contoh: '20/12/2012',
                                referensi: '',
                                warna_baris: 'putih',
                            },
                            {
                                id: 21,
                                kolom: 'U',
                                data: 'ID Penelaah Keberatan',
                                contoh: '*ip',
                                referensi: '{{ route("pegawai.index") }}',
                                warna_baris: 'putih',
                            },
                            {
                                id: 22,
                                kolom: 'V',
                                data: 'Tahun Berkas',
                                contoh: '2025',
                                warna_baris: 'putih',
                            },
                            {
                                id: 23,
                                kolom: 'W',
                                data: 'Pembuat',
                                contoh: '*ip',
                                referensi: '{{ route("pegawai.index") }}',
                                warna_baris: 'putih',
                            },
                            {
                                id: 24,
                                kolom: 'X',
                                data: 'Dibuat',
                                contoh: '20/12/2012',
                                warna_baris: 'putih',
                            },
                            {
                                id: 25,
                                kolom: 'Y',
                                data: 'Diubah',
                                contoh: '20/12/2012',
                                warna_baris: 'putih',
                            },
                        ],
                    }"
                >
                    <template
                        x-for="permohonan in permohonan_all"
                        :key="permohonan.id"
                    >
                        <tr :class="permohonan.warna_baris === 'merah' ? 'bg-red-200' : ''" class="hover">
                        <th x-text="permohonan.id - 1"></th>
                            <td x-text="permohonan.kolom"></td>
                            <td x-text="permohonan.data"></td>
                            <td x-text="permohonan.contoh"></td>
                            <td x-text="permohonan.keterangan"></td>
                            <td>
                                <template x-if="permohonan.referensi">
                                    <a
                                        class="link"
                                        :href="permohonan.referensi"
                                    >
                                        Klik disini
                                    </a>
                                </template>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</div>
