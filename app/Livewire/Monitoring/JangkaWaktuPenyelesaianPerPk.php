<?php

namespace App\Livewire\Monitoring;

use App\Models\JenisPermohonan;
use App\Models\Permohonan;
use App\Models\Referensi;
use Livewire\Component;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class JangkaWaktuPenyelesaianPerPk extends Component
{
    public $tahunSuratTugas;
    public $selectedAmarKeputusan = []; // Tambahkan properti untuk menyimpan filter amar_keputusan_id

    public function render()
    {
        $amar_putusan_all = Referensi::where('kategori','amar-putusan')->get();
        // Ambil semua tahun unik dari kolom tahun_berkas
        $listTahun = Permohonan::select(DB::raw('DISTINCT tahun_berkas'))
            ->whereNotNull('tahun_berkas')
            ->orderBy('tahun_berkas', 'desc')
            ->pluck('tahun_berkas');

        // Ambil jenis permohonan
        $jenisPermohonanList = JenisPermohonan::pluck('nama', 'id')->toArray();

        // Query dasar
        $query = Permohonan::with(['jenisPermohonan', 'namaPk', 'dataPengiriman', 'dataKeputusan'])
            ->whereIn('id', function ($query) {
                $query->select('permohonan_id')->from('data_pengiriman');
            });

        // Filter tahun_berkas jika dipilih
        if (!empty($this->tahunSuratTugas)) {
            $query->where('tahun_berkas', $this->tahunSuratTugas);
        }

        // Filter berdasarkan amar_keputusan_id jika dipilih
        if (!empty($this->selectedAmarKeputusan)) {
            $query->whereHas('dataKeputusan', function ($query) {
                $query->whereIn('amar_keputusan_id', $this->selectedAmarKeputusan);
            });
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
                $pk['total'] = $pk['permohonan_count'] > 0
                    ? intval(round($pk['hari_total'] / $pk['permohonan_count']))
                    : 0;
                unset($pk['hari_total'], $pk['permohonan_count']);
            }
        }

        return view('livewire.monitoring.jangka-waktu-penyelesaian-per-pk', [
            'jenisPermohonanList' => array_values($jenisPermohonanList),
            'nonKeberatan' => collect($grouped['Non Keberatan'])->sortBy('total')->all(),
            'keberatan' => collect($grouped['Keberatan'])->sortBy('total')->all(),
            'listTahun' => $listTahun,
            'amarPutusanAll' => $amar_putusan_all, // Kirim data amar-putusan untuk checkbox filter
        ]);
    }

    public function selectAllAmarKeputusan()
    {
        $this->selectedAmarKeputusan = Referensi::where('kategori','amar-putusan')->pluck('id')->toArray();
    }

    public function resetAmarKeputusan()
    {
        $this->selectedAmarKeputusan = [];
    }
}
