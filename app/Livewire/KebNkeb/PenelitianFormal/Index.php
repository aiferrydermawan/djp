<?php

namespace App\Livewire\KebNkeb\PenelitianFormal;

use App\Models\Permohonan;
use App\Models\UserDetail;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public function mount()
    {
        $user_detail = UserDetail::where('user_id', auth()->user()->id)->first();
        if (! $user_detail) {
            abort('403', 'Anda belum terdaftar sebagai pegawai');
        }

        if ($user_detail->jabatan !== 'penelaah keberatan') {
            abort('403', 'Anda bukan penelaah keberatan');
        }
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $user_id = auth()->user()->id;
        $query = Permohonan::query();
        $query->where(function ($query) {
            $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                ->orWhere('npwp', 'like', '%'.$this->search.'%');
        });
        $query->where(function ($query) use ($user_id) {
            $query->where('nama_pk', $user_id)
                ->orWhere(function ($query) use ($user_id) {
                    $query->where('nama_pk_2', $user_id)
                        ->whereNotNull('nama_pk_2');
                });
        });
        $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'penelitianFormal',
        ]);
        $permohonan_all = $query->latest()->paginate(10);

        return view('livewire.keb-nkeb.penelitian-formal.index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }
}
