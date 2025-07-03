<?php

namespace App\Livewire\SubStg\Pengiriman;

use App\Models\Permintaan;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        $permintaan = Permintaan::query()->with(['penelaahKeberatan.detail.organisasi', 'pengiriman'])->has('suratJawaban');

        if($this->search){
            $permintaan->where('npwp', 'like', '%'.$this->search.'%')
            ->orWhere('nomor_surat_pp', 'like', '%'.$this->search.'%');
        }

        return view('livewire.sub-stg.pengiriman.index', [
            'permintaan' => $permintaan->latest()->paginate(10),
        ]);
    }
}
