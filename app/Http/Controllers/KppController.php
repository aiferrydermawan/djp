<?php

namespace App\Http\Controllers;

use App\Models\Kpp;
use Illuminate\Http\Request;

class KppController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kpp_all = Kpp::latest()->paginate(10);

        return inertia('Kpp/Index', [
            'kpp_all' => $kpp_all,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Kpp/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'kode_kpp' => ['required', 'integer'],
            'nama' => ['required'],
        ]);

        Kpp::create([
            'kode_kpp' => $request->kode_kpp,
            'nama' => $request->nama,
        ]);

        session()->flash('success', 'Data berhasil dibuat');

        return to_route('kpp.index');
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
        $kpp = Kpp::find($id);

        return inertia('Kpp/Edit', [
            'kpp' => $kpp,
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

        Kpp::where('id', $id)->update([
            'kode_kpp' => $request->kode_kpp,
            'nama' => $request->nama,
        ]);

        session()->flash('success', 'Data berhasil diubah');

        return to_route('kpp.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Kpp::where('id', $id)->delete();

        session()->flash('success', 'Data berhasil dihapus');

        return to_route('kpp.index');
    }
}
