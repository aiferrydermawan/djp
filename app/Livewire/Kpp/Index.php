<?php

namespace App\Livewire\Kpp;

use App\Models\Kpp;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        return view('livewire.kpp.index', [
            'kpp_all' => Kpp::where('nama', 'like', '%'.$this->search.'%')->latest()->paginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        Kpp::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('kpp.index');
    }
}
