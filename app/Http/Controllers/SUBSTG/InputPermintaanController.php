<?php

namespace App\Http\Controllers\SUBSTG;

use App\Http\Controllers\Controller;
use App\Models\JenisPermohonan;
use App\Models\Permintaan;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InputPermintaanController extends Controller
{
    public function create()
    {
        $user = User::with('detail')->find(auth()->user()->id);
        $pk_all = User::whereHas('detail', function ($query) use ($user) {
            $query
                ->whereJabatan('penelaah keberatan')
                ->whereUnitOrganisasiId($user->detail->unit_organisasi_id);
        })->get();
        $jenis_permohonan_all = JenisPermohonan::select(['id', 'nama as name'])->get();

        return inertia('InputPermintaan/Create', [
            'pk_all' => $pk_all,
            'jenis_permohonan_all' => $jenis_permohonan_all,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'kategori_permintaan' => ['required'],
            'jenis_permohonan' => ['required'],
            'tahun_berkas' => ['required'],
            'nomor_surat_pp' => ['nullable'],
            'tgl_surat_pp' => ['nullable'],
            'tgl_resi_pp' => ['nullable'],
            'tgl_diterima_kanwil' => ['nullable'],
            'nomor_sengketa' => ['nullable'],
            'jenis_sengketa' => ['nullable'],
            'npwp' => ['nullable'],
            'nama_wajib_pajak' => ['nullable'],
            'nomor_surat_banding_gugatan_wp' => ['required'],
            'tgl_surat_banding_gugatan' => ['required'],
            'tgl_diterima_pp' => ['required'],
            'nomor_kep_surat_yang_di_banding_gugat' => ['required'],
            'tgl_kep_surat_yang_di_banding_gugat' => ['required'],
            //'no_surat_tugas' => ['required'],
            //'tgl_surat_tugas' => ['required'],
            //'no_matriks' => ['required'],
            //'tgl_matriks' => ['required'],
            //'no_surat_tugas_pengganti' => ['nullable'],
            //'tgl_surat_tugas_pengganti' => ['nullable'],
            'pk' => ['required'],
        ]);

        $tanggal_berakhir = $this->getTanggalBerakhir($request->tgl_resi_pp, $request->jenis_permohonan);

        $data = [
            'kategori_permintaan' => $request->kategori_permintaan,
            'jenis_permohonan' => $request->jenis_permohonan,
            'tahun_berkas' => $request->tahun_berkas,
            'nomor_surat_pp' => $request->nomor_surat_pp,
            'tgl_surat_pp' => $request->tgl_surat_pp,
            'tgl_resi_pp' => $request->tgl_resi_pp,
            'tgl_diterima_kanwil' => $request->tgl_diterima_kanwil,
            'nomor_sengketa' => $request->nomor_sengketa,
            'jenis_sengketa' => $request->jenis_sengketa,
            'npwp' => $request->npwp,
            'nama_wajib_pajak' => $request->nama_wajib_pajak,
            'nomor_surat_banding_gugatan_wp' => $request->nomor_surat_banding_gugatan_wp,
            'tgl_surat_banding_gugatan' => $request->tgl_surat_banding_gugatan,
            'tgl_diterima_pp' => $request->tgl_diterima_pp,
            'nomor_kep_surat_yang_di_banding_gugat' => $request->nomor_kep_surat_yang_di_banding_gugat,
            'tgl_kep_surat_yang_di_banding_gugat' => $request->tgl_kep_surat_yang_di_banding_gugat,
            // 'no_surat_tugas' => $request->no_surat_tugas,
            // 'tgl_surat_tugas' => $request->tgl_surat_tugas,
            // 'no_matriks' => $request->no_matriks,
            // 'tgl_matriks' => $request->tgl_matriks,
            // 'no_surat_tugas_pengganti' => $request->no_surat_tugas_pengganti,
            // 'tgl_surat_tugas_pengganti' => $request->tgl_surat_tugas_pengganti,
            'pk_id' => $request->pk,
            'tanggal_berakhir' =>  $tanggal_berakhir,
        ];

        $data = Permintaan::create($data);
        session()->flash('success', 'Data berhasil dibuat');

        return Inertia::location(route('input-permintaan'));
    }

    public function edit($id)
    {
        $permintaan = Permintaan::find($id);
        $jenis_permohonan_all = JenisPermohonan::select(['id', 'nama as name'])->get();
        $user = User::with('detail')->find(auth()->user()->id);
        $pk_all = User::whereHas('detail', function ($query) use ($user) {
            $query
                ->whereJabatan('penelaah keberatan')
                ->whereUnitOrganisasiId($user->detail->unit_organisasi_id);
        })->get();

        return inertia('InputPermintaan/Edit', [
            'pk_all' => $pk_all,
            'permintaan' => $permintaan,
            'jenis_permohonan_all' => $jenis_permohonan_all,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'kategori_permintaan' => ['required'],
            'jenis_permohonan' => ['required'],
            'tahun_berkas' => ['required'],
            'nomor_surat_pp' => ['required'],
            'tgl_surat_pp' => ['required'],
            'tgl_resi_pp' => ['required'],
            'tgl_diterima_kanwil' => ['required'],
            'nomor_sengketa' => ['required'],
            'jenis_sengketa' => ['required'],
            'npwp' => ['required'],
            'nama_wajib_pajak' => ['required'],
            'nomor_surat_banding_gugatan_wp' => ['required'],
            'tgl_surat_banding_gugatan' => ['required'],
            'tgl_diterima_pp' => ['required'],
            'nomor_kep_surat_yang_di_banding_gugat' => ['required'],
            'tgl_kep_surat_yang_di_banding_gugat' => ['required'],
            //'no_surat_tugas' => ['required'],
            //'tgl_surat_tugas' => ['required'],
            //'no_matriks' => ['required'],
            //'tgl_matriks' => ['required'],
            //'no_surat_tugas_pengganti' => ['nullable'],
            //'tgl_surat_tugas_pengganti' => ['nullable'],
            'pk' => ['required'],
        ]);

        $tanggal_berakhir = $this->getTanggalBerakhir($request->tgl_resi_pp, $request->jenis_permohonan);

        $data = [
            'kategori_permintaan' => $request->kategori_permintaan,
            'jenis_permohonan' => $request->jenis_permohonan,
            'tahun_berkas' => $request->tahun_berkas,
            'nomor_surat_pp' => $request->nomor_surat_pp,
            'tgl_surat_pp' => $request->tgl_surat_pp,
            'tgl_resi_pp' => $request->tgl_resi_pp,
            'tgl_diterima_kanwil' => $request->tgl_diterima_kanwil,
            'nomor_sengketa' => $request->nomor_sengketa,
            'jenis_sengketa' => $request->jenis_sengketa,
            'npwp' => $request->npwp,
            'nama_wajib_pajak' => $request->nama_wajib_pajak,
            'nomor_surat_banding_gugatan_wp' => $request->nomor_surat_banding_gugatan_wp,
            'tgl_surat_banding_gugatan' => $request->tgl_surat_banding_gugatan,
            'tgl_diterima_pp' => $request->tgl_diterima_pp,
            'nomor_kep_surat_yang_di_banding_gugat' => $request->nomor_kep_surat_yang_di_banding_gugat,
            'tgl_kep_surat_yang_di_banding_gugat' => $request->tgl_kep_surat_yang_di_banding_gugat,
//            'no_surat_tugas' => $request->no_surat_tugas,
//            'tgl_surat_tugas' => $request->tgl_surat_tugas,
//            'no_matriks' => $request->no_matriks,
//            'tgl_matriks' => $request->tgl_matriks,
//            'no_surat_tugas_pengganti' => $request->no_surat_tugas_pengganti ?? null,
//            'tgl_surat_tugas_pengganti' => $request->tgl_surat_tugas_pengganti ?? null,
            'pk_id' => $request->pk,
            'tanggal_berakhir' =>  $tanggal_berakhir,
        ];

        $data = Permintaan::where('id', $id)->update($data);
        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('input-permintaan'));
    }

    public function getTanggalBerakhir($tanggal_diterima, $id)
    {
        $jenisPermohonan = JenisPermohonan::find($id);
        $info = json_decode($jenisPermohonan->jatuh_tempo_iku, true);

        $kategori = $info['kategori'];
        $kuantitas = $info['kuantitas'];

        // Menghitung sisa waktu berdasarkan kategori dan kuantitas
        $tanggal_diterima = Carbon::parse($tanggal_diterima);
        switch ($kategori) {
            case 'hari':
                $tanggal_berakhir = $tanggal_diterima->addDays($kuantitas);
                break;
            case 'minggu':
                $tanggal_berakhir = $tanggal_diterima->addWeeks($kuantitas);
                break;
            case 'bulan':
                $tanggal_berakhir = $tanggal_diterima->addMonths($kuantitas);
                break;
            case 'tahun':
                $tanggal_berakhir = $tanggal_diterima->addYears($kuantitas);
                break;
            default:
                $tanggal_berakhir = null;
        }
        if ($tanggal_berakhir) {
            return Carbon::parse($tanggal_berakhir)->subDay()->format('Y-m-d');
        } else {
            return null;
        }
    }
}
