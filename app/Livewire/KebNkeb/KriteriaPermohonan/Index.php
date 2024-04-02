<?php

namespace App\Livewire\KebNkeb\KriteriaPermohonan;

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
        $query->where('nomor_lpad', 'like', '%'.$this->search.'%');
        $permohonan_all = $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'kriteriaPermohonan',
        ])
            ->Has('dataKeputusan')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate(10);

        return view('livewire.keb-nkeb.kriteria-permohonan.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }
}
