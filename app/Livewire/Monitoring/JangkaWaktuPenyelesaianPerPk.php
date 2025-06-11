<?php

namespace App\Livewire\Monitoring;

use App\Models\JenisPermohonan;
use App\Models\Permohonan;
use Livewire\Component;

class JangkaWaktuPenyelesaianPerPk extends Component
{
    public function render()
    {
        $jenisPermohonanList = JenisPermohonan::pluck('nama', 'id')->toArray();

        $permohonan = Permohonan::with(['jenisPermohonan', 'namaPk', 'dataPengiriman'])
            ->whereIn('id', function ($query) {
                $query->select('permohonan_id')->from('data_pengiriman');
            })
            ->get();

        $grouped = ['Keberatan' => [], 'Non Keberatan' => []];

        foreach ($permohonan as $p) {
            $kategori = $p->kategori_permohonan ?? 'Non Keberatan';
            $pkId = $p->nama_pk;
            $pkName = $p->namaPk->name ?? 'PK Tidak Diketahui';
            $jenisNama = $p->jenisPermohonan->nama ?? 'Tidak Diketahui';
            $penyelesaian = $p->dataPengiriman->waktu_penyelesaian ?? 0;

            if (!isset($grouped[$kategori][$pkId])) {
                $grouped[$kategori][$pkId] = [
                    'nama' => $pkName,
                    'jenis' => array_fill_keys(array_values($jenisPermohonanList), 0),
                    'penyelesaian_total' => 0,
                    'penyelesaian_count' => 0,
                ];
            }

            // Hitung jumlah permohonan per jenis
            $grouped[$kategori][$pkId]['jenis'][$jenisNama] = ($grouped[$kategori][$pkId]['jenis'][$jenisNama] ?? 0) + 1;

            // Simpan waktu penyelesaian
            $grouped[$kategori][$pkId]['penyelesaian_total'] += $penyelesaian;
            $grouped[$kategori][$pkId]['penyelesaian_count'] += 1;
        }

        // Hitung rata-rata penyelesaian di akhir
        foreach ($grouped as $kategori => &$pks) {
            foreach ($pks as &$pk) {
                $pk['total'] = $pk['penyelesaian_count'] > 0
                    ? round($pk['penyelesaian_total'] / $pk['penyelesaian_count'], 1)
                    : 0;

                // Remove raw data
                unset($pk['penyelesaian_total'], $pk['penyelesaian_count']);
            }
        }

        return view('livewire.monitoring.jangka-waktu-penyelesaian-per-pk', [
            'jenisPermohonanList' => array_values($jenisPermohonanList),
            'nonKeberatan' => $grouped['Non Keberatan'],
            'keberatan' => $grouped['Keberatan'],
        ]);
    }
}
