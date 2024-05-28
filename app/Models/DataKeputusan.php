<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataKeputusan extends Model
{
    use HasFactory;

    const CREATED_AT = 'dibuat';

    const UPDATED_AT = 'diubah';

    protected $table = 'data_keputusan';

    protected $guarded = [];

    protected $primaryKey = 'permohonan_id';

    public $incrementing = false;

    public function permohonan()
    {
        return $this->belongsTo(Permohonan::class, 'permohonan_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'pembuat', 'id');
    }

    public function getTanggalKeputusan2Attribute()
    {
        return Carbon::parse($this->tanggal_keputusan)->format('d M Y');
    }

    public function amarPutusan()
    {
        return $this->belongsTo(Referensi::class, 'amar_keputusan_id', 'id');
    }
}
