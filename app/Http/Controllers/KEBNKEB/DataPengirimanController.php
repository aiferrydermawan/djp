<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\DataPengiriman;
use App\Models\Permohonan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DataPengirimanController extends Controller
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
            'dataPengiriman',
        ])
            ->whereHas('kriteriaPermohonan')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate($this->loadDefault));

        return inertia('DataPengiriman/Index', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'dataPengiriman'])->find($id);

        return inertia('DataPengiriman/Edit', [
            'permohonan' => $permohonan,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nomorResiWp' => ['required'],
            'tanggalResiWp' => ['required'],
            'nomorResiKpp' => ['required'],
            'tanggalResiKpp' => ['required'],
        ]);

        DataPengiriman::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'nomor_resi_wp' => $request->nomorResiWp,
                'tanggal_resi_wp' => $request->tanggalResiWp,
                'nomor_resi_kpp' => $request->nomorResiKpp,
                'tanggal_resi_kpp' => $request->tanggalResiKpp,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return Inertia::location(route('data-pengiriman.index'));
    }
}
