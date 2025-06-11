<?php

namespace App\Livewire\Monitoring;

use App\Models\JenisPermohonan;
use App\Models\Permohonan;
use Livewire\Component;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class JangkaWaktuPenyelesaianPerPk extends Component
{
    public $tahunSuratTugas;

    public function render()
    {
        // Ambil semua tahun unik dari kolom tahun_berkas
        $listTahun = Permohonan::select(DB::raw('DISTINCT tahun_berkas'))
            ->whereNotNull('tahun_berkas')
            ->orderBy('tahun_berkas', 'desc')
            ->pluck('tahun_berkas');

        // Ambil jenis permohonan
        $jenisPermohonanList = JenisPermohonan::pluck('nama', 'id')->toArray();

        // Query dasar
        $query = Permohonan::with(['jenisPermohonan', 'namaPk', 'dataPengiriman'])
            ->whereIn('id', function ($query) {
                $query->select('permohonan_id')->from('data_pengiriman');
            });

        // Filter tahun_berkas jika dipilih
        if (!empty($this->tahunSuratTugas)) {
            $query->where('tahun_berkas', $this->tahunSuratTugas);
        }

        $permohonan = $query->get();

        // Grouping berdasarkan kategori dan PK
        $grouped = ['Keberatan' => [], 'Non Keberatan' => []];

        foreach ($permohonan as $p) {
            $kategori = $p->kategori_permohonan ?? 'Non Keberatan';
            $pkId = $p->nama_pk;
            $pkName = $p->namaPk->name ?? 'PK Tidak Diketahui';
            $jenisNama = $p->jenisPermohonan->nama ?? 'Tidak Diketahui';

            $tglDiterima = $p->tanggal_diterima;
            $tglResi = optional($p->dataPengiriman)->tanggal_resi_wp;

            if (!$tglDiterima || !$tglResi) continue;

            $selisihHari = Carbon::parse($tglResi)->diffInDays(Carbon::parse($tglDiterima));

            if (!isset($grouped[$kategori][$pkId])) {
                $grouped[$kategori][$pkId] = [
                    'nama' => $pkName,
                    'jenis' => array_fill_keys(array_values($jenisPermohonanList), 0),
                    'hari_total' => 0,
                    'permohonan_count' => 0,
                ];
            }

            $grouped[$kategori][$pkId]['jenis'][$jenisNama] = ($grouped[$kategori][$pkId]['jenis'][$jenisNama] ?? 0) + 1;
            $grouped[$kategori][$pkId]['hari_total'] += $selisihHari;
            $grouped[$kategori][$pkId]['permohonan_count'] += 1;
        }

        // Hitung rata-rata hari
        foreach ($grouped as $kategori => &$pks) {
            foreach ($pks as &$pk) {
                $pk['total'] = $pk['hari_total'] > 0
                    ? intval(round($pk['permohonan_count'] / $pk['hari_total']))
                    : 0;
                unset($pk['hari_total'], $pk['permohonan_count']);
            }
        }

        return view('livewire.monitoring.jangka-waktu-penyelesaian-per-pk', [
            'jenisPermohonanList' => array_values($jenisPermohonanList),
            'nonKeberatan' => $grouped['Non Keberatan'],
            'keberatan' => $grouped['Keberatan'],
            'listTahun' => $listTahun,
        ]);
    }
}
