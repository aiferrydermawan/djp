<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Daftar Pengguna</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
        @foreach ($data as $index => $item)
            <div class="w-full p-10 text-left text-black">
                <div class="flex flex-col border-x border-t border-black">
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            NAMA WAJIB PAJAK
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->nama_wp }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            NPWP
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->npwp }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            NOP
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->nop ?? "-" }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            KEBERATAN / BANDING / GUGATAN PERMOHONAN PASAL
                            16/26/36 (1) A/B/C/D
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">
                            {{ $item->jenisPermohonan->nama }}
                        </div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            JENIS PAJAK
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->jenisPajak->nama }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            MASA / TAHUN PAJAK
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->tahun_pajak }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            NOMOR SKP / STP / KEPUTUSAN
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->nomor_ketetapan }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            TANGGAL SKP / STP / KEPUTUSAN
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->tanggal_ketetapan }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            TANGGAL DITERIMA KPP / TGL LPAD
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->tanggal_diterima }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            PENELAAH KEBERATAN / NIP
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">
                            {{ $item->pelaksana->name }} /
                            {{ $item->pelaksana->detail->nip }}
                        </div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            TANGGAL BERKAS DITERIMA PENELAAH KEBERATAN
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1"></div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            NOMOR ST
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->nomor_surat_tugas }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            TANGGAL ST
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">
                            {{ $item->tanggal_surat_tugas }}
                        </div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            NOMOR MATRIK
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->no_matriks }}</div>
                    </div>
                    <div class="flex border-b border-black">
                        <div class="w-1/2 border-r border-black px-1 font-bold">
                            TANGGAL MATRIK
                        </div>
                        <div class="border-r border-black px-1">:</div>
                        <div class="px-1">{{ $item->tanggal_matriks }}</div>
                    </div>
                </div>
            </div>
            @if ($index % 2 != 0)
                @pageBreak
            @endif

            @if ($index % 2 == 0)
                <div class="px-10">---</div>
            @endif
        @endforeach
    </body>
</html>
