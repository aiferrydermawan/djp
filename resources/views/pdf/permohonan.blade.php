<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Daftar Pengguna</title>
        <style>
            .table {
                border-collapse: collapse;
                width: 100%;
            }

            .table td,
            .table th {
                border: 1px solid #000;
                padding: 2px;
                text-align: left;
            }
        </style>
    </head>
    <body>
        @foreach ($data as $index => $item)
            <table class="table" style="table-layout: fixed">
                <tr>
                    <td style="width: 50%">NAMA WAJIB PAJAK</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->nama_wp }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">NPWP</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->npwp }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">NOP</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->nop ?? "-" }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">
                        KEBERATAN / BANDING / GUGATAN PERMOHONAN PASAL 16/26/36
                        (1) A/B/C/D
                    </td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->jenisPermohonan->nama }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">JENIS PAJAK</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->jenisPajak->nama ?? '-' }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">MASA / TAHUN PAJAK</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->tahun_pajak }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">NOMOR SKP / STP / KEPUTUSAN</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->nomor_ketetapan }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">TANGGAL SKP / STP / KEPUTUSAN</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->formatWaktu($item->tanggal_ketetapan) }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">TANGGAL DITERIMA KPP / TGL LPAD</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->formatWaktu($item->tanggal_diterima) }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">PENELAAH KEBERATAN / NIP</td>
                    <td>
                        @if ($item->penelaahKeberatan2)
                            <span style="margin-right: 5px">:</span>
                            {{ $item->penelaahKeberatan2->name }} /
                            <span style="margin-right: 5px">:</span>
                            {{ $item->penelaahKeberatan2->detail->nip }}
                        @else
                            <span style="margin-right: 5px">:</span>
                            {{ $item->penelaahKeberatan->name }} /
                            <span style="margin-right: 5px">:</span>
                            {{ $item->penelaahKeberatan->detail->nip }}
                        @endif
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">TANGGAL JATUH TEMPO</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->formatWaktu($item->tanggal_berakhir) }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">NOMOR ST</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->nomor_surat_tugas }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">TANGGAL ST</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->formatWaktu($item->tanggal_surat_tugas) }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">NOMOR MATRIK</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->no_matriks }}
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">TANGGAL MATRIK</td>
                    <td>
                        <span style="margin-right: 5px">:</span>
                        {{ $item->formatWaktu($item->tanggal_matriks) }}
                    </td>
                </tr>
            </table>
            @if ($index % 2 != 0)
                @pageBreak
            @endif

            @if ($index % 2 == 0)
                <div style="padding-top: 10px; padding-bottom: 10px">---</div>
            @endif
        @endforeach
    </body>
</html>
