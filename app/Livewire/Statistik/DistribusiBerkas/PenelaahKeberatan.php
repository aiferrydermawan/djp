<?php

namespace App\Livewire\Statistik\DistribusiBerkas;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class PenelaahKeberatan extends Component
{
    public $filterTahun;

    public function render()
    {
        $today = Carbon::today();

        // Ambil semua jenis permohonan
        $allJenisPermohonan = DB::table('jenis_permohonan')->get();

        $penelaahKeberatan = DB::table('users')
            ->join('user_details', 'users.id', '=', 'user_details.user_id')
            ->where('user_details.jabatan', 'penelaah keberatan')
            ->select('users.id', 'users.name')
            ->get();

        $results = [];

        foreach ($penelaahKeberatan as $penelaah) {
            $userId = $penelaah->id;

            // Menghitung total permohonan masuk
            $totalPermohonanMasuk = DB::table('permohonan')
                ->when($this->filterTahun, function ($query) {
                    $query->where('tahun_berkas', (int) $this->filterTahun);
                })
                ->where(function ($query) use ($userId) {
                    $query->where(function ($subQuery) use ($userId) {
                        $subQuery->where('nama_pk_2', $userId);
                    })->orWhere(function ($subQuery) use ($userId) {
                        $subQuery->whereNull('nama_pk_2')->where('nama_pk', $userId);
                    });
                })
                ->count();

            // Menghitung total permohonan selesai
            $totalPermohonanSelesai = DB::table('permohonan')
                ->join('data_pengiriman', 'permohonan.id', '=', 'data_pengiriman.permohonan_id')
                ->when($this->filterTahun, function ($query) {
                    $query->where('tahun_berkas', (int) $this->filterTahun);
                })
                ->where(function ($query) use ($userId) {
                    $query->where(function ($subQuery) use ($userId) {
                        $subQuery->where('nama_pk_2', $userId);
                    })->orWhere(function ($subQuery) use ($userId) {
                        $subQuery->whereNull('nama_pk_2')->where('nama_pk', $userId);
                    });
                })
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
                ->select('jenis_permohonan.nama', DB::raw('count(*) as total'))
                ->where(function ($query) use ($userId) {
                    $query->where('nama_pk_2', $userId)
                        ->orWhere(function ($subQuery) use ($userId) {
                            $subQuery->whereNull('nama_pk_2')->where('nama_pk', $userId);
                        });
                })
                ->groupBy('jenis_permohonan.nama')
                ->pluck('total', 'jenis_permohonan.nama');

            // Mencocokkan dengan semua jenis permohonan
            $jenisPermohonanData = [];
            foreach ($allJenisPermohonan as $jenis) {
                $jenisPermohonanData[$jenis->nama] = $jenisPermohonanCounts[$jenis->nama] ?? 0;
            }

            $results[] = [
                'Nama Penelaah Keberatan' => $penelaah->name,
                'Jenis Permohonan' => $jenisPermohonanData,
                'Berkas Masuk' => $totalPermohonanMasuk,
                'Berkas Selesai' => $totalPermohonanSelesai,
                'Jumlah Tunggakan' => $totalPermohonanTertunggak,
                'Persentase Selesai' => round($persentaseSelesai, 2),
            ];
        }

        return view('livewire.statistik.distribusi-berkas.penelaah-keberatan', [
            'results' => $results,
            'allJenisPermohonan' => $allJenisPermohonan,
        ]);
    }
}
