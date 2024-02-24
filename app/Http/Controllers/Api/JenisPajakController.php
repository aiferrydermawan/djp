<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JenisPajak;
use Illuminate\Http\Request;

class JenisPajakController extends Controller
{
    public function index(Request $request)
    {
        $jenisKetetapanId = $request->query('jenis_ketetapan_id');

        if ($jenisKetetapanId) {
            $jenisPajakAll = JenisPajak::select('id', 'nama as name')->where('jenis_ketetapan_id', $jenisKetetapanId)->get();
        } else {
            $jenisPajakAll = [];
        }

        return response()->json($jenisPajakAll);
    }
}
