<?php

namespace App\Livewire\Monitoring;

use App\Models\Permohonan;
use Livewire\Component;
use Livewire\WithPagination;

class PencarianSk extends Component
{
    use WithPagination;

    public $search = '';

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $query = Permohonan::with(['jenisPermohonan', 'dataPengiriman'])->has('dataKeputusan')
            ->where(function ($query) {
                $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                    ->orWhere('npwp', 'like', '%'.$this->search.'%')
                    ->orWhere('nama_wp', 'like', '%'.$this->search.'%');
            });

        return view('livewire.monitoring.pencarian-sk', [
            'permohonan_all' => $query->latest()->paginate(10),
        ]);
    }
}
