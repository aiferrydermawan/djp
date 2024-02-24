<?php

namespace App\Livewire\JenisPajak;

use App\Models\JenisPajak;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        return view('livewire.jenis-pajak.index', [
            'jenis_pajak_all' => JenisPajak::with('ketetapan')->where('nama', 'like', '%'.$this->search.'%')->latest()->paginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        JenisPajak::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('jenis-pajak.index');
    }
}
