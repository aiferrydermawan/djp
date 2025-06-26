<?php

namespace App\Livewire\KebNkeb\Permohonan;

use App\Models\Permohonan;
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

        if($this->nama_pk){
            $query->where('nama_pk', $this->nama_pk);
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
