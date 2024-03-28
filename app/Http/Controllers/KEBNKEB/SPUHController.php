<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\Permohonan;
use App\Models\Spuh;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SPUHController extends Controller
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
            'spuh',
        ])
            ->whereHas('spidPembahasan')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate($this->loadDefault));

        return inertia('SPUH/Index', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'spuh'])->find($id);

        return inertia('SPUH/Edit', [
            'permohonan' => $permohonan,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nomorSpuh' => ['required'],
            'tanggalSpuh' => ['required'],
            'tanggalKirimSpuh' => ['required'],
            'noBaPembahasanAkhir' => ['required'],
            'tanggalBaPembahasanAkhir' => ['required'],
        ]);

        Spuh::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'nomor_spuh' => $request->nomorSpuh,
                'tanggal_spuh' => $request->tanggalSpuh,
                'tanggal_kirim_spuh' => $request->tanggalKirimSpuh,
                'no_ba_pembahasan_akhir' => $request->noBaPembahasanAkhir,
                'tanggal_ba_pembahasan_akhir' => $request->tanggalBaPembahasanAkhir,
                'pembuat' => auth()->user()->id,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return Inertia::location(route('spuh.index'));
    }
}
