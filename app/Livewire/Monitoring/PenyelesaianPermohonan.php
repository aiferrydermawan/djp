<?php

namespace App\Livewire\Monitoring;

use App\Models\Permintaan;
use App\Models\Permohonan;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class PenyelesaianPermohonan extends Component
{
    public $tahunSuratTugas;
    public function render()
    {
        // Ambil daftar tahun dari tabel permohonan
        $listTahun = Permohonan::select(DB::raw('DISTINCT tahun_berkas'))
            ->whereNotNull('tahun_berkas')
            ->orderBy('tahun_berkas', 'desc')
            ->pluck('tahun_berkas');

        $data = [];
        $total = [];

        if ($this->tahunSuratTugas) {
            $tahunAktif = $this->tahunSuratTugas;
            $tahunSebelumnya = $tahunAktif - 1;

            // Daftar semua kategori
            $kategoriList = ['Keberatan', 'Non Keberatan', 'SUB', 'STG'];

            foreach ($kategoriList as $kategori) {
                // Ambil saldo_awal dari tabel penyelesaian_permohonan (berdasarkan tahun sebelumnya)
                $saldoAwal = \App\Models\PenyelesaianPermohonan::where('uraian', $kategori)
                    ->where('tahun_berkas', $tahunSebelumnya)
                    ->value('saldo_awal') ?? 0;

                if (in_array($kategori, ['Keberatan', 'Non Keberatan'])) {
                    // Dari tabel permohonan
                    $masukTahunIni = Permohonan::where('kategori_permohonan', $kategori)
                        ->where('tahun_berkas', $tahunAktif)
                        ->count();

                    $selesai = Permohonan::where('kategori_permohonan', $kategori)
                        ->whereIn('id', function ($q) {
                            $q->select('permohonan_id')->from('data_pengiriman');
                        })
                        ->count();
                } else {
                    // Dari tabel permintaan
                    $masukTahunIni = Permintaan::where('kategori_permintaan', $kategori)
                        ->where('tahun_berkas', $tahunAktif)
                        ->count();

                    $selesai = Permintaan::where('kategori_permintaan', $kategori)
                        ->whereIn('id', function ($q) {
                            $q->select('permintaan_id')->from('pengiriman');
                        })
                        ->count();
                }

                $saldoAkhir = $saldoAwal + $masukTahunIni - $selesai;

                $data[$kategori] = [
                    'saldo_awal' => $saldoAwal,
                    'masuk' => $masukTahunIni,
                    'selesai' => $selesai,
                    'saldo_akhir' => $saldoAkhir,
                ];
            }

            $total = [
                'saldo_awal' => array_sum(array_column($data, 'saldo_awal')),
                'masuk' => array_sum(array_column($data, 'masuk')),
                'selesai' => array_sum(array_column($data, 'selesai')),
                'saldo_akhir' => array_sum(array_column($data, 'saldo_akhir')),
            ];
        }

        return view('livewire.monitoring.penyelesaian-permohonan', [
            'listTahun' => $listTahun,
            'data' => $data,
            'total' => $total,
        ]);
    }
}
