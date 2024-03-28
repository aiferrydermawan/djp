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

        return view('livewire.sub-stg.pengiriman.index', [
            'permintaan' => $permintaan->latest()->paginate(10),
        ]);
    }
}
