<?php

namespace App\Livewire\KebNkeb\DataPengiriman;

use App\Models\Permohonan;
use App\Models\User;
use App\Models\UserDetail;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public $status = 'pending';

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

    public function render()
    {
        $user_id = auth()->user()->id;
        $query = Permohonan::query();
        if ($this->status == 'pending') {
            $query->doesntHave('dataPengiriman');
        } else {
            $query->has('dataPengiriman');
        }
        if($this->nama_pk){
            $query->where('nama_pk', $this->nama_pk);
        }
        $query->where(function ($query) {
            $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                ->orWhere('npwp', 'like', '%'.$this->search.'%')
                ->orWhere('nama_wp', 'like', '%'.$this->search.'%');;
        });

//        $query->where(function ($query) use ($user_id) {
//            $query->where('nama_pk', $user_id)
//                ->orWhere(function ($query) use ($user_id) {
//                    $query->where('nama_pk_2', $user_id)
//                        ->whereNotNull('nama_pk_2');
//                });
//        });
        $query->whereHas('dataKeputusan');
        $permohonan_all = $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'dataPengiriman',
        ])->latest()->paginate(10);

        return view('livewire.keb-nkeb.data-pengiriman.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }
}
