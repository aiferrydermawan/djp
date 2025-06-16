<?php

namespace App\Livewire\KebNkeb\Permohonan;

use App\Models\Permohonan;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';
    public $tahun_berkas;
    public $tahun_berkas_all;

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $this->tahun_berkas_all = Permohonan::select('tahun_berkas')
            ->orderBy('tahun_berkas', 'asc')
            ->groupBy('tahun_berkas')
            ->get();


        $query = Permohonan::query();
        $query->where(function($q) {
            $q->where('nomor_lpad', 'like', '%'.$this->search.'%')
                ->orWhere('npwp', 'like', '%'.$this->search.'%')
                ->orWhere('nama_wp', 'like', '%'.$this->search.'%');
        });

        // Filter tahun_berkas jika ada
        if($this->tahun_berkas){
            $query->where('tahun_berkas', $this->tahun_berkas);
        }

        if($this->tahun_berkas){
            $query->where('tahun_berkas', $this->tahun_berkas);
        }
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
