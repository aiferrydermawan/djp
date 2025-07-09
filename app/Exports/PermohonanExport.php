<?php

namespace App\Exports;

use App\Models\Permohonan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PermohonanExport implements FromCollection, WithHeadings
{
    protected $tahun;

    public function __construct($tahun = null)
    {
        $this->tahun = $tahun;
    }

    public function collection()
    {
        $query = Permohonan::with(['jenisPermohonan','penelaahKeberatan','dataKeputusan','dataPengiriman']);

        if ($this->tahun) {
            $query->where('tahun_berkas', $this->tahun);
        }

        return $query->get()->map(function ($item) {
            return [
                $item->nama_wp,
                $item->npwp,
                $item->kpp_terdaftar,
                $item->kategori_permohonan,
                $item->jenisPermohonan->nama ?? '-',
                $item->masa_pajak,
                $item->tahun_pajak,
                $item->jenis_pajak,
                $item->jenis_ketetapan,
                $item->nomor_ketetapan,
                $item->tanggal_ketetapan,
                $item->nilai_1,
                $item->dasar_pemrosesan,
                $item->nomor_surat_wp,
                $item->tanggal_surat_wp,
                $item->nomor_lpad,
                $item->tanggal_diterima,
                $item->tanggal_berakhir,
                $item->no_surat_pengantar_kpp,
                $item->tanggal_surat_pengantar,
                $item->nomor_surat_tugas,
                $item->tanggal_surat_tugas,
                $item->penelaahKeberatan->name ?? '-', // asumsi nama_pk relasi ke user
                $item->tahun_berkas,

                // Tambahan dari relasi dataKeputusan
                $item->dataKeputusan->nomor_laporan ?? '-',
                $item->dataKeputusan->tanggal_laporan ?? '-',
                $item->dataKeputusan->no_keputusan ?? '-',
                $item->dataKeputusan->tanggal_keputusan ?? '-',
                $item->dataKeputusan->amarPutusan->nama ?? '-', // pastikan relasi amarPutusan() ada

                // Tambahan dari relasi dataPengiriman
                $item->dataPengiriman->tanggal_resi_wp ?? '-',

                // Tambahan nilai keputusan
                $item->dataKeputusan->nilai_akhir_menurut_keputusan ?? '-',
            ];
        });
    }

    public function headings(): array
    {
        return [
            'nama_wp',
            'npwp',
            'kpp_terdaftar',
            'kategori_permohonan',
            'jenis_permohonan',
            'masa_pajak',
            'tahun_pajak',
            'jenis_pajak',
            'jenis_ketetapan',
            'nomor_ketetapan',
            'tanggal_ketetapan',
            'nilai_1',
            'dasar_pemrosesan',
            'nomor_surat_wp',
            'tanggal_surat_wp',
            'nomor_lpad',
            'tanggal_diterima',
            'tanggal_berakhir',
            'no_surat_pengantar_kpp',
            'tanggal_surat_pengantar',
            'nomor_surat_tugas',
            'tanggal_surat_tugas',
            'nama_pk',
            'tahun_berkas',
            'no_laporan', // dari dataKeputusan
            'tgl_laporan', // dari dataKeputusan
            'no_keputusan', // dari dataKeputusan
            'tgl_keputusan', // dari dataKeputusan
            'amar_putusan', // dari dataKeputusan
            'tgl_kirim_ke_wp', // dari dataPengiriman
            'nilai_akhir_menurut_keputusan', // dari dataKeputusan
        ];
    }
}
