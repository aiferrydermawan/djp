<?php

namespace App\Livewire\KebNkeb\Permohonan;

use App\Imports\PermohonanImport;
use Livewire\Component;
use Livewire\WithFileUploads;
use Maatwebsite\Excel\Excel;

class Import extends Component
{
    use WithFileUploads;

    public $permohonan_file;

    public function render()
    {
        return view('livewire.keb-nkeb.permohonan.import');
    }

    public function save()
    {
        $this->validate([
            'permohonan_file' => ['required'],
        ]);

        Excel::import(new PermohonanImport, $this->permohonan_file);

        session()->flash('success', 'Data berhasil disimpan');

        return to_route('permohonan-keb-nkeb.import');
    }
}
