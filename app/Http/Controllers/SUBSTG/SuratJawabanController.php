<?php

namespace App\Http\Controllers\SUBSTG;

use App\Http\Controllers\Controller;
use App\Models\Permintaan;
use App\Models\SuratJawaban;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SuratJawabanController extends Controller
{
    public function edit($id)
    {
        $permintaan = Permintaan::with('suratJawaban')->find($id);

        return inertia('SuratJawaban/Edit', [
            'permintaan' => $permintaan,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nomor_surat_ke_dkb' => ['required'],
            'tgl_surat_ke_dkb' => ['required'],
            'nomor_surat_ke_pp' => ['required'],
            'tgl_surat_ke_pp' => ['required'],
        ]);

        SuratJawaban::updateOrCreate(
            ['permintaan_id' => $id],
            [
                'nomor_surat_ke_dkb' => $request->nomor_surat_ke_dkb,
                'tgl_surat_ke_dkb' => $request->tgl_surat_ke_dkb,
                'nomor_surat_ke_pp' => $request->nomor_surat_ke_pp,
                'tgl_surat_ke_pp' => $request->tgl_surat_ke_pp,
            ]
        );

        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('surat-jawaban'));
    }
}
