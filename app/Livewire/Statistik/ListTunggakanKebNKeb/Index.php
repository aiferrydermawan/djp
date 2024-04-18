<?php

namespace App\Livewire\Statistik\ListTunggakanKebNKeb;

use App\Models\Permohonan;
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
        $query = Permohonan::query();
        $query->where('nomor_lpad', 'like', '%'.$this->search.'%')->orWhere('npwp', 'like', '%'.$this->search.'%');
        $permohonan_all = $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'penelaahKeberatan.detail.organisasi',
        ])
            ->doesntHave('dataPengiriman')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->orderBy('tanggal_berakhir', 'asc')
            ->paginate(10);

        return view('livewire.statistik.list-tunggakan-keb-n-keb.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }
}
