<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permintaan extends Model
{
    use HasFactory;

    const CREATED_AT = 'dibuat';

    const UPDATED_AT = 'diubah';

    protected $table = 'permintaan';

    protected $guarded = [];

    public function penelaahKeberatan()
    {
        return $this->belongsTo(User::class, 'pk_id', 'id');
    }

    public function suratJawaban()
    {
        return $this->hasOne(SuratJawaban::class, 'permintaan_id');
    }

    public function pengiriman()
    {
        return $this->hasOne(Pengiriman::class, 'permintaan_id');
    }

    public function getSisaWaktuAttribute()
    {
        $sekarang = Carbon::now();
        $tanggalBerakhir = Carbon::parse($this->tanggal_berakhir);
        $sisa_waktu = $sekarang->diffInDays($tanggalBerakhir, false);

        return $sisa_waktu.' Hari';
    }

    public function getSisaWaktuValueAttribute()
    {
        $sekarang = Carbon::now();
        $tanggalBerakhir = Carbon::parse($this->tanggal_berakhir);
        return $sekarang->diffInDays($tanggalBerakhir, false);
    }
}
