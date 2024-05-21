<?php

namespace App\Livewire\Statistik\AmarPutusan;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Index extends Component
{
    public $tahun;

    public function mount()
    {
        $this->tahun = Carbon::now()->year;
    }

    public function render()
    {

        $tahun = $this->tahun; // Misalnya tahun yang digunakan adalah 2024

        // Ambil semua amar putusan
        $amarPutusan = DB::table('referensi')
            ->where('kategori', '=', 'amar-putusan')->orderBy('nama', 'asc')
            ->pluck('nama');

        // Ambil semua jenis permohonan
        $jenisPermohonan = DB::table('jenis_permohonan')->orderBy('nama', 'asc')->pluck('nama');

        // Query untuk mengambil data statistik
        $statistics = [];
        foreach ($amarPutusan as $amar) {
            $row = ['amar_putusan' => $amar];
            foreach ($jenisPermohonan as $jenis) {
                $total = DB::table('referensi')
                    ->join('data_keputusan', 'referensi.id', '=', 'data_keputusan.amar_keputusan_id')
                    ->join('permohonan', 'data_keputusan.permohonan_id', '=', 'permohonan.id')
                    ->join('jenis_permohonan', 'permohonan.jenis_permohonan', '=', 'jenis_permohonan.id')
                    ->where('referensi.nama', '=', $amar)
                    ->where('jenis_permohonan.nama', '=', $jenis)
                    ->whereYear('data_keputusan.tanggal_keputusan', $tahun)
                    ->count();
                $row[$jenis] = $total;
            }
            $statistics[] = (object) $row;
        }

        // Hitung total setiap jenis permohonan atau pasal
        $total = DB::table('permohonan')
            ->join('jenis_permohonan', 'permohonan.jenis_permohonan', '=', 'jenis_permohonan.id')
            ->join('data_keputusan', 'permohonan.id', '=', 'data_keputusan.permohonan_id')
            ->whereYear('data_keputusan.tanggal_keputusan', $tahun)
            ->groupBy('jenis_permohonan.nama')
            ->selectRaw('jenis_permohonan.nama, COUNT(*) as total_permohonan')
            ->get();

        return view('livewire.statistik.amar-putusan.index', [
            'statistics' => $statistics,
            'total' => $total,
            'jenisPermohonan' => $jenisPermohonan,
        ]);
    }
}
