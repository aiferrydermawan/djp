<?php

namespace App\Livewire\Statistik\BerkasMasukSelesai;

use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Selesai extends Component
{
    public function render()
    {
        // Ambil tahun-tahun unik dari permohonan yang sudah punya keputusan
        $years = DB::table('permohonan')
            ->join('data_keputusan', 'permohonan.id', '=', 'data_keputusan.permohonan_id')
            ->select('tahun_berkas')
            ->groupBy('tahun_berkas')
            ->orderBy('tahun_berkas')
            ->pluck('tahun_berkas');

        return view('livewire.statistik.berkas-masuk-selesai.selesai', [
            'permohonan_all' => $this->getData(),
            'yearNow' => $years->max(),
            'yearStart' => $years->min(),
        ]);
    }


    public function getData()
    {
        // Ambil tahun-tahun unik dari permohonan yang sudah punya data_keputusan
        $years = DB::table('permohonan')
            ->join('data_keputusan', 'permohonan.id', '=', 'data_keputusan.permohonan_id')
            ->select('tahun_berkas')
            ->groupBy('tahun_berkas')
            ->orderBy('tahun_berkas')
            ->pluck('tahun_berkas');

        // Buat array kolom yang akan di-select
        $selects = [
            'kpp.nama as nama_kpp',
            'jenis_permohonan.nama as nama_jenis_permohonan'
        ];

        // Tambahkan kolom agregat berdasarkan tahun
        foreach ($years as $year) {
            $selects[] = DB::raw("SUM(CASE WHEN tahun_berkas = $year THEN 1 ELSE 0 END) AS `$year`");
        }

        // Query utama
        $query = DB::table('permohonan')
            ->join('data_keputusan', 'permohonan.id', '=', 'data_keputusan.permohonan_id')
            ->join('kpp', 'permohonan.kode_kpp_terdaftar', '=', 'kpp.id')
            ->join('jenis_permohonan', 'permohonan.jenis_permohonan', '=', 'jenis_permohonan.id')
            ->select($selects)
            ->groupBy('kpp.nama', 'jenis_permohonan.nama')
            ->orderBy('kpp.nama')
            ->orderBy('jenis_permohonan.nama');

        return $query->get();
    }
}
