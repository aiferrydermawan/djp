<?php

namespace App\Imports;

use App\Models\JenisPermohonan;
use App\Models\Kpp;
use App\Models\Permohonan;
use App\Models\UserDetail;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class PermohonanImport implements ToModel, WithStartRow
{
    public function model(array $row)
    {
        if (empty($row[0]) || empty($row[1])) {
            return null; // Abaikan baris jika ada kolom yang kosong
        }
        $nomorLpad = $row[13];
        $existingData = Permohonan::where('nomor_lpad', $nomorLpad)->exists();
        if ($existingData) {
            return null; // Jika sudah ada jangan di import lagi, ntar double
        }
        $kode_kpp_id = $this->getKppId($row[2]);
        $pk_id = $this->getUserId($row[20]);
        $pembuat = $this->getUserId($row[22]);

        return new Permohonan([
            'nama_wp' => $row[0], // done
            'npwp' => $row[1], // done
            'kode_kpp_terdaftar' => $kode_kpp_id, // done
            'kategori_permohonan' => $row[3],
            'jenis_permohonan' => $row[4], // done
            'masa_pajak' => $row[5], // done
            'tahun_pajak' => $row[6], // done
            'nomor_ketetapan' => $row[7], // done
            'tanggal_ketetapan' => Carbon::parse($row[8]), // done
            'nilai_1' => $row[9], // done
            'dasar_pemrosesan' => $row[10], // done
            'nomor_surat_wp' => $row[11], // done
            'tanggal_surat_wp' => Carbon::parse($row[12]), // done
            'nomor_lpad' => $row[13], // done
            'tanggal_diterima' => Carbon::parse($row[14]), // done
            'tanggal_berakhir' => Carbon::parse($row[15]), // done
            'no_surat_pengantar_kpp' => $row[16], // done
            'tanggal_surat_pengantar' => Carbon::parse($row[17]), // done
            'nomor_surat_tugas' => $row[18], // done
            'tanggal_surat_tugas' => Carbon::parse($row[19]), // done
            'nama_pk' => $pk_id, // done
            'tahun_berkas' => $row[21],
            'pembuat' => $pembuat, // done
            'dibuat' => Carbon::parse($row[23]), // done
            'diubah' => Carbon::parse($row[24]), // done
        ]);
    }

    public function startRow(): int
    {
        return 2;
    }

    protected function getKppId($kode_kpp)
    {
        return Kpp::where('kode_kpp', $kode_kpp)->first()->id;
    }

    protected function getUserId($ip)
    {
        return UserDetail::where('ip', $ip)->first()->user_id;
    }
}
