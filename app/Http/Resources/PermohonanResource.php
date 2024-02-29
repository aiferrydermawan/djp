<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PermohonanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $tanggalDiterima = Carbon::parse($this->tanggal_diterima);
        $tanggalBerakhir = Carbon::parse($this->tanggal_berakhir);
        $sisa_waktu = $tanggalDiterima->diffInHours($tanggalBerakhir);

        return [
            'id' => $this->id,
            'nomor_lpad' => $this->nomor_lpad,
            'tanggal_lpad' => Carbon::parse($this->tanggal_diterima)->format('d M Y'),
            'nama_wp' => $this->nama_wp,
            'npwp' => $this->npwp,
            'jenis_permohonan' => $this->jenisPermohonan->nama,
            'jenis_pajak' => $this->jenisPajak->nama,
            'masa_pajak' => $this->masa_pajak,
            'tahun_pajak' => $this->tahun_pajak,
            'nomor_ketetapan' => $this->nomor_ketetapan,
            'pelaksana' => $this->pelaksana->name,
            'seksi_pelaksana' => $this->pelaksana->detail->organisasi->nama,
            'penelaah_keberatan' => $this->penelaahKeberatan->name,
            'seksi_penelaah_keberatan' => $this->penelaahKeberatan->detail->organisasi->nama,
            'sisa_waktu' => $sisa_waktu,
            'status_penelitian_formal' => $this->penelitianFormal ? $this->penelitianFormal->status : 'Pending',
            'status_spid_pembahasan' => $this->spidPembahasan ? 'Selesai' : 'Pending',
            'status_spuh' => $this->spuh ? 'Selesai' : 'Pending',
            'status_data_keputusan' => $this->dataKeputusan ? 'Selesai' : 'Pending',
            'status_kriteria_permohonan' => $this->kriteriaPermohonan ? 'Selesai' : 'Pending',
            'status_data_pengiriman' => $this->dataPengiriman ? 'Selesai' : 'Pending',
        ];
    }
}
