<?php

namespace App\Models;

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
}
