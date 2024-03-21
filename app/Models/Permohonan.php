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

    public function penelaahKeberatan2()
    {
        return $this->belongsTo(User::class, 'nama_pk2', 'id');
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
        $sekarang = Carbon::now();
        $tanggalBerakhir = Carbon::parse($this->tanggal_berakhir);
        $sisa_waktu = $sekarang->diffInDays($tanggalBerakhir, false);

        return $sisa_waktu.' Hari';
    }

    public function formatWaktu($value)
    {
        return Carbon::parse($value)->format('d F Y');
    }
}
