<?php

namespace App\Livewire\Statistik\ListTunggakanKebNKeb;

use App\Models\Permohonan;
use App\Models\UserDetail;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $user_id = auth()->user()->id;
        $jabatan = UserDetail::select('jabatan')->where('user_id', $user_id)->first()->jabatan;
        if (! $jabatan) {
            abort(403, 'Anda belum mempunyai jabatan');
        }

        $query = Permohonan::query();
        $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'penelaahKeberatan.detail.organisasi',
        ])->doesntHave('dataPengiriman');

        if ($jabatan === 'penelaah keberatan') {
            $query->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->orWhere(function ($query) use ($user_id) {
                        $query->where('nama_pk_2', $user_id)
                            ->whereNotNull('nama_pk_2');
                    });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $query->whereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            })->orWhereHas('penelaahKeberatan.detail', function ($query) use ($jabatan) {
                $query->where('jabatan', $jabatan);
            });
        }

        $query->orderBy('tanggal_berakhir', 'asc');

        $permohonan_all = $query->paginate(10);

        return view('livewire.statistik.list-tunggakan-keb-n-keb.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }
}
