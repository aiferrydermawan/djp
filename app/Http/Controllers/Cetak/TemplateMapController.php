<?php

namespace App\Http\Controllers\Cetak;

use App\Http\Controllers\Controller;
use App\Models\Permohonan;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TemplateMapController extends Controller
{
    public function cetakNpwp(Request $request)
    {
        $data = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'pelaksana.detail'])->where('npwp', $request->search)->get();
        if (count($data) == 0) {
            session()->flash('error', 'NPWP tidak ditemukan');

            return to_route('template-map.index');
        }

        $pdf = Pdf::loadView('pdf.permohonan', [
            'data' => $data,
        ])->setPaper('a4', 'potrait');

        return $pdf->stream('permohonan.pdf');
    }

    public function cetakTanggal(Request $request)
    {
        if (! $request->start) {
            session()->flash('error', 'tanggal tidak boleh kosong');

            return to_route('template-map.index');
        }
        $data = Permohonan::query()->with(['jenisPermohonan', 'jenisPajak', 'penelaahKeberatan.detail']);
        if (isset($request->end)) {
            $end = Carbon::parse($request->end)->addDay(1);
            $data->whereBetween('dibuat', [$request->start, $end]);
        } else {
            $data->whereDate('dibuat', $request->start);
        }
        if ($data->count() == 0) {
            session()->flash('error', 'Permohonan tidak ditemukan');

            return to_route('template-map.index');
        }

        $pdf = Pdf::loadView('pdf.permohonan', [
            'data' => $data->get(),
        ])->setPaper('a4', 'potrait');

        return $pdf->stream('permohonan.pdf');
    }
}
