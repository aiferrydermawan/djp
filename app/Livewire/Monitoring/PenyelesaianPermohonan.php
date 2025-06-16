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

            // === PERMOHONAN ===
            $kategoriList = ['Keberatan', 'Non Keberatan'];
            foreach ($kategoriList as $kategori) {
                $saldoAwal = Permohonan::doesntHave('dataPengiriman')->where('kategori_permohonan', $kategori)
                    ->where('tahun_berkas', $tahunSebelumnya)
                    ->count();

                $masukTahunIni = Permohonan::where('kategori_permohonan', $kategori)
                    ->where('tahun_berkas', $tahunAktif)
                    ->count();

                $selesai = Permohonan::where('kategori_permohonan', $kategori)
                    ->whereIn('id', function ($q) {
                        $q->select('permohonan_id')->from('data_pengiriman');
                    })
                    ->count();

                $saldoAkhir = $saldoAwal + $masukTahunIni - $selesai;

                $data[$kategori] = [
                    'saldo_awal' => $saldoAwal,
                    'masuk' => $masukTahunIni,
                    'selesai' => $selesai,
                    'saldo_akhir' => $saldoAkhir,
                ];
            }

            // === PERMINTAAN ===
            $kategoriPermintaan = ['SUB', 'STG'];
            foreach ($kategoriPermintaan as $kategori) {
                $saldoAwal = Permintaan::where('kategori_permintaan', $kategori)
                    ->where('tahun_berkas', $tahunSebelumnya)
                    ->whereNotIn('id', function ($q) {
                        $q->select('permintaan_id')->from('pengiriman');
                    })
                    ->count();

                $masukTahunIni = Permintaan::where('kategori_permintaan', $kategori)
                    ->where('tahun_berkas', $tahunAktif)
                    ->count();

                $selesai = Permintaan::where('kategori_permintaan', $kategori)
                    ->whereIn('id', function ($q) {
                        $q->select('permintaan_id')->from('pengiriman');
                    })
                    ->count();

                $saldoAkhir = $saldoAwal + $masukTahunIni - $selesai;

                $data[$kategori] = [
                    'saldo_awal' => $saldoAwal,
                    'masuk' => $masukTahunIni,
                    'selesai' => $selesai,
                    'saldo_akhir' => $saldoAkhir,
                ];
            }

            // === TOTAL ===
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
