<?php

namespace App\Livewire\Monitoring;

use App\Models\Permohonan;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class PenyelesaianPermohonan extends Component
{
    public $tahunSuratTugas;
    public function render()
    {
        $listTahun = Permohonan::select(DB::raw('DISTINCT tahun_berkas'))
            ->whereNotNull('tahun_berkas')
            ->orderBy('tahun_berkas', 'desc')
            ->pluck('tahun_berkas');

        $data = [];
        $total = [];

        if ($this->tahunSuratTugas) {
            $tahunAktif = $this->tahunSuratTugas;
            $tahunSebelumnya = $tahunAktif - 1;
            $kategoriList = ['Keberatan', 'Non Keberatan'];

            foreach ($kategoriList as $kategori) {
                $saldoAwal = Permohonan::where('kategori_permohonan', $kategori)
                    ->where('tahun_berkas', $tahunSebelumnya)
                    ->whereNotIn('id', function ($q) {
                        $q->select('permohonan_id')->from('data_pengiriman');
                    })
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
