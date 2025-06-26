<?php

namespace App\Livewire\KebNkeb\DataKeputusan;

use App\Models\Permohonan;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Pagination\LengthAwarePaginator;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public $status = 'pending';

    public $sortBySisaWaktu = null; // null | 'asc' | 'desc'

    public $nama_pk;
    public $nama_pk_all;


    public function mount()
    {
        $user_detail = UserDetail::where('user_id', auth()->user()->id)->first();
        if (! $user_detail) {
            abort('403', 'Anda belum terdaftar sebagai pegawai');
        }

        if ($user_detail->jabatan !== 'pelaksana') {
            abort('403', 'Anda bukan pelaksana');
        }

        $this->nama_pk_all = User::whereHas('detail', function($query){
            $query->where('jabatan','penelaah keberatan');
        })->orderBy('name','asc')->get();
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function updatingStatus()
    {
        $this->resetPage();
    }

    public function updatingNamaPk()
    {
        $this->resetPage();
    }

    public function render()
    {
        $query = Permohonan::query();

        if ($this->status == 'pending') {
            $query->doesntHave('dataKeputusan');
        } else {
            $query->has('dataKeputusan');
        }

        if($this->nama_pk){
            $query->where('nama_pk', $this->nama_pk);
        }

        $query->where(function ($query) {
            $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                ->orWhere('npwp', 'like', '%'.$this->search.'%')
                ->orWhere('nama_wp', 'like', '%'.$this->search.'%');
        });

        // Sort by sisa_waktu (manual karena ini adalah accessor)
        if ($this->sortBySisaWaktu === 'asc') {
            $query->sortBy(fn ($item) => $item->sisa_waktu_value);
        } elseif ($this->sortBySisaWaktu === 'desc') {
            $query->sortByDesc(fn ($item) => $item->sisa_waktu_value);
        }

        $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'dataKeputusan',
        ]);

        return view('livewire.keb-nkeb.data-keputusan.index', [
            'permohonan_all' => $query->paginate(10),
        ]);
    }
}
