<?php

namespace App\Livewire\Statistik\ListTunggakanSubStg;

use App\Models\Permintaan;
use App\Models\UserDetail;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search;
    public function render()
    {
        $user_id = auth()->user()->id;
        $user = UserDetail::where('user_id', $user_id)->first();
        if (! $user) {
            abort(403, 'Anda belum terdaftar di pegawai');
        }
        $jabatan = $user->jabatan;
        $unit_organisasi_id = $user->unit_organisasi_id;

        $query = Permintaan::query();

        $query->where(function ($query) {
            $query->where('nomor_surat_pp', 'like', '%'.$this->search.'%');
        });

        $query->with(['penelaahKeberatan.detail.organisasi'])->doesntHave('pengiriman');

        if ($jabatan === 'penelaah keberatan') {
            $query->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('pk_id')
                        ->where('pk_id', $user_id);
                });
            });
        }

        if ($jabatan == 'kepala seksi') {
            $query->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('pk_id')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        return view('livewire.statistik.list-tunggakan-sub-stg.index',[
            'permintaan' => $query->latest()->paginate(10)
        ]);
    }
}
