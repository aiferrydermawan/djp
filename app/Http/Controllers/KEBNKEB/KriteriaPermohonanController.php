<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Models\KriteriaPermohonan;
use App\Models\Permohonan;
use App\Models\Referensi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KriteriaPermohonanController extends Controller
{
    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'kriteriaPermohonan'])->find($id);
        $alasan_all = Referensi::select(['nama as value', 'nama as label'])->where('kategori', 'alasan')->get();
        $pemenuhan_kriteria_all = Referensi::select(['nama as value', 'nama as label'])->where(
            'kategori',
            'pemenuhan-kriteria',
        )->get();

        return inertia('KriteriaPermohonan/Edit', [
            'permohonan' => $permohonan,
            'alasan_all' => $alasan_all,
            'pemenuhan_kriteria_all' => $pemenuhan_kriteria_all,
        ]);
    }

    public function update(Request $request, $id)
    {
        $alasanWp = array_column($request->alasanWp, 'value');
        $pemenuhanKriteria = array_column($request->pemenuhanKriteria, 'value');
        KriteriaPermohonan::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'alasan_1' => $alasanWp[0] ?? null,
                'alasan_2' => $alasanWp[1] ?? null,
                'alasan_3' => $alasanWp[2] ?? null,
                'pemenuhan_kriteria_1' => $pemenuhanKriteria[0] ?? null,
                'pemenuhan_kriteria_2' => $pemenuhanKriteria[1] ?? null,
                'pemenuhan_kriteria_3' => $pemenuhanKriteria[2] ?? null,
                'pembuat' => auth()->user()->id,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return Inertia::location(route('kriteria-permohonan.index'));
    }
}
