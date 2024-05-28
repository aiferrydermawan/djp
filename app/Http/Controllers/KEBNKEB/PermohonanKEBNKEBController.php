<?php

namespace App\Http\Controllers\KEBNKEB;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermohonanResource;
use App\Models\JenisPermohonan;
use App\Models\Kpp;
use App\Models\Permohonan;
use App\Models\Referensi;
use App\Models\User;
use App\Rules\NoKetetapanFormat;
use App\Rules\NOPFormat;
use App\Rules\NPWPFormat;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PermohonanKEBNKEBController extends Controller
{
    public $loadDefault = 10;

    public function index(Request $request)
    {
        $query = Permohonan::query();

        $permohonanAll = PermohonanResource::collection($query->with([
            'jenisPermohonan',
            'jenisPajak',
            'penelaahKeberatan.detail.organisasi',
            'penelitianFormal',
        ])
            ->where('pembuat', auth()->user()->id)
            ->latest()
            ->paginate($this->loadDefault));

        return inertia('PermohonanKEBNKEB/PenelaahKeberatan', [
            'permohonanAll' => $permohonanAll,
        ]);
    }

    public function create()
    {
        $user = User::with('detail')->find(auth()->user()->id);
        $kpp_all = Kpp::select(['id', 'nama as name'])->orderBy('kode_kpp', 'asc')->get();
        $jenis_permohonan_all = JenisPermohonan::select(['id', 'nama as name'])->get();
        $unit_yang_memproses_all = User::select(['id', 'name'])->whereHas('detail', function ($query) {
            $query->whereJabatan('kepala kanwil');
        })->get();
        $jenis_ketetapan_all = Referensi::select('id', 'nama as name')->where(
            'kategori',
            'jenis-ketetapan',
        )->get();
        $dasar_pemrosesan_all = Referensi::select('id', 'nama as name')->where(
            'kategori',
            'dasar-pemrosesan',
        )->get();
        $pk_all = User::whereHas('detail', function ($query) use ($user) {
            $query
                ->whereJabatan('penelaah keberatan')
                ->whereUnitOrganisasiId($user->detail->unit_organisasi_id);
        })->get();

        return inertia('PermohonanKEBNKEB/Create', [
            'kpp_all' => $kpp_all,
            'jenis_permohonan_all' => $jenis_permohonan_all,
            'unit_yang_memproses_all' => $unit_yang_memproses_all,
            'jenis_ketetapan_all' => $jenis_ketetapan_all,
            'dasar_pemrosesan_all' => $dasar_pemrosesan_all,
            'pk_all' => $pk_all,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_wp' => ['required'],
            'npwp' => ['required', new NPWPFormat],
            'nop' => ['nullable', new NOPFormat],
            'kode_kpp_terdaftar' => ['required'],
            'jenis_permohonan' => ['required'],
            'unit_yang_memproses' => ['required'],
            'jenis_ketetapan' => ['required'],
            'nomor_ketetapan' => ['required', new NoKetetapanFormat],
            'tanggal_ketetapan' => ['required'],
            'tanggal_kirim_ketetapan' => ['required'],
            'jenis_pajak' => ['required'],
            'masa_pajak' => ['required'],
            'tahun_pajak' => ['required', 'min:4', 'max:4'],
            'mata_uang' => ['required'],
            'nilai_1' => ['required'],
            'nilai_2' => ['required'],
            'nilai_3' => ['required'],
            'nilai_4' => ['required'],
            'dasar_pemrosesan' => ['required'],
            'nomor_surat_wp' => ['required'],
            'tanggal_surat_wp' => ['required'],
            'nomor_lpad' => ['required'],
            'tanggal_diterima' => ['required'],
            'no_surat_pengantar_kpp' => ['required'],
            'tanggal_surat_pengantar' => ['required'],
            'tanggal_pengiriman_kpp' => ['required'],
            'nomor_surat_tugas' => ['required'],
            'tanggal_surat_tugas' => ['required'],
            'no_matriks' => ['required'],
            'tanggal_matriks' => ['required'],
            'nama_pk' => ['required'],
            'nomor_surat_tugas_2' => ['nullable'],
            'tanggal_surat_tugas_2' => ['nullable'],
            'nama_pk_2' => ['nullable'],
        ]);

        $tanggal_berakhir = $this->getTanggalBerakhir($request->tanggal_diterima, $request->jenis_permohonan);

        $data = [
            'nama_wp' => $request->nama_wp,
            'npwp' => $request->npwp,
            'nop' => $request->nop != null ? $request->nop : null,
            'kode_kpp_terdaftar' => $request->kode_kpp_terdaftar,
            'jenis_permohonan' => $request->jenis_permohonan,
            'unit_yang_memproses' => $request->unit_yang_memproses,
            'jenis_pajak' => $request->jenis_pajak,
            'masa_pajak' => $request->masa_pajak,
            'tahun_pajak' => $request->tahun_pajak,
            'mata_uang' => $request->mata_uang,
            'jenis_ketetapan' => $request->jenis_ketetapan,
            'nomor_ketetapan' => $request->nomor_ketetapan,
            'tanggal_ketetapan' => $request->tanggal_ketetapan,
            'tanggal_kirim_ketetapan' => $request->tanggal_kirim_ketetapan,
            'nilai_1' => str_replace('.', '', $request->nilai_1),
            'nilai_2' => str_replace('.', '', $request->nilai_2),
            'nilai_3' => str_replace('.', '', $request->nilai_3),
            'nilai_4' => str_replace('.', '', $request->nilai_4),
            'dasar_pemrosesan' => $request->dasar_pemrosesan,
            'nomor_surat_wp' => $request->nomor_surat_wp,
            'tanggal_surat_wp' => $request->tanggal_surat_wp,
            'nomor_lpad' => $request->nomor_lpad,
            'tanggal_diterima' => $request->tanggal_diterima,
            'tanggal_berakhir' => $tanggal_berakhir,
            'no_surat_pengantar_kpp' => $request->no_surat_pengantar_kpp,
            'tanggal_surat_pengantar' => $request->tanggal_surat_pengantar,
            'tanggal_pengiriman_kpp' => $request->tanggal_pengiriman_kpp,
            'nomor_surat_tugas' => $request->nomor_surat_tugas,
            'tanggal_surat_tugas' => $request->tanggal_surat_tugas,
            'nama_pk' => $request->nama_pk,
            'no_matriks' => $request->no_matriks,
            'tanggal_matriks' => $request->tanggal_matriks,
            'nomor_surat_tugas_2' => $request->nomor_surat_tugas_2 ?? null,
            'tanggal_surat_tugas_2' => $request->tanggal_surat_tugas_2 ?? null,
            'nama_pk_2' => $request->nama_pk_2 ?? null,
            'pembuat' => auth()->user()->id,
        ];

        $data = Permohonan::create($data);
        session()->flash('success', 'Data berhasil dibuat');

        return Inertia::location(route('permohonan-keb-nkeb.index'));
    }

    public function preview($id)
    {
        $permohonan = Permohonan::find($id);
        $user = User::with('detail')->find(auth()->user()->id);
        $kpp_all = Kpp::select(['id', 'nama as name'])->orderBy('kode_kpp', 'asc')->get();
        $jenis_permohonan_all = JenisPermohonan::select(['id', 'nama as name'])->get();
        $unit_yang_memproses_all = User::select(['id', 'name'])->whereHas('detail', function ($query) {
            $query->whereJabatan('kepala kanwil');
        })->get();
        $jenis_ketetapan_all = Referensi::select('id', 'nama as name')->where(
            'kategori',
            'jenis-ketetapan',
        )->get();
        $dasar_pemrosesan_all = Referensi::select('id', 'nama as name')->where(
            'kategori',
            'dasar-pemrosesan',
        )->get();
        $pk_all = User::whereHas('detail', function ($query) use ($user) {
            $query
                ->whereJabatan('penelaah keberatan')
                ->whereUnitOrganisasiId($user->detail->unit_organisasi_id);
        })->get();

        return inertia('PermohonanKEBNKEB/Preview', [
            'permohonan' => $permohonan,
            'kpp_all' => $kpp_all,
            'jenis_permohonan_all' => $jenis_permohonan_all,
            'unit_yang_memproses_all' => $unit_yang_memproses_all,
            'jenis_ketetapan_all' => $jenis_ketetapan_all,
            'dasar_pemrosesan_all' => $dasar_pemrosesan_all,
            'pk_all' => $pk_all,
        ]);
    }

    public function edit($id)
    {
        $permohonan = Permohonan::find($id);
        $user = User::with('detail')->find(auth()->user()->id);
        $kpp_all = Kpp::select(['id', 'nama as name'])->orderBy('kode_kpp', 'asc')->get();
        $jenis_permohonan_all = JenisPermohonan::select(['id', 'nama as name'])->get();
        $unit_yang_memproses_all = User::select(['id', 'name'])->whereHas('detail', function ($query) {
            $query->whereJabatan('kepala kanwil');
        })->get();
        $jenis_ketetapan_all = Referensi::select('id', 'nama as name')->where(
            'kategori',
            'jenis-ketetapan',
        )->get();
        $dasar_pemrosesan_all = Referensi::select('id', 'nama as name')->where(
            'kategori',
            'dasar-pemrosesan',
        )->get();
        $pk_all = User::whereHas('detail', function ($query) use ($user) {
            $query
                ->whereJabatan('penelaah keberatan')
                ->whereUnitOrganisasiId($user->detail->unit_organisasi_id);
        })->get();

        return inertia('PermohonanKEBNKEB/Edit', [
            'permohonan' => $permohonan,
            'kpp_all' => $kpp_all,
            'jenis_permohonan_all' => $jenis_permohonan_all,
            'unit_yang_memproses_all' => $unit_yang_memproses_all,
            'jenis_ketetapan_all' => $jenis_ketetapan_all,
            'dasar_pemrosesan_all' => $dasar_pemrosesan_all,
            'pk_all' => $pk_all,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama_wp' => ['required'],
            'npwp' => ['required', new NPWPFormat],
            'nop' => ['nullable', new NOPFormat],
            'kode_kpp_terdaftar' => ['required'],
            'jenis_permohonan' => ['required'],
            'unit_yang_memproses' => ['required'],
            'jenis_ketetapan' => ['required'],
            'nomor_ketetapan' => ['required', new NoKetetapanFormat],
            'tanggal_ketetapan' => ['required'],
            'tanggal_kirim_ketetapan' => ['required'],
            'jenis_pajak' => ['required'],
            'masa_pajak' => ['required'],
            'tahun_pajak' => ['required', 'min:4', 'max:4'],
            'mata_uang' => ['required'],
            'nilai_1' => ['required'],
            'nilai_2' => ['required'],
            'nilai_3' => ['required'],
            'nilai_4' => ['required'],
            'dasar_pemrosesan' => ['required'],
            'nomor_surat_wp' => ['required'],
            'tanggal_surat_wp' => ['required'],
            'nomor_lpad' => ['required'],
            'tanggal_diterima' => ['required'],
            'no_surat_pengantar_kpp' => ['required'],
            'tanggal_surat_pengantar' => ['required'],
            'tanggal_pengiriman_kpp' => ['required'],
            'nomor_surat_tugas' => ['required'],
            'tanggal_surat_tugas' => ['required'],
            'no_matriks' => ['required'],
            'tanggal_matriks' => ['required'],
            'nama_pk' => ['required'],
            'nomor_surat_tugas_2' => ['nullable'],
            'tanggal_surat_tugas_2' => ['nullable'],
            'nama_pk_2' => ['nullable'],
        ]);

        $tanggal_berakhir = $this->getTanggalBerakhir($request->tanggal_diterima, $request->jenis_permohonan);

        $data = [
            'nama_wp' => $request->nama_wp,
            'npwp' => $request->npwp,
            'nop' => $request->nop != null ? $request->nop : null,
            'kode_kpp_terdaftar' => $request->kode_kpp_terdaftar,
            'jenis_permohonan' => $request->jenis_permohonan,
            'unit_yang_memproses' => $request->unit_yang_memproses,
            'jenis_pajak' => $request->jenis_pajak,
            'masa_pajak' => $request->masa_pajak,
            'tahun_pajak' => $request->tahun_pajak,
            'mata_uang' => $request->mata_uang,
            'jenis_ketetapan' => $request->jenis_ketetapan,
            'nomor_ketetapan' => $request->nomor_ketetapan,
            'tanggal_ketetapan' => $request->tanggal_ketetapan,
            'tanggal_kirim_ketetapan' => $request->tanggal_kirim_ketetapan,
            'nilai_1' => str_replace('.', '', $request->nilai_1),
            'nilai_2' => str_replace('.', '', $request->nilai_2),
            'nilai_3' => str_replace('.', '', $request->nilai_3),
            'nilai_4' => str_replace('.', '', $request->nilai_4),
            'dasar_pemrosesan' => $request->dasar_pemrosesan,
            'nomor_surat_wp' => $request->nomor_surat_wp,
            'tanggal_surat_wp' => $request->tanggal_surat_wp,
            'nomor_lpad' => $request->nomor_lpad,
            'tanggal_diterima' => $request->tanggal_diterima,
            'tanggal_berakhir' => $tanggal_berakhir,
            'no_surat_pengantar_kpp' => $request->no_surat_pengantar_kpp,
            'tanggal_surat_pengantar' => $request->tanggal_surat_pengantar,
            'tanggal_pengiriman_kpp' => $request->tanggal_pengiriman_kpp,
            'nomor_surat_tugas' => $request->nomor_surat_tugas,
            'tanggal_surat_tugas' => $request->tanggal_surat_tugas,
            'nama_pk' => $request->nama_pk,
            'no_matriks' => $request->no_matriks,
            'tanggal_matriks' => $request->tanggal_matriks,
            'nomor_surat_tugas_2' => $request->nomor_surat_tugas_2 ?? null,
            'tanggal_surat_tugas_2' => $request->tanggal_surat_tugas_2 ?? null,
            'nama_pk_2' => $request->nama_pk_2 ?? null,
            'pembuat' => auth()->user()->id,
        ];

        $data = Permohonan::where('id', $id)->update($data);
        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('permohonan-keb-nkeb.index'));
    }

    public function delete($id)
    {
        Permohonan::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return Inertia::location(route('permohonan-keb-nkeb.index'));
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
