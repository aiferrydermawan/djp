<?php

namespace App\Livewire\SubStg\SuratJawaban;

use App\Models\Permintaan;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        $permintaan = Permintaan::query()->with(['penelaahKeberatan.detail.organisasi', 'suratJawaban']);
        $permintaan->orderBy('nomor_urut', 'desc');

        return view('livewire.sub-stg.surat-jawaban.index', [
            'permintaan' => $permintaan->paginate(10),
        ]);
    }
}
