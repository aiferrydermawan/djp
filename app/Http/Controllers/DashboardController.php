<?php

namespace App\Http\Controllers;

use App\Models\Permohonan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $firstCard = $this->tunggakanBerkasKEBnNKEB();
        $thirdCard = $this->berkasJatuhTempoBulanIni();
        $fourthCard = $this->berkasJatuhTempoBulanDepan();
        $firstChart = $this->tunggakanBerkas();
        $secondChart = $this->permohonanMasuk();

        return inertia('Dashboard', [
            'firstCard' => $firstCard,
            'thirdCard' => $thirdCard,
            'fourthCard' => $fourthCard,
            'firstChart' => $firstChart,
            'secondChart' => $secondChart,
        ]);
    }

    public function tunggakanBerkas()
    {
        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan')
            ->doesntHave('dataPengiriman');

        return $permohonan->get();
    }

    public function permohonanMasuk()
    {
        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan');

        return $permohonan->get();
    }

    public function tunggakanBerkasKEBnNKEB()
    {
        $permohonan = Permohonan::query();

        return $permohonan->doesntHave('dataPengiriman')->count();
    }

    public function berkasJatuhTempoBulanIni()
    {
        $permohonan = Permohonan::query();

        return $permohonan->whereMonth('tanggal_berakhir', '=', Carbon::now()->month)
            ->whereYear('tanggal_berakhir', '=', Carbon::now()->year)
            ->count();
    }

    public function berkasJatuhTempoBulanDepan()
    {
        $permohonan = Permohonan::query();

        return $permohonan->where('tanggal_berakhir', '<', Carbon::now()->addMonth())
            ->whereMonth('tanggal_berakhir', '=', Carbon::now()->addMonth())
            ->whereYear('tanggal_berakhir', '=', Carbon::now()->year)
            ->count();
    }
}
