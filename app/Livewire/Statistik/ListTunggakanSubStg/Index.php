<?php

namespace App\Livewire\Statistik\ListTunggakanSubStg;

use App\Models\Permintaan;
use App\Models\Permohonan;
use App\Models\UserDetail;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search;

    public $tahun_berkas;
    public $tahun_berkas_all;
    public function render()
    {
        $this->tahun_berkas_all = Permintaan::select('tahun_berkas')
            ->orderBy('tahun_berkas', 'asc')
            ->groupBy('tahun_berkas')
            ->get();

        $user_id = auth()->user()->id;
        $user = UserDetail::where('user_id', $user_id)->first();
        if (! $user) {
            abort(403, 'Anda belum terdaftar di pegawai');
        }
        $jabatan = $user->jabatan;
        $unit_organisasi_id = $user->unit_organisasi_id;

        $query = Permintaan::query();

        $query->where(function ($query) {
            $query->where('nomor_surat_pp', 'like', '%'.$this->search.'%')
                ->OrWhere('nama_wajib_pajak', 'like', '%'.$this->search.'%');
        });

        if($this->tahun_berkas){
            $query->where('tahun_berkas', $this->tahun_berkas);
        }

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
