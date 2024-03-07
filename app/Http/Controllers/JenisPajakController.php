<?php

namespace App\Http\Controllers;

use App\Models\JenisPajak;
use App\Models\Referensi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisPajakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jenis_pajak_all = JenisPajak::with('ketetapan')->latest()->paginate(10);

        return inertia('JenisPajak/Index', [
            'jenis_pajak_all' => $jenis_pajak_all,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $jenis_ketetapan_all = Referensi::where('kategori', 'jenis-ketetapan')->get();

        return inertia('JenisPajak/Create', [
            'jenis_ketetapan_all' => $jenis_ketetapan_all,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'jenis_ketetapan' => ['required'],
            'kode' => ['required', 'integer'],
            'nama' => ['required'],
        ]);

        JenisPajak::create([
            'jenis_ketetapan_id' => $request->jenis_ketetapan,
            'kode' => $request->kode,
            'nama' => $request->nama,
        ]);

        session()->flash('success', 'Data berhasil dibuat');

        return Inertia::location(route('jenis-pajak.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $jenis_pajak = JenisPajak::find($id);
        $jenis_ketetapan_all = Referensi::where('kategori', 'jenis-ketetapan')->get();

        return inertia('JenisPajak/Edit', [
            'jenis_pajak' => $jenis_pajak,
            'jenis_ketetapan_all' => $jenis_ketetapan_all,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'jenis_ketetapan' => ['required'],
            'kode' => ['required', 'integer'],
            'nama' => ['required'],
        ]);

        JenisPajak::where('id', $id)->update([
            'jenis_ketetapan_id' => $request->jenis_ketetapan,
            'kode' => $request->kode,
            'nama' => $request->nama,
        ]);

        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('jenis-pajak.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        JenisPajak::where('id', $id)->delete();

        session()->flash('success', 'Data berhasil dihapus');

        return Inertia::location(route('jenis-pajak.index'));
    }
}
