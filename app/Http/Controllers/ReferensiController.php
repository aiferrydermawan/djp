<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReferensiResource;
use App\Models\Referensi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReferensiController extends Controller
{
    public $loadDefault = 5;

    public function __construct()
    {
        $this->middleware('check.category');
    }

    public function index(Request $request)
    {
        $title = str_replace('-', ' ', $request->kategori);
        $kategori = $request->kategori;
        $query = Referensi::query();
        if ($request->search) {
            $query->where('nama', 'like', '%'.$request->search.'%');
        }
        $referensi_all = ReferensiResource::collection($query->whereKategori($request->kategori)
            ->latest()
            ->paginate(5));

        return inertia('Referensi/Index', [
            'title' => $title,
            'kategori' => $kategori,
            'referensi_all' => $referensi_all,
        ]);
    }

    public function create(Request $request)
    {
        $title = str_replace('-', ' ', $request->kategori);
        $kategori = $request->kategori;

        return inertia('Referensi/Create', [
            'title' => $title,
            'kategori' => $kategori,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => ['required'],
        ]);

        Referensi::create([
            'nama' => $request->nama,
            'kategori' => $request->kategori,
        ]);

        session()->flash('success', 'Data berhasil dibuat');

        return Inertia::location(route('referensi.index', ['kategori' => $request->kategori]));
    }

    public function edit(Request $request, $id)
    {
        $referensi = Referensi::find($id);
        $title = str_replace('-', ' ', $request->kategori);
        $kategori = $request->kategori;

        return inertia('Referensi/Edit', [
            'title' => $title,
            'kategori' => $kategori,
            'referensi' => $referensi,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => ['required'],
        ]);

        Referensi::where('id', $id)->update([
            'nama' => $request->nama,
        ]);

        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('referensi.index', ['kategori' => $request->kategori]));
    }

    public function destroy(Request $request, $id)
    {
        Referensi::where('id', $id)->delete();

        session()->flash('success', 'Data berhasil dihapus');

        return Inertia::location(route('referensi.index', ['kategori' => $request->kategori]));
    }
}
