<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\Permohonan;
use App\Models\SpidPembahasan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SPIDPembahasanController extends Controller
{
    public $loadDefault = 10;

    public function index(Request $request)
    {
        $user_id = auth()->user()->id;
        $query = Permohonan::query();
        $permohonanAll = PermohonanResource::collection($query->with([
            'jenisPermohonan',
            'jenisPajak',
            'penelaahKeberatan.detail.organisasi',
            'pelaksana.detail.organisasi',
            // Batas
            'spidPembahasan',
        ])
            ->whereHas('penelitianFormal')
            ->where(function ($query) use ($user_id) {
                $query->where('nama_pk', $user_id)
                    ->whereNull('nama_pk_2');
            })->orWhere(function ($query) use ($user_id) {
                $query->where('nama_pk_2', $user_id);
            })->latest()
            ->paginate($this->loadDefault));

        return inertia('SPIDPembahasan/PenelaahKeberatan', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::with(['jenisPermohonan', 'jenisPajak', 'spidPembahasan'])->find($id);

        return inertia('SPIDPembahasan/Edit', [
            'permohonan' => $permohonan,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'spidKpp' => ['nullable'],
            'tanggalSpidKpp' => ['nullable'],
            'spidKpp2' => ['nullable'],
            'tanggalSpidKpp2' => ['nullable'],
            'spidKpp3' => ['nullable'],
            'tanggalSpidKpp3' => ['nullable'],
            'spidWp1' => ['nullable'],
            'tanggalSpidWp1' => ['nullable'],
            'spidWp2' => ['nullable'],
            'tanggalSpidWp2' => ['nullable'],
            'spidWp3' => ['nullable'],
            'tanggalSpidWp3' => ['nullable'],
            'nomorBaTidakBeriDokumen' => ['nullable'],
            'tanggalBaTidakBeriDokumen' => ['nullable'],
            'nomorSuratPemanggilanPemeriksa' => ['nullable'],
            'tanggalSuratPemanggilanPemeriksa' => ['nullable'],
            'nomorSuratPemanggilanPemeriksa2' => ['nullable'],
            'tanggalSuratPemanggilanPemeriksa2' => ['nullable'],
            'nomorSuratPemanggilanPemeriksa3' => ['nullable'],
            'tanggalSuratPemanggilanPemeriksa3' => ['nullable'],
            'nomorBaPembahasanPemeriksa' => ['nullable'],
            'tanggalBaPembahasanPemeriksa' => ['nullable'],
            'nomorBaPembahasanPemeriksa2' => ['nullable'],
            'tanggalBaPembahasanPemeriksa2' => ['nullable'],
            'nomorBaPembahasanPemeriksa3' => ['nullable'],
            'tanggalBaPembahasanPemeriksa3' => ['nullable'],
            'nomorSuratPemanggilanWp' => ['nullable'],
            'tanggalSuratPemanggilanWp' => ['nullable'],
            'nomorSuratPemanggilanWp2' => ['nullable'],
            'tanggalSuratPemanggilanWp2' => ['nullable'],
            'nomorSuratPemanggilanWp3' => ['nullable'],
            'tanggalSuratPemanggilanWp3' => ['nullable'],
            'nomorBaPembahasanWp' => ['nullable'],
            'tanggalBaPembahasanWp' => ['nullable'],
            'nomorBaPembahasanWp2' => ['nullable'],
            'tanggalBaPembahasanWp2' => ['nullable'],
            'nomorBaPembahasanWp3' => ['nullable'],
            'tanggalBaPembahasanWp3' => ['nullable'],
        ]);

        SpidPembahasan::updateOrCreate(
            ['permohonan_id' => $id],
            [
                'spid_kpp' => $request->spidKpp,
                'tanggal_spid_kpp' => $request->tanggalSpidKpp,
                'spid_kpp_2' => $request->spidKpp2,
                'tanggal_spid_kpp_2' => $request->tanggalSpidKpp2,
                'spid_kpp_3' => $request->spidKpp3,
                'tanggal_spid_kpp_3' => $request->tanggalSpidKpp3,
                'spid_wp_1' => $request->spidWp1,
                'tanggal_spid_wp_1' => $request->tanggalSpidWp1,
                'spid_wp_2' => $request->spidWp2,
                'tanggal_spid_wp_2' => $request->tanggalSpidWp2,
                'spid_wp_3' => $request->spidWp3,
                'tanggal_spid_wp_3' => $request->tanggalSpidWp3,
                'nomor_ba_tidak_beri_dokumen' => $request->nomorBaTidakBeriDokumen,
                'tanggal_ba_tidak_beri_dokumen' => $request->tanggalBaTidakBeriDokumen,
                'nomor_surat_pemanggilan_pemeriksa' => $request->nomorSuratPemanggilanPemeriksa,
                'tanggal_surat_pemanggilan_pemeriksa' => $request->tanggalSuratPemanggilanPemeriksa,
                'nomor_surat_pemanggilan_pemeriksa_2' => $request->nomorSuratPemanggilanPemeriksa2,
                'tanggal_surat_pemanggilan_pemeriksa_2' => $request->tanggalSuratPemanggilanPemeriksa2,
                'nomor_surat_pemanggilan_pemeriksa_3' => $request->nomorSuratPemanggilanPemeriksa3,
                'tanggal_surat_pemanggilan_pemeriksa_3' => $request->tanggalSuratPemanggilanPemeriksa3,
                'nomor_ba_pembahasan_pemeriksa' => $request->nomorBaPembahasanPemeriksa,
                'tanggal_ba_pembahasan_pemeriksa' => $request->tanggalBaPembahasanPemeriksa,
                'nomor_ba_pembahasan_pemeriksa_2' => $request->nomorBaPembahasanPemeriksa2,
                'tanggal_ba_pembahasan_pemeriksa_2' => $request->tanggalBaPembahasanPemeriksa2,
                'nomor_ba_pembahasan_pemeriksa_3' => $request->nomorBaPembahasanPemeriksa3,
                'tanggal_ba_pembahasan_pemeriksa_3' => $request->tanggalBaPembahasanPemeriksa3,
                'nomor_surat_pemanggilan_wp' => $request->nomorSuratPemanggilanWp,
                'tanggal_surat_pemanggilan_wp' => $request->tanggalSuratPemanggilanWp,
                'nomor_surat_pemanggilan_wp_2' => $request->nomorSuratPemanggilanWp2,
                'tanggal_surat_pemanggilan_wp_2' => $request->tanggalSuratPemanggilanWp2,
                'nomor_surat_pemanggilan_wp_3' => $request->nomorSuratPemanggilanWp3,
                'tanggal_surat_pemanggilan_wp_3' => $request->tanggalSuratPemanggilanWp3,
                'nomor_ba_pembahasan_wp' => $request->nomorBaPembahasanWp,
                'tanggal_ba_pembahasan_wp' => $request->tanggalBaPembahasanWp,
                'nomor_ba_pembahasan_wp_2' => $request->nomorBaPembahasanWp2,
                'tanggal_ba_pembahasan_wp_2' => $request->tanggalBaPembahasanWp2,
                'nomor_ba_pembahasan_wp_3' => $request->nomorBaPembahasanWp3,
                'tanggal_ba_pembahasan_wp_3' => $request->tanggalBaPembahasanWp3,
                'pembuat' => auth()->user()->id,
            ]
        );

        session()->flash('success', 'Data berhasil diperbarui');

        return Inertia::location(route('spid-pembahasan.index'));
    }
}
