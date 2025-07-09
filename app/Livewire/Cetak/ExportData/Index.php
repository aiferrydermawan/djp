<?php

namespace App\Livewire\Cetak\ExportData;

use App\Exports\PermohonanExport;
use App\Models\Permohonan;
use Livewire\Component;
use Maatwebsite\Excel\Facades\Excel;

class Index extends Component
{
    public $tahun_berkas;
    public $tahun_berkas_all;

    public function render()
    {
        $this->tahun_berkas_all = Permohonan::select('tahun_berkas')
            ->orderBy('tahun_berkas', 'asc')
            ->groupBy('tahun_berkas')
            ->get();
        return view('livewire.cetak.export-data.index');
    }

    public function export()
    {
        return Excel::download(new PermohonanExport($this->tahun_berkas), 'permohonan.xlsx');
    }
}
