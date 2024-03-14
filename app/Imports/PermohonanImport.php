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
        $pk_id = $this->getUserId($row[30]);
        if (! empty($row[33])) {
            $pk_pengganti_id = $this->getUserId($row[33]);
        } else {
            $pk_pengganti_id = null;
        }

        return new Permohonan([
            'nama_wp' => $row[0], // done
            'npwp' => $row[1], // done
            'nop' => $row[2], // done
            'kode_kpp_terdaftar' => $kode_kpp_id, // done
            'jenis_permohonan' => $row[4], // done
            'unit_yang_memproses' => $unit_yang_memproses_id, // done
            'jenis_pajak' => $row[10], // done
            'masa_pajak' => $row[11], // done
            'tahun_pajak' => $row[12], // done
            'mata_uang' => $row[13], // done
            'jenis_ketetapan' => $row[6], // done
            'nomor_ketetapan' => $row[7], // done
            'tanggal_ketetapan' => Carbon::parse($row[8]), // done
            'tanggal_kirim_ketetapan' => Carbon::parse($row[9]), // done
            'nilai_1' => $row[14], // done
            'nilai_2' => $row[15], // done
            'nilai_3' => $row[16], // done
            'nilai_4' => $row[17], // done
            'dasar_pemrosesan' => $row[18], // done
            'nomor_surat_wp' => $row[19], // done
            'tanggal_surat_wp' => Carbon::parse($row[20]), // done
            'nomor_lpad' => $row[21], // done
            'tanggal_diterima' => Carbon::parse($row[22]), // done
            'tanggal_berakhir' => $tanggal_berakhir, // done
            'no_surat_pengantar_kpp' => $row[23], // done
            'tanggal_surat_pengantar' => Carbon::parse($row[24]), // done
            'tanggal_pengiriman_kpp' => Carbon::parse($row[25]), // done
            'nomor_surat_tugas' => $row[26], // done
            'tanggal_surat_tugas' => Carbon::parse($row[27]), // done
            'nama_pk' => $pk_id, // done
            'no_matriks' => $row[28], // done
            'tanggal_matriks' => Carbon::parse($row[29]), // done
            'nomor_surat_tugas_2' => $row[31], // done
            'tanggal_surat_tugas_2' => $row[32] ? Carbon::parse($row[32]) : null, // done
            'nama_pk_2' => $pk_pengganti_id, // done
            'pembuat' => auth()->user()->id, // done
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
