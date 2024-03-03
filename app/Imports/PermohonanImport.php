<?php

namespace App\Imports;

use App\Models\Permohonan;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class PermohonanImport implements ToModel, WithHeadingRow
{
    /**
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Permohonan([
            'nama_wp' => $row[0],
            'npwp' => $row[1],
            'nop' => $row[2],
            'kode_kpp_terdaftar' => $row[3],
            'jenis_permohonan' => $row[4],
            'unit_yang_memproses' => $row[5],
            'jenis_pajak' => $row[6],
            'masa_pajak' => $row[7],
            'tahun_pajak' => $row[8],
            'mata_uang' => $row[9],
            'jenis_ketetapan' => $row[10],
            'nomor_ketetapan' => $row[11],
            'tanggal_ketetapan' => Carbon::parse($row[12]),
            'tanggal_kirim_ketetapan' => Carbon::parse($row[13]),
            'nilai_1' => $row[14],
            'nilai_2' => $row[15],
            'nilai_3' => $row[16],
            'nilai_4' => $row[17],
            'dasar_pemrosesan' => $row[18],
            'nomor_surat_wp' => $row[19],
            'tanggal_surat_wp' => Carbon::parse($row[20]),
            'nomor_lpad' => $row[21],
            'tanggal_diterima' => Carbon::parse($row[22]),
            'tanggal_berakhir' => Carbon::parse($row[23]),
            'no_surat_pengantar_kpp' => $row[24],
            'tanggal_surat_pengantar' => Carbon::parse($row[25]),
            'tanggal_pengiriman_kpp' => Carbon::parse($row[26]),
            'nomor_surat_tugas' => $row[27],
            'tanggal_surat_tugas' => Carbon::parse($row[28]),
            'nama_pk' => $row[29],
            'no_matriks' => $row[30],
            'tanggal_matriks' => Carbon::parse($row[31]),
            'nomor_surat_tugas_2' => $row[32],
            'tanggal_surat_tugas_2' => Carbon::parse($row[33]),
            'nama_pk_2' => $row[34],
            'pembuat' => auth()->user()->id,
        ]);
    }
}
