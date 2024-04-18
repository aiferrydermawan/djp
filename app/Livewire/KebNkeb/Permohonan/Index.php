<?php

namespace App\Livewire\KebNkeb\Permohonan;

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
        $query = Permohonan::query();
        $query->where('nomor_lpad', 'like', '%'.$this->search.'%')->orWhere('npwp', 'like', '%'.$this->search.'%');
        $permohonan_all = $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'penelaahKeberatan.detail.organisasi',
        ])->where('pembuat', auth()->user()->id)->latest()->paginate(10);

        return view('livewire.keb-nkeb.permohonan.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }

    public function delete($id)
    {
        Permohonan::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('permohonan-keb-nkeb.index');
    }
}
