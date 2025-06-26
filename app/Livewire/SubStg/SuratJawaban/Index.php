<?php

namespace App\Livewire\SubStg\SuratJawaban;

use App\Models\Permintaan;
use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public $tahun_berkas;
    public $tahun_berkas_all;

    public $nama_pk;
    public $nama_pk_all;

    public function mount()
    {
        $this->nama_pk_all = User::whereHas('detail', function($query){
            $query->where('jabatan','penelaah keberatan');
        })->orderBy('name','asc')->get();
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function updatingNamaPk()
    {
        $this->resetPage();
    }

    public function updatingTahunBerkas()
    {
        $this->resetPage();
    }

    public function render()
    {
        $this->tahun_berkas_all = Permintaan::select('tahun_berkas')
            ->orderBy('tahun_berkas', 'asc')
            ->groupBy('tahun_berkas')
            ->get();

        $permintaan = Permintaan::query()->with(['penelaahKeberatan.detail.organisasi', 'suratJawaban']);

        $permintaan->where(function($q) {
            $q->where('nama_wajib_pajak', 'like', '%'.$this->search.'%');
        });

        if($this->tahun_berkas){
            $permintaan->where('tahun_berkas', $this->tahun_berkas);
        }

        if($this->nama_pk){
            $permintaan->where('pk_id', $this->nama_pk);
        }

        return view('livewire.sub-stg.surat-jawaban.index', [
            'permintaan' => $permintaan->latest()->paginate(10),
        ]);
    }
}
