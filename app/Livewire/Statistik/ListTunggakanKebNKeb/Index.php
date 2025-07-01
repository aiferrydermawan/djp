<?php

namespace App\Livewire\Statistik\ListTunggakanKebNKeb;

use App\Models\JenisPermohonan;
use App\Models\Permohonan;
use App\Models\Referensi;
use App\Models\UserDetail;
use Livewire\Component;
use Livewire\WithPagination;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class Index extends Component
{
    use WithPagination;

    public $search = '';
    public $selectedUnitOrganisasi = ''; // Tambahkan properti untuk filter unit organisasi

    public $tahun_berkas;
    public $tahun_berkas_all;

    public $jenis_permohonan;
    public $jenis_permohonan_all;

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

        $this->jenis_permohonan_all = JenisPermohonan::get();

        $user_id = auth()->user()->id;
        $user = UserDetail::where('user_id', $user_id)->first();
        if (! $user) {
            abort(403, 'Anda belum terdaftar di pegawai');
        }
        $jabatan = $user->jabatan;
        $unit_organisasi_id = $user->unit_organisasi_id;

        // Ambil data unit organisasi dari referensi dengan kategori 'unit-organisasi'
        $unit_organisasi_list = Referensi::where('kategori', 'unit-organisasi')->get();

        $query = Permohonan::query();
        $query->where(function ($query) {
            $query->where('nomor_lpad', 'like', '%'.$this->search.'%')
                ->orWhere('npwp', 'like', '%'.$this->search.'%')
                ->orWhere('nama_wp', 'like', '%'.$this->search.'%');
        });
        if($this->tahun_berkas){
            $query->where('tahun_berkas', $this->tahun_berkas);
        }

        if($this->jenis_permohonan){
            $query->where('jenis_permohonan', $this->jenis_permohonan);
        }
        $query->with([
            'jenisPermohonan',
            'jenisPajak',
            'pelaksana.detail.organisasi',
            'penelaahKeberatan.detail.organisasi',
        ])->doesntHave('dataPengiriman');

        // Filter berdasarkan jabatan penelaah keberatan
        if ($jabatan === 'penelaah keberatan') {
            $query->where(function ($query) use ($user_id) {
                $query->where(function ($query) use ($user_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->where('nama_pk_2', $user_id);
                })->orWhere(function ($query) use ($user_id) {
                    $query->whereNull('nama_pk_2')
                        ->where('nama_pk', $user_id);
                });
            });
        }

        // Filter berdasarkan jabatan kepala seksi
        if ($jabatan == 'kepala seksi') {
            $query->where(function ($query) use ($unit_organisasi_id) {
                $query->where(function ($query) use ($unit_organisasi_id) {
                    $query->whereNotNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan2.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                })->orWhere(function ($query) use ($unit_organisasi_id) {
                    $query->whereNull('nama_pk_2')
                        ->whereHas('penelaahKeberatan.detail', function ($query) use ($unit_organisasi_id) {
                            $query->where('unit_organisasi_id', $unit_organisasi_id);
                        });
                });
            });
        }

        // Filter berdasarkan unit organisasi (untuk pelaksana dan kepala bidang)
        if (in_array($jabatan, ['pelaksana', 'kepala bidang']) && $this->selectedUnitOrganisasi) {
            $query->whereHas('penelaahKeberatan.detail', function($query) {
                $query->where('unit_organisasi_id', $this->selectedUnitOrganisasi);
            });
        }

        $query->orderBy('tanggal_berakhir', 'asc');

        $collection = $query->get()->sortBy(fn($item) => $item->sisa_waktu_value)->values();

// Manual paginate
        $currentPage = request()->get('page', 1);
        $perPage = 10;
        $pagedData = $collection->forPage($currentPage, $perPage);

        $permohonan_all = new LengthAwarePaginator(
            $pagedData,
            $collection->count(),
            $perPage,
            $currentPage,
            ['path' => request()->url(), 'query' => request()->query()]
        );

        return view('livewire.statistik.list-tunggakan-keb-n-keb.index', [
            'permohonan_all' => $permohonan_all,
            'unit_organisasi_list' => $unit_organisasi_list,
        ]);
    }
}
