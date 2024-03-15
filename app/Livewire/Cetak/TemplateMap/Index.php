<?php

namespace App\Livewire\Cetak\TemplateMap;

use App\Models\Permohonan;
use Carbon\Carbon;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public $filter = 1;

    public $start = null;

    public $end = null;

    public function render()
    {
        $permohonan = Permohonan::query()->with(['jenisPermohonan', 'jenisPajak', 'pelaksana.detail']);
        if ($this->filter == 1) {
            $permohonan->where('npwp', 'like', '%'.$this->search.'%');
        } elseif ($this->filter == 2 && isset($this->start)) {
            if ($this->end) {
                $end = Carbon::parse($this->end)->addDay(1);
                $permohonan->whereBetween('dibuat', [$this->start, $end]);
            } else {
                $permohonan->whereDate('dibuat', $this->start);
            }
        } else {
            $permohonan->latest();
        }

        return view('livewire.cetak.template-map.index', [
            'permohonan_all' => $permohonan->paginate(10),
        ]);
    }

    public function updatingFilter()
    {
        $this->search = '';
        $this->start = null;
        $this->end = null;
    }
}
