<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permohonan extends Model
{
    use HasFactory;

    const CREATED_AT = 'dibuat';

    const UPDATED_AT = 'diubah';

    protected $table = 'permohonan';

    protected $guarded = [];

    public function jenisPermohonan()
    {
        return $this->belongsTo(JenisPermohonan::class, 'jenis_permohonan', 'id');
    }

    public function jenisPajak()
    {
        return $this->belongsTo(JenisPajak::class, 'jenis_pajak', 'id');
    }

    public function penelaahKeberatan()
    {
        return $this->belongsTo(User::class, 'nama_pk', 'id');
    }

    public function pelaksana()
    {
        return $this->belongsTo(User::class, 'pembuat', 'id');
    }

    public function penelitianFormal()
    {
        return $this->hasOne(PenelitianFormal::class, 'permohonan_id', 'id');
    }

    public function spidPembahasan()
    {
        return $this->hasOne(SpidPembahasan::class, 'permohonan_id', 'id');
    }

    public function spuh()
    {
        return $this->hasOne(Spuh::class, 'permohonan_id', 'id');
    }

    public function dataKeputusan()
    {
        return $this->hasOne(DataKeputusan::class, 'permohonan_id', 'id');
    }

    public function kriteriaPermohonan()
    {
        return $this->hasOne(KriteriaPermohonan::class, 'permohonan_id', 'id');
    }

    public function dataPengiriman()
    {
        return $this->hasOne(DataPengiriman::class, 'permohonan_id', 'id');
    }

    public function getTanggalLpadAttribute()
    {
        return Carbon::parse($this->tanggal_diterima)->format('d M Y');
    }

    public function getSisaWaktuAttribute()
    {
        $info = json_decode($this->jenisPermohonan->jatuh_tempo_iku, true);

        $kategori = $info['kategori'];
        $kuantitas = $info['kuantitas'];

        // Menghitung sisa waktu berdasarkan kategori dan kuantitas
        $tanggal_diterima = Carbon::parse($this->tanggal_diterima);
        switch ($kategori) {
            case 'hari':
                $sisa_waktu = $tanggal_diterima->addDays($kuantitas)->diffForHumans();
                break;
            case 'minggu':
                $sisa_waktu = $tanggal_diterima->addWeeks($kuantitas)->diffForHumans();
                break;
            case 'bulan':
                $sisa_waktu = $tanggal_diterima->addMonths($kuantitas)->diffForHumans();
                break;
            case 'tahun':
                $sisa_waktu = $tanggal_diterima->addYears($kuantitas)->diffForHumans();
                break;
            default:
                $sisa_waktu = 'Kategori tidak valid';
        }

        return $sisa_waktu;
    }
}
