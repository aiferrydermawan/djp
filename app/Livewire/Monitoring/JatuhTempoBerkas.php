<?php

namespace App\Livewire\Monitoring;

use App\Models\Permohonan;
use Livewire\Component;
use Livewire\WithPagination;

class JatuhTempoBerkas extends Component
{
    use WithPagination;

    public $search = '';

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $query = Permohonan::with(['jenisPermohonan', 'dataKeputusan'])->doesntHave('dataPengiriman')
            ->where(function ($query) {
                $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                    ->orWhere('npwp', 'like', '%'.$this->search.'%');
            });

        return view('livewire.monitoring.jatuh-tempo-berkas', [
            'permohonan_all' => $query->orderBy('tanggal_berakhir', 'asc')->paginate(10),
        ]);
    }
}
