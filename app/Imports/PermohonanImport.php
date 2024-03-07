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
        $nomorLpad = $row[21];
        $existingData = Permohonan::where('nomor_lpad', $nomorLpad)->exists();
        if ($existingData) {
            return null; // Jika sudah ada jangan di import lagi, ntar double
        }
        if (gettype($row[3]) == 'string') {
            return null;
        }
        $kode_kpp_id = $this->getKppId($row[3]);
        $unit_yang_memproses_id = $this->getUserId($row[5]);
        $tanggal_berakhir = $this->getTanggalBerakhir($row[22], $row[4]);
        $pk_id = $this->getUserId($row[28]);
        if (! empty($row[33])) {
            $pk_pengganti_id = $this->getUserId($row[33]);
        } else {
            $pk_pengganti_id = null;
        }

        return new Permohonan([
            'nama_wp' => $row[0],
            'npwp' => $row[1],
            'nop' => $row[2],
            'kode_kpp_terdaftar' => $kode_kpp_id,
            'jenis_permohonan' => $row[4],
            'unit_yang_memproses' => $unit_yang_memproses_id,
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
            'tanggal_berakhir' => $tanggal_berakhir,
            'no_surat_pengantar_kpp' => $row[23],
            'tanggal_surat_pengantar' => Carbon::parse($row[24]),
            'tanggal_pengiriman_kpp' => Carbon::parse($row[25]),
            'nomor_surat_tugas' => $row[26],
            'tanggal_surat_tugas' => Carbon::parse($row[27]),
            'nama_pk' => $pk_id,
            'no_matriks' => $row[29],
            'tanggal_matriks' => Carbon::parse($row[30]),
            'nomor_surat_tugas_2' => $row[31],
            'tanggal_surat_tugas_2' => Carbon::parse($row[32]),
            'nama_pk_2' => $pk_pengganti_id,
            'pembuat' => auth()->user()->id,
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

    public function getTanggalBerakhir($tanggal_diterima, $id)
    {
        $jenisPermohonan = JenisPermohonan::find($id);
        $info = json_decode($jenisPermohonan->jatuh_tempo_iku, true);

        $kategori = $info['kategori'];
        $kuantitas = $info['kuantitas'];

        // Menghitung sisa waktu berdasarkan kategori dan kuantitas
        $tanggal_diterima = Carbon::parse($tanggal_diterima);
        switch ($kategori) {
            case 'hari':
                $tanggal_berakhir = $tanggal_diterima->addDays($kuantitas)->format('Y-m-d');
                break;
            case 'minggu':
                $tanggal_berakhir = $tanggal_diterima->addWeeks($kuantitas)->format('Y-m-d');
                break;
            case 'bulan':
                $tanggal_berakhir = $tanggal_diterima->addMonths($kuantitas)->format('Y-m-d');
                break;
            case 'tahun':
                $tanggal_berakhir = $tanggal_diterima->addYears($kuantitas)->format('Y-m-d');
                break;
            default:
                $tanggal_berakhir = null;
        }

        return $tanggal_berakhir;
    }
}
