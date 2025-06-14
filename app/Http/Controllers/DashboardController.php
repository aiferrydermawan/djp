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
        $user = UserDetail::where('user_id', auth()->user()->id)->first();
        if (! $user) {
            abort(403, 'Anda belum terdaftar di pegawai');
        }
        $jabatan = $user->jabatan;
        $unit_organisasi_id = $user->unit_organisasi_id;
        $firstCard = $this->tunggakanBerkasKEBnNKEB($jabatan, $unit_organisasi_id);
        $secondCard = $this->tunggakanBerkasSUBSTG($jabatan, $unit_organisasi_id);
        $thirdCard = $this->berkasJatuhTempoBulanIni($jabatan, $unit_organisasi_id);
        $fourthCard = $this->berkasJatuhTempoBulanDepan($jabatan, $unit_organisasi_id);
        $firstChart = $this->tunggakanBerkas($jabatan, $unit_organisasi_id);
        $secondChart = $this->permohonanMasuk($jabatan, $unit_organisasi_id);

        return inertia('Dashboard', [
            'firstCard' => $firstCard,
            'secondCard' => $secondCard,
            'thirdCard' => $thirdCard,
            'fourthCard' => $fourthCard,
            'firstChart' => $firstChart,
            'secondChart' => $secondChart,
        ]);
    }

    public function tunggakanBerkas($jabatan, $unit_organisasi_id)
    {
        $user_id = auth()->user()->id;

        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan')
            ->doesntHave('dataPengiriman');

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->where('nama_pk_2', $user_id);
                })->orWhere(function ($query) use ($user_id) {
                    $query->whereNull('nama_pk_2')
                        ->where('nama_pk', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan2.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                })->orWhere(function ($query) use ($unit_organisasi_id) {
                    $query->whereNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        return $permohonan->get();
    }

    public function tunggakanBerkasSUBSTG($jabatan, $unit_organisasi_id)
    {
        return DB::table('permintaan')
            ->whereNotIn('id', function ($q) {
                $q->select('permintaan_id')->from('pengiriman');
            })
            ->count();
    }

    public function permohonanMasuk($jabatan, $unit_organisasi_id)
    {
        $user_id = auth()->user()->id;

        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan');

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->where('nama_pk_2', $user_id);
                })->orWhere(function ($query) use ($user_id) {
                    $query->whereNull('nama_pk_2')
                        ->where('nama_pk', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan2.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                })->orWhere(function ($query) use ($unit_organisasi_id) {
                    $query->whereNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        return $permohonan->get();
    }

    public function tunggakanBerkasKEBnNKEB($jabatan, $unit_organisasi_id)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->where('nama_pk_2', $user_id);
                })->orWhere(function ($query) use ($user_id) {
                    $query->whereNull('nama_pk_2')
                        ->where('nama_pk', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan2.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                })->orWhere(function ($query) use ($unit_organisasi_id) {
                    $query->whereNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        return $permohonan->doesntHave('dataPengiriman')->count();
    }

    public function berkasJatuhTempoBulanIni($jabatan, $unit_organisasi_id)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->where('nama_pk_2', $user_id);
                })->orWhere(function ($query) use ($user_id) {
                    $query->whereNull('nama_pk_2')
                        ->where('nama_pk', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan2.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                })->orWhere(function ($query) use ($unit_organisasi_id) {
                    $query->whereNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        $permohonan->doesntHave('dataPengiriman')
            ->whereMonth('tanggal_berakhir', '=', Carbon::now()->month)
            ->whereYear('tanggal_berakhir', '=', Carbon::now()->year);

        return $permohonan->count();
    }

    public function berkasJatuhTempoBulanDepan($jabatan, $unit_organisasi_id)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($jabatan === 'penelaah keberatan') {
            $permohonan->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->where('nama_pk_2', $user_id);
                })->orWhere(function ($query) use ($user_id) {
                    $query->whereNull('nama_pk_2')
                        ->where('nama_pk', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permohonan->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan2.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                })->orWhere(function ($query) use ($unit_organisasi_id) {
                    $query->whereNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        return $permohonan->doesntHave('dataPengiriman')
            ->whereMonth('tanggal_berakhir', '=', Carbon::now()->addMonth())
            ->whereYear('tanggal_berakhir', '=', Carbon::now()->year)
            ->count();
    }
}
