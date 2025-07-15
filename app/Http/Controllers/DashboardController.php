<?php

namespace App\Http\Controllers;

use App\Models\Permintaan;
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

        $tahun_permohonan = Permohonan::select('tahun_berkas')->groupBy('tahun_berkas')->pluck('tahun_berkas');
        $tahun_permintaan = Permintaan::select('tahun_berkas')->groupBy('tahun_berkas')->pluck('tahun_berkas');

        $tahun_all = $tahun_permohonan->merge($tahun_permintaan)->unique()->sort()->values();

        $tahun = $request->input('tahun'); // Ambil tahun dari query string, form, dsb

        $jabatan = $user->jabatan;
        $unit_organisasi_id = $user->unit_organisasi_id;
        $firstCard = $this->tunggakanBerkasKEBnNKEB($jabatan, $unit_organisasi_id, $tahun);
        $secondCard = $this->tunggakanBerkasSUBSTG($jabatan, $unit_organisasi_id, $tahun);
        $thirdCard = $this->berkasJatuhTempoBulanIni($jabatan, $unit_organisasi_id, $tahun);
        $fourthCard = $this->berkasJatuhTempoBulanDepan($jabatan, $unit_organisasi_id, $tahun);
        $firstChart = $this->tunggakanBerkas($jabatan, $unit_organisasi_id, $tahun);
        $secondChart = $this->permohonanMasuk($jabatan, $unit_organisasi_id, $tahun);

        return inertia('Dashboard', [
            'firstCard' => $firstCard,
            'secondCard' => $secondCard,
            'thirdCard' => $thirdCard,
            'fourthCard' => $fourthCard,
            'firstChart' => $firstChart,
            'secondChart' => $secondChart,
            'tahun_all' => $tahun_all,
        ]);
    }

    public function tunggakanBerkas($jabatan, $unit_organisasi_id, $tahun = null)
    {
        $user_id = auth()->user()->id;

        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan')
            ->doesntHave('dataPengiriman');

        if ($tahun) {
            $permohonan->where('tahun_berkas', $tahun);
        }

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

    public function tunggakanBerkasSUBSTG($jabatan, $unit_organisasi_id, $tahun = null)
    {
        $user_id = auth()->user()->id;

        $permintaan = Permintaan::query()->doesntHave('pengiriman');

        if ($tahun) {
            $permintaan->where('tahun_berkas', $tahun);
        }

        if ($jabatan === 'penelaah keberatan') {
            $permintaan->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('pk_id')
                        ->where('pk_id', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $permintaan->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('pk_id')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        return $permintaan->count();
    }

    public function permohonanMasuk($jabatan, $unit_organisasi_id, $tahun = null)
    {
        $user_id = auth()->user()->id;

        $permohonan = Permohonan::query()
            ->select('jenis_permohonan', DB::raw('COUNT(*) as total'))->groupBy('jenis_permohonan')
            ->with('jenisPermohonan');

        if ($tahun) {
            $permohonan->where('tahun_berkas', $tahun);
        }

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

    public function tunggakanBerkasKEBnNKEB($jabatan, $unit_organisasi_id, $tahun = null)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($tahun) {
            $permohonan->where('tahun_berkas', $tahun);
        }

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

    public function berkasJatuhTempoBulanIni($jabatan, $unit_organisasi_id, $tahun = null)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($tahun) {
            $permohonan->where('tahun_berkas', $tahun);
        }

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

    public function berkasJatuhTempoBulanDepan($jabatan, $unit_organisasi_id, $tahun = null)
    {
        $user_id = auth()->user()->id;
        $permohonan = Permohonan::query();

        if ($tahun) {
            $permohonan->where('tahun_berkas', $tahun);
        }

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
