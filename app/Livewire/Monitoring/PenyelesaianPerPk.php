<?php

namespace App\Livewire\Monitoring;

use App\Models\JenisPermohonan;
use App\Models\Permohonan;
use Livewire\Component;

class PenyelesaianPerPk extends Component
{
    public function render()
    {
        // Ambil jenis permohonan (misal: Pasal 1, Pasal 2)
        $jenisPermohonanList = JenisPermohonan::pluck('nama', 'id')->toArray();

        // Ambil semua permohonan yang punya data pengiriman
        $permohonan = Permohonan::with(['jenisPermohonan', 'namaPk'])
            ->whereIn('id', function ($query) {
                $query->select('permohonan_id')
                    ->from('data_pengiriman');
            })
            ->get();

        // Buat struktur data per kategori (Keberatan / Non Keberatan)
        $grouped = ['Keberatan' => [], 'Non Keberatan' => []];

        foreach ($permohonan as $p) {
            $kategori = $p->kategori_permohonan ?? 'Non Keberatan';
            $pkId = $p->nama_pk;
            $pkName = $p->namaPk->name ?? 'PK Tidak Diketahui';
            $jenisId = $p->jenis_permohonan;
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
        ]);
    }
}
