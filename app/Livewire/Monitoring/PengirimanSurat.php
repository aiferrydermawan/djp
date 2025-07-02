<?php

namespace App\Livewire\Monitoring;

use App\Models\Permohonan;
use Livewire\Component;
use Livewire\WithPagination;

class PengirimanSurat extends Component
{
    use WithPagination;

    public $search = '';

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $query = Permohonan::with(['jenisPermohonan', 'dataKeputusan', 'dataPengiriman'])
            ->has('dataPengiriman')
            ->where(function ($query) {
                $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                    ->orWhere('npwp', 'like', '%'.$this->search.'%')
                    ->orWhere('nama_wp', 'like', '%'.$this->search.'%');
            });

        return view('livewire.monitoring.pengiriman-surat', [
            'permohonan_all' => $query->latest()->paginate(10),
        ]);
    }
}
