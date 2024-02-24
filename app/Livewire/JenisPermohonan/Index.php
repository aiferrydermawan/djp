<?php

namespace App\Livewire\JenisPermohonan;

use App\Models\JenisPermohonan;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        return view('livewire.jenis-permohonan.index', [
            'jenis_permohonan_all' => JenisPermohonan::where('nama', 'like', '%'.$this->search.'%')->latest()->paginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        JenisPermohonan::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('jenis-permohonan.index');
    }
}
