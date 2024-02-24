<?php

namespace App\Livewire\Statistik\BerkasMasukSelesai;

use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        $yearNow = now()->year;

        return view('livewire.statistik.berkas-masuk-selesai.index', [
            'permohonan_all' => $this->getData(),
            'yearNow' => $yearNow,
            'yearStart' => $yearNow - 5,
        ]);
    }

    public function getData()
    {
        $yearNow = now()->year;
        $yearStart = $yearNow - 5;
        $selects = ['kpp.nama as nama_kpp', 'jenis_permohonan.nama as nama_jenis_permohonan']; // Menambahkan kolom yang diinginkan ke dalam array selects

        // Menambahkan setiap raw expression ke dalam array selects
        for ($year = $yearStart; $year <= $yearNow; $year++) {
            $selects[] = DB::raw("SUM(CASE WHEN YEAR(tanggal_diterima) = $year THEN 1 ELSE 0 END) AS `$year`");
        }

        $query = DB::table('permohonan')
            ->join('kpp', 'permohonan.kode_kpp_terdaftar', '=', 'kpp.id')
            ->join('jenis_permohonan', 'permohonan.jenis_permohonan', '=', 'jenis_permohonan.id') // Asumsi kolom di 'jenis_permohonan' adalah 'id'
            ->select($selects) // Menggunakan array $selects yang telah diisi dengan raw expressions
            ->whereYear('tanggal_diterima', '>=', $yearStart)
            ->groupBy('kpp.nama', 'jenis_permohonan.nama') // Asumsi Anda ingin group by berdasarkan nama
            ->orderBy('kpp.nama')
            ->orderBy('jenis_permohonan.nama');

        return $query->get();

    }
}
