<?php

namespace App\Livewire\Statistik\BerkasMasukSelesai;

use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Masuk extends Component
{
    public function render()
    {
        $years = DB::table('permohonan')
            ->select('tahun_berkas')
            ->groupBy('tahun_berkas')
            ->orderByDesc('tahun_berkas')
            ->pluck('tahun_berkas');

        $yearNow = $years->max();
        $yearStart = $years->min();

        return view('livewire.statistik.berkas-masuk-selesai.masuk', [
            'permohonan_all' => $this->getData(),
            'yearNow' => $yearNow,
            'yearStart' => $yearStart,
        ]);
    }

    public function getData()
    {
        // Ambil semua tahun dari kolom tahun_berkas yang unik dan terurut
        $years = DB::table('permohonan')
            ->select('tahun_berkas')
            ->groupBy('tahun_berkas')
            ->orderBy('tahun_berkas')
            ->pluck('tahun_berkas');

        $selects = ['kpp.nama as nama_kpp', 'jenis_permohonan.nama as nama_jenis_permohonan'];

        // Looping tahun dari hasil query tahun_berkas
        foreach ($years as $year) {
            $selects[] = DB::raw("SUM(CASE WHEN tahun_berkas = $year THEN 1 ELSE 0 END) AS `$year`");
        }

        $query = DB::table('permohonan')
            ->join('kpp', 'permohonan.kode_kpp_terdaftar', '=', 'kpp.id')
            ->join('jenis_permohonan', 'permohonan.jenis_permohonan', '=', 'jenis_permohonan.id')
            ->select($selects)
            ->groupBy('kpp.nama', 'jenis_permohonan.nama')
            ->orderBy('kpp.nama')
            ->orderBy('jenis_permohonan.nama');

        return $query->get();
    }
}
