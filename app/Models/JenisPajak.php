<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPajak extends Model
{
    use HasFactory;

    const CREATED_AT = 'dibuat';

    const UPDATED_AT = 'diubah';

    protected $table = 'jenis_pajak';

    protected $guarded = [];

    public function ketetapan()
    {
        return $this->belongsTo(Referensi::class, 'jenis_ketetapan_id');
    }
}
