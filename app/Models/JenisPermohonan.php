<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPermohonan extends Model
{
    use HasFactory;

    const CREATED_AT = 'dibuat';

    const UPDATED_AT = 'diubah';

    protected $table = 'jenis_permohonan';

    protected $guarded = [];

    protected $casts = [
        'jatuh_tempo_iku' => 'hashed',
    ];
}
