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
        $user = UserDetail::where('user_id', $user_id)->first();
        if (! $user) {
            abort(403, 'Anda belum terdaftar di pegawai');
        }
        $jabatan = $user->jabatan;
        $unit_organisasi_id = $user->unit_organisasi_id;

        $query = Permohonan::query();
        $query->where(function ($query) {
            $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                ->orWhere('npwp', 'like', '%'.$this->search.'%');
        });
        $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'penelaahKeberatan.detail.organisasi',
        ])->doesntHave('dataPengiriman');

        if ($jabatan === 'penelaah keberatan') {
            $query->where(function ($query) use ($user_id) {
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
            $query->whereHas('pelaksana.detail', function ($query) use ($unit_organisasi_id) {
                $query->where('unit_organisasi_id', $unit_organisasi_id);
            });
        }

        $query->orderBy('tanggal_berakhir', 'asc');

        $permohonan_all = $query->paginate(10);

        return view('livewire.statistik.list-tunggakan-keb-n-keb.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }
}
