<?php

namespace App\Livewire\Monitoring;

use App\Models\JenisPermohonan;
use App\Models\Permohonan;
use Livewire\Component;
use Illuminate\Support\Facades\DB;

class PenyelesaianPerPk extends Component
{
    public $tahunSuratTugas;

    public function render()
    {
        // Ambil daftar tahun unik dari kolom tahun_surat_tugas
        $listTahun = Permohonan::select(DB::raw('DISTINCT tahun_surat_tugas'))
            ->whereNotNull('tahun_surat_tugas')
            ->orderBy('tahun_surat_tugas', 'desc')
            ->pluck('tahun_surat_tugas');

        // Ambil semua jenis permohonan
        $jenisPermohonanList = JenisPermohonan::pluck('nama', 'id')->toArray();

        // Query dasar
        $query = Permohonan::with(['jenisPermohonan', 'namaPk'])
            ->whereIn('id', function ($query) {
                $query->select('permohonan_id')->from('data_pengiriman');
            });

        // Filter berdasarkan tahun_surat_tugas jika dipilih
        if (!empty($this->tahunSuratTugas)) {
            $query->where('tahun_surat_tugas', $this->tahunSuratTugas);
        }

        $permohonan = $query->get();

        // Kelompokkan data berdasarkan kategori (Keberatan / Non Keberatan)
        $grouped = ['Keberatan' => [], 'Non Keberatan' => []];

        foreach ($permohonan as $p) {
            $kategori = $p->kategori_permohonan ?? 'Non Keberatan';
            $pkId = $p->nama_pk;
            $pkName = $p->namaPk->name ?? 'PK Tidak Diketahui';
            $jenisNama = $p->jenisPermohonan->nama ?? 'Tidak Diketahui';

            if (!isset($grouped[$kategori][$pkId])) {
                $grouped[$kategori][$pkId] = [
                    'nama' => $pkName,
                    'jenis' => array_fill_keys(array_values($jenisPermohonanList), 0),
                    'total' => 0,
                ];
            }

            $grouped[$kategori][$pkId]['jenis'][$jenisNama] = ($grouped[$kategori][$pkId]['jenis'][$jenisNama] ?? 0) + 1;
            $grouped[$kategori][$pkId]['total'] += 1;
        }

        return view('livewire.monitoring.penyelesaian-per-pk', [
            'jenisPermohonanList' => array_values($jenisPermohonanList),
            'nonKeberatan' => $grouped['Non Keberatan'],
            'keberatan' => $grouped['Keberatan'],
            'listTahun' => $listTahun,
        ]);
    }
}
