<?php

namespace App\Livewire\Pegawai;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function render()
    {
        return view('livewire.pegawai.index', [
            'users' => User::where('name', 'like', '%'.$this->search.'%')->latest()->paginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        User::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('pegawai.index');
    }
}
