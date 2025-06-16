<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenyelesaianPermohonan extends Model
{
    const CREATED_AT = 'dibuat';

    const UPDATED_AT = 'diubah';

    protected $table = 'penyelesaian_permohonan';

    protected $guarded = [];
}
