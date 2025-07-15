<?php

namespace App\Livewire\Monitoring;

use App\Models\Permohonan;
use Livewire\Component;
use Livewire\WithPagination;

class JatuhTempoBerkas extends Component
{
    use WithPagination;

    public $search = '';
    public $filterTahun = '';
    public $tahun_all;

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $this->tahun_all = Permohonan::select('tahun_berkas')->groupBy('tahun_berkas')->orderBy('tahun_berkas','asc')->pluck('tahun_berkas');
        $query = Permohonan::with(['jenisPermohonan', 'dataKeputusan'])
            ->doesntHave('dataPengiriman')
            ->when($this->filterTahun, function ($query) {
                $query->where('tahun_berkas', (int) $this->filterTahun);
            })
            ->where(function ($query) {
                $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                    ->orWhere('npwp', 'like', '%'.$this->search.'%')
                    ->orWhere('nama_wp', 'like', '%'.$this->search.'%');
            });

        return view('livewire.monitoring.jatuh-tempo-berkas', [
            'permohonan_all' => $query->orderBy('tanggal_berakhir', 'asc')->paginate(10),
        ]);
    }
}
