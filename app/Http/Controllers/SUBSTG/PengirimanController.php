<?php

namespace App\Http\Controllers\SUBSTG;

use App\Http\Controllers\Controller;
use App\Models\Pengiriman;
use App\Models\Permintaan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PengirimanController extends Controller
{
    public function edit($id)
    {
        $permintaan = Permintaan::with('pengiriman')->find($id);

        return inertia('Pengiriman/Edit', [
            'permintaan' => $permintaan,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'no_resi_ke_pp' => ['required'],
            'tgl_resi_ke_pp' => ['required'],
        ]);

        Pengiriman::updateOrCreate(
            ['permintaan_id' => $id],
            [
                'no_resi_ke_pp' => $request->no_resi_ke_pp,
                'tgl_resi_ke_pp' => $request->tgl_resi_ke_pp,
            ]
        );

        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('pengiriman'));
    }
}
