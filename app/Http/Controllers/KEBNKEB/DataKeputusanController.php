<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\DataKeputusan;
use App\Models\Permohonan;
use App\Models\Referensi;
use Illuminate\Http\Request;

class DataKeputusanController extends Controller
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
            'dataKeputusan',
        ])
            ->whereHas('spidPembahasan')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate($this->loadDefault));

        return inertia('DataKeputusan/Index', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'dataKeputusan'])->find($id);
        $amar_putusan_all = Referensi::where('kategori', 'amar-putusan')->get();

        return inertia('DataKeputusan/Edit', [
            'permohonan' => $permohonan,
            'amar_putusan_all' => $amar_putusan_all,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'jenisKeputusan' => ['required'],
            'noKeputusan' => ['required', 'integer'],
            'tanggalKeputusan' => ['required'],
            'amarKeputusanId' => ['required'],
            'nilaiAkhirMenurutKeputusan' => ['required', 'integer'],
        ]);

        DataKeputusan::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'jenis_keputusan' => $request->jenisKeputusan,
                'no_keputusan' => $request->noKeputusan,
                'tanggal_keputusan' => $request->tanggalKeputusan,
                'amar_keputusan_id' => $request->amarKeputusanId,
                'nilai_akhir_menurut_keputusan' => $request->nilaiAkhirMenurutKeputusan,
                'pembuat' => auth()->user()->id,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return to_route('data-keputusan.index');
    }
}
