<?php

namespace App\Livewire\SubStg\InputPermintaan;

use App\Models\Permintaan;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        $permintaan = Permintaan::query()->with('penelaahKeberatan.detail.organisasi');

        return view('livewire.sub-stg.input-permintaan.index', [
            'permintaan' => $permintaan->latest()->paginate(10),
        ]);
    }

    public function delete($id)
    {
        Permintaan::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('input-permintaan');
    }
}
