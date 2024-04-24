<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\PenelitianFormal;
use App\Models\Permohonan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PenelitianFormalController extends Controller
{
    public $loadDefault = 10;

    public function index(Request $request)
    {
        $user_id = auth()->user()->id;
        $query = Permohonan::query();
        $permohonanAll = PermohonanResource::collection($query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'penelitianFormal',
        ])
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate($this->loadDefault));

        return inertia('PenelitianFormal/PenelaahKeberatan', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'penelitianFormal'])->find($id);

        return inertia('PenelitianFormal/Edit', [
            'permohonan' => $permohonan,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'status' => ['required'],
        ]);

        PenelitianFormal::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'status' => $request->status,
                'pembuat' => auth()->user()->id,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return Inertia::location(route('penelitian-formal.index'));
    }
}
