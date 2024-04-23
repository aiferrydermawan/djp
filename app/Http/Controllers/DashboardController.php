<?php

namespace App\Http\Controllers;

use App\Models\Permohonan;
use App\Models\UserDetail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $jabatan = UserDetail::select('jabatan')->where('user_id', auth()->user()->id)->first()->jabatan;
        if (! $jabatan) {
            abort(403, 'Anda belum mempunyai jabatan');
        }
        $firstCard = $this->tunggakanBerkasKEBnNKEB($jabatan);
        $thirdCard = $this->berkasJatuhTempoBulanIni($jabatan);
        $fourthCard = $this->berkasJatuhTempoBulanDepan($jabatan);
        $firstChart = $this->tunggakanBerkas($jabatan);
        $secondChart = $this->permohonanMasuk($jabatan);

        return inertia('Dashboard', [
            'firstCard' => $firstCard,
            'thirdCard' => $thirdCard,
            'fourthCard' => $fourthCard,
            'firstChart' => $firstChart,
            'secondChart' => $secondChart,
        ]);
    }

    public function tunggakanBerkas($jabatan)
    {
        $user_id = auth()->user()->id;

        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan')
            ->doesntHave('dataPengiriman');

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->orWhere(function ($query) use ($user_id) {
                        $query->where('nama_pk_2', $user_id)
                            ->whereNotNull('nama_pk_2');
                    });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->whereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            })->orWhereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            });
        }

        return $permohonan->get();
    }

    public function permohonanMasuk($jabatan)
    {
        $user_id = auth()->user()->id;

        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan');

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->orWhere(function ($query) use ($user_id) {
                        $query->where('nama_pk_2', $user_id)
                            ->whereNotNull('nama_pk_2');
                    });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->whereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            })->orWhereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            });
        }

        return $permohonan->get();
    }

    public function tunggakanBerkasKEBnNKEB($jabatan)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->orWhere(function ($query) use ($user_id) {
                        $query->where('nama_pk_2', $user_id)
                            ->whereNotNull('nama_pk_2');
                    });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->whereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            })->orWhereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            });
        }

        return $permohonan->doesntHave('dataPengiriman')->count();
    }

    public function berkasJatuhTempoBulanIni($jabatan)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->orWhere(function ($query) use ($user_id) {
                        $query->where('nama_pk_2', $user_id)
                            ->whereNotNull('nama_pk_2');
                    });
            });
        }

        $permohonan->whereMonth('tanggal_berakhir', '=', Carbon::now()->month)
            ->whereYear('tanggal_berakhir', '=', Carbon::now()->year);

        return $permohonan->count();
    }

    public function berkasJatuhTempoBulanDepan($jabatan)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->orWhere(function ($query) use ($user_id) {
                        $query->where('nama_pk_2', $user_id)
                            ->whereNotNull('nama_pk_2');
                    });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->whereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            })->orWhereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            });
        }

        return $permohonan->doesntHave('dataPengiriman')
            ->whereMonth('tanggal_berakhir', '=', Carbon::now()->addMonth())
            ->whereYear('tanggal_berakhir', '=', Carbon::now()->year)
            ->count();
    }
}
