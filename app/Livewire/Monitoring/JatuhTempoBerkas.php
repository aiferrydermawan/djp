<?php

namespace App\Livewire\Monitoring;

use App\Models\Permohonan;
use Livewire\Component;
use Livewire\WithPagination;

class JatuhTempoBerkas extends Component
{
    use WithPagination;

    public function render()
    {
        $permohonan_all = Permohonan::query();
        $permohonan_all->with(['jenisPermohonan', 'dataKeputusan'])->doesntHave('dataPengiriman');

        return view('livewire.monitoring.jatuh-tempo-berkas', [
            'permohonan_all' => $permohonan_all->orderBy('tanggal_berakhir', 'asc')->paginate(10),
        ]);
    }
}
