<?php

namespace App\Http\Controllers;

use App\Models\Referensi;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('detail')->latest()->paginate(10);

        return inertia('Pegawai/PenelaahKeberatan', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $unit_organisasi_all = Referensi::where('kategori', 'unit-organisasi')->get();

        return inertia('Pegawai/Create', [
            'unit_organisasi_all' => $unit_organisasi_all,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'unique:users'],
            'password' => ['required'],
            'nip' => ['required', 'unique:user_details'],
            'ip' => ['required', 'unique:user_details', 'min:9'],
            'jabatan' => ['required'],
            'pangkat' => ['required'],
            'unit_organisasi' => ['nullable'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        UserDetail::create([
            'user_id' => $user->id,
            'nip' => $request->nip,
            'ip' => $request->ip,
            'jabatan' => $request->jabatan,
            'pangkat' => $request->pangkat,
            'unit_organisasi_id' => $request->unit_organisasi != null ? $request->unit_organisasi : null,
        ]);

        session()->flash('success', 'Data berhasil dibuat');

        return Inertia::location(route('pegawai.index'));
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
        $user = User::with('detail')->find($id);
        $unit_organisasi_all = Referensi::where('kategori', 'unit-organisasi')->get();

        return inertia('Pegawai/Edit', [
            'user' => $user,
            'unit_organisasi_all' => $unit_organisasi_all,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email',
                'lowercase',
                Rule::unique('users')->ignore($id), ],
            'nip' => ['required', Rule::unique('user_details', 'nip')->ignore($id, 'user_id')],
            'ip' => ['required', Rule::unique('user_details', 'ip')->ignore($id, 'user_id')],
            'jabatan' => ['required'],
            'pangkat' => ['required'],
            'unit_organisasi' => ['nullable'],
        ]);

        User::where('id', $id)->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        UserDetail::where('user_id', $id)->update([
            'nip' => $request->nip,
            'ip' => $request->ip,
            'jabatan' => $request->jabatan,
            'pangkat' => $request->pangkat,
            'unit_organisasi_id' => $request->unit_organisasi != null ? $request->unit_organisasi : null,
        ]);

        session()->flash('success', 'Data berhasil diubah');

        return Inertia::location(route('pegawai.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::where('id', $id)->delete();

        session()->flash('success', 'Data berhasil dihapus');

        return to_route('pegawai.index');
    }
}
