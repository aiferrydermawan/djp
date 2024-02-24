<?php

namespace App\Livewire\Referensi;

use App\Models\Referensi;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public $kategori;

    public $title;

    public function mount()
    {
        $this->kategori = request('kategori');
        $this->title = str_replace('-', ' ', $this->kategori);
    }

    public function render()
    {
        return view('livewire.referensi.index', [
            'referensi_all' => Referensi::where('nama', 'like', '%'.$this->search.'%')->whereKategori($this->kategori)->latest()->paginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        Referensi::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('referensi.index', ['kategori' => $this->kategori]);
    }
}
