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
                            },
                            {
                                id: 2,
                                kolom: 'B',
                                data: 'NPWP',
                                contoh: '03.000.000.4-115.000',
                                referensi: '',
                            },
                            {
                                id: 3,
                                kolom: 'C',
                                data: 'NOP *Tidak Wajib',
                                contoh: '586561',
                                referensi: '',
                            },
                            {
                                id: 4,
                                kolom: 'D',
                                data: 'Kode KPP Terdaftar',
                                contoh: '*kode kpp',
                                referensi: '{{ route("kpp.index") }}',
                            },
                            {
                                id: 5,
                                kolom: 'E',
                                data: 'Jenis Permohonan',
                                contoh: '*id',
                                referensi: '{{ route("jenis-permohonan.index") }}',
                            },
                            {
                                id: 6,
                                kolom: 'F',
                                data: 'Unit yang Memproses',
                                contoh: '*ip',
                                referensi: '{{ route("pegawai.index") }}',
                            },
                            {
                                id: 7,
                                kolom: 'G',
                                data: 'Jenis Ketetapan',
                                contoh: '*id',
                                referensi:
                                    '{{ route("referensi.index", ["kategori" => "jenis-ketetapan"]) }}',
                            },
                            {
                                id: 8,
                                kolom: 'H',
                                data: 'Nomor Ketetapan',
                                contoh: '00012/201/22/115/20',
                                referensi: '',
                            },
                            {
                                id: 9,
                                kolom: 'I',
                                data: 'Tanggal Ketetapan',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 10,
                                kolom: 'J',
                                data: 'Tanggal Kirim Ketetapan',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 11,
                                kolom: 'K',
                                data: 'Jenis Pajak',
                                contoh: '*id',
                                referensi: '{{ route("jenis-pajak.index") }}',
                            },
                            { id: 12, kolom: 'L', data: 'Masa Pajak', contoh: '01', referensi: '' },
                            {
                                id: 13,
                                kolom: 'M',
                                data: 'Tahun Pajak',
                                contoh: '2020',
                                referensi: '',
                            },
                            {
                                id: 14,
                                kolom: 'N',
                                data: 'Mata Uang',
                                contoh: 'rupiah',
                                referensi: '',
                                keterangan: 'rupiah / dollar',
                            },
                            {
                                id: 15,
                                kolom: 'O',
                                data: 'Nilai Ketetapan (SKP / STP)',
                                contoh: '10000',
                                referensi: '',
                                keterangan: 'Hanya Angka',
                            },
                            {
                                id: 16,
                                kolom: 'P',
                                data: 'Nilai Sanksi Administrasi',
                                contoh: '10000',
                                referensi: '',
                                keterangan: 'Hanya Angka',
                            },
                            {
                                id: 17,
                                kolom: 'Q',
                                data: 'Nilai Ketetapan / Sanksi Administrasi yang disetujui',
                                contoh: '10000',
                                referensi: '',
                                keterangan: 'Hanya Angka',
                            },
                            {
                                id: 18,
                                kolom: 'R',
                                data: 'Nilai Ajukan Upaya Hukum',
                                contoh: '10000',
                                referensi: '',
                                keterangan: 'Hanya Angka',
                            },
                            {
                                id: 19,
                                kolom: 'S',
                                data: 'Dasar Pemrosesan',
                                contoh: '*id',
                                referensi:
                                    '{{ route("referensi.index", ["kategori" => "jenis-ketetapan"]) }}',
                            },
                            {
                                id: 20,
                                kolom: 'T',
                                data: 'Nomor Surat WP/Surat Usulan KPP',
                                contoh: '25626/XI/23',
                                referensi: '',
                            },
                            {
                                id: 21,
                                kolom: 'U',
                                data: 'Tanggal Surat WP',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 22,
                                kolom: 'V',
                                data: 'Nomor LPAD',
                                contoh: 'FORM-021522222/BPS.KPP266/2023',
                                referensi: '',
                            },
                            {
                                id: 23,
                                kolom: 'W',
                                data: 'Tanggal Diterima',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 24,
                                kolom: 'X',
                                data: 'No Surat Pengantar dari KPP',
                                contoh: 'ND-2522/KPP.266/2023',
                                referensi: '',
                            },
                            {
                                id: 25,
                                kolom: 'Y',
                                data: 'Tanggal Surat Pengantar',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 26,
                                kolom: 'Z',
                                data: 'Tanggal Pengiriman KPP',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 27,
                                kolom: 'AA',
                                data: 'Nomor Surat Tugas',
                                contoh: 'ST-1252/WPJ.26/2023',
                                referensi: '',
                            },
                            {
                                id: 28,
                                kolom: 'AB',
                                data: 'Tanggal Surat Tugas',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 29,
                                kolom: 'AC',
                                data: 'No Matriks',
                                contoh: '582',
                                referensi: '',
                            },
                            {
                                id: 30,
                                kolom: 'AD',
                                data: 'Tanggal Matriks',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 31,
                                kolom: 'AE',
                                data: 'ID Penelaah Keberatan',
                                contoh: '*ip',
                                referensi: '{{ route("pegawai.index") }}',
                            },
                            {
                                id: 32,
                                kolom: 'AF',
                                data: 'Nomor Surat Tugas Pengganti *Tidak Wajib',
                                contoh: 'ST-1252/WPJ.26/2023',
                                referensi: '',
                            },
                            {
                                id: 33,
                                kolom: 'AG',
                                data: 'Tanggal Surat Tugas Pengganti *Tidak Wajib',
                                contoh: '20/12/2012',
                                referensi: '',
                            },
                            {
                                id: 34,
                                kolom: 'AH',
                                data: 'ID Penelaah Keberatan Pengganti *Tidak Wajib',
                                contoh: '*ip',
                                referensi: '{{ route("pegawai.index") }}',
                            },
                        ],
                    }"
                >
                    <template
                        x-for="permohonan in permohonan_all"
                        :key="permohonan.id"
                    >
                        <tr class="hover">
                            <th x-text="permohonan.kolom"></th>
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
