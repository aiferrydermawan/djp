<?php

namespace App\Http\Controllers;

use App\Models\JenisPermohonan;
use Illuminate\Http\Request;

class JenisPermohonanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $permohonan_all = JenisPermohonan::latest()->paginate(10);

        return inertia('JenisPermohonan/Index', [
            'permohonan_all' => $permohonan_all,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('JenisPermohonan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => ['required'],
            'jatuh_tempo_iku' => ['nullable'],
            'jatuh_tempo_uu' => ['nullable'],
        ]);

        JenisPermohonan::create([
            'nama' => $request->nama,
            'jatuh_tempo_iku' => $request->jatuh_tempo_iku ? json_encode($request->jatuh_tempo_iku) : null,
            'jatuh_tempo_uu' => $request->jatuh_tempo_uu ? json_encode($request->jatuh_tempo_uu) : null,
        ]);

        session()->flash('success', 'Data berhasil dibuat');

        return to_route('jenis-permohonan.index');
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
        $data = JenisPermohonan::find($id);

        return inertia('JenisPermohonan/Edit', [
            'jenis_permohonan' => $data,
            'nama' => $data->nama,
            'dataIKU' => $data->jatuh_tempo_iku ? json_decode($data->jatuh_tempo_iku, true) : null,
            'dataUU' => $data->jatuh_tempo_uu ? json_decode($data->jatuh_tempo_uu, true) : null,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'kode_kpp' => ['required', 'integer'],
            'nama' => ['required'],
        ]);

        JenisPermohonan::where('id', $id)->update([
            'kode_kpp' => $request->kode_kpp,
            'nama' => $request->nama,
        ]);

        session()->flash('success', 'Data berhasil diubah');

        return to_route('jenis-permohonan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        JenisPermohonan::where('id', $id)->delete();

        session()->flash('success', 'Data berhasil dihapus');

        return to_route('jenis-permohonan.index');
    }
}
