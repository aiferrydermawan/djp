<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\KriteriaPermohonan;
use App\Models\Permohonan;
use App\Models\Referensi;
use Illuminate\Http\Request;

class KriteriaPermohonanController extends Controller
{
    public $loadDefault = 10;

    public function index(Request $request)
    {
        $user_id = auth()->user()->id;
        $query = Permohonan::query();
        $permohonanAll = PermohonanResource::collection($query->with([
            'jenisPermohonan',
            'jenisPajak',
            'penelaahKeberatan.detail.organisasi',
            'pelaksana.detail.organisasi',
            // Batas
            'kriteriaPermohonan',
        ])
            ->whereHas('dataKeputusan')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate($this->loadDefault));

        return inertia('KriteriaPermohonan/Index', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'kriteriaPermohonan'])->find($id);
        $alasan_all = Referensi::where('kategori', 'alasan')->get();
        $pemenuhan_kriteria_all = Referensi::where(
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
        $request->validate([
            'alasanWp' => ['required'],
            'pemenuhanKriteria' => ['required'],
        ]);

        KriteriaPermohonan::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'alasan_id' => $request->alasanWp,
                'pemenuhan_kriteria_id' => $request->pemenuhanKriteria,
                'pembuat' => auth()->user()->id,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return to_route('kriteria-permohonan.index');
    }
}
