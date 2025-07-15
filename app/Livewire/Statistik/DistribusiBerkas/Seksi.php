<?php

namespace App\Livewire\Statistik\DistribusiBerkas;

use App\Models\Permohonan;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Seksi extends Component
{
    public $filterTahun;
    public $tahun_all;
    public function render()
    {
        $this->tahun_all = Permohonan::select('tahun_berkas')->groupBy('tahun_berkas')->orderBy('tahun_berkas','asc')->pluck('tahun_berkas');
        $today = Carbon::today();


        // Ambil semua jenis permohonan
        $allJenisPermohonan = DB::table('jenis_permohonan')->get();

        // Ambil semua unit organisasi
        $unitOrganisasi = DB::table('referensi')
            ->where('kategori', 'unit-organisasi')
            ->select('id', 'nama')
            ->get();

        $results = [];

        foreach ($unitOrganisasi as $unit) {
            $unitId = $unit->id;

            // Menghitung total permohonan masuk
            $totalPermohonanMasuk = DB::table('permohonan')
                ->when($this->filterTahun, function ($query) {
                    $query->where('tahun_berkas', (int) $this->filterTahun);
                })
                ->join('user_details', function ($join) {
                    $join->on('permohonan.nama_pk', '=', 'user_details.user_id')
                        ->orOn('permohonan.nama_pk_2', '=', 'user_details.user_id');
                })
                ->where('user_details.unit_organisasi_id', $unitId)
                ->count();

            // Menghitung total permohonan selesai
            $totalPermohonanSelesai = DB::table('permohonan')
                ->when($this->filterTahun, function ($query) {
                    $query->where('tahun_berkas', (int) $this->filterTahun);
                })
                ->join('data_pengiriman', 'permohonan.id', '=', 'data_pengiriman.permohonan_id')
                ->join('user_details', function ($join) {
                    $join->on('permohonan.nama_pk', '=', 'user_details.user_id')
                        ->orOn('permohonan.nama_pk_2', '=', 'user_details.user_id');
                })
                ->where('user_details.unit_organisasi_id', $unitId)
                ->count();

            // Menghitung total permohonan tertunggak
            $totalPermohonanTertunggak = $totalPermohonanMasuk - $totalPermohonanSelesai;

            // Menghitung persentase selesai
            $persentaseSelesai = $totalPermohonanMasuk > 0 ? ($totalPermohonanSelesai / $totalPermohonanMasuk) * 100 : 0;

            // Menghitung total permohonan berdasarkan jenis permohonan
            $jenisPermohonanCounts = DB::table('permohonan')
                ->when($this->filterTahun, function ($query) {
                    $query->where('tahun_berkas', (int) $this->filterTahun);
                })
                ->join('jenis_permohonan', 'permohonan.jenis_permohonan', '=', 'jenis_permohonan.id')
                ->join('user_details', function ($join) {
                    $join->on('permohonan.nama_pk', '=', 'user_details.user_id')
                        ->orOn('permohonan.nama_pk_2', '=', 'user_details.user_id');
                })
                ->select('jenis_permohonan.nama', DB::raw('count(*) as total'))
                ->where('user_details.unit_organisasi_id', $unitId)
                ->groupBy('jenis_permohonan.nama')
                ->pluck('total', 'jenis_permohonan.nama');

            // Mencocokkan dengan semua jenis permohonan
            $jenisPermohonanData = [];
            foreach ($allJenisPermohonan as $jenis) {
                $jenisPermohonanData[$jenis->nama] = $jenisPermohonanCounts[$jenis->nama] ?? 0;
            }

            $results[] = [
                'Nama Unit Organisasi' => $unit->nama,
                'Berkas Masuk' => $totalPermohonanMasuk,
                'Berkas Selesai' => $totalPermohonanSelesai,
                'Persentase Selesai' => round($persentaseSelesai, 2),
                'Jumlah Tunggakan' => $totalPermohonanTertunggak,
                'Jenis Permohonan' => $jenisPermohonanData,
            ];
        }

        return view('livewire.statistik.distribusi-berkas.seksi', [
            'results' => $results,
            'allJenisPermohonan' => $allJenisPermohonan,
        ]);
    }
}
