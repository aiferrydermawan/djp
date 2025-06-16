<div class="p-4">
    <a class="btn btn-error" href="{{ route('monitoring.penyelesaian-permohonan') }}">Kembali</a>
    <button class="btn btn-primary mb-4" wire:click="openModal">+ Tambah</button>
    <div class="card bg-base-100 shadow">
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th>Uraian</th>
                    <th>Tahun Berkas</th>
                    <th>Saldo Awal</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                @foreach($items as $item)
                    <tr>
                        <td>{{ $item->uraian }}</td>
                        <td>{{ $item->tahun_berkas }}</td>
                        <td>{{ number_format($item->saldo_awal) }}</td>
                        <td>
                            <button class="btn btn-xs btn-warning" wire:click="openModal({{ $item->id }})">Edit</button>
                            <button class="btn btn-xs btn-error" wire:click="delete({{ $item->id }})" onclick="return confirm('Yakin hapus?')">Hapus</button>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>

    {{ $items->links() }}

    @if($isModalOpen)
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded shadow-xl w-full max-w-md">
                <h2 class="text-xl font-bold mb-4">{{ $editMode ? 'Edit' : 'Tambah' }} Data</h2>

                <form wire:submit.prevent="save">
                    <div class="mb-4">
                        <label class="label">Uraian</label>
                        <select wire:model="uraian" class="select select-bordered w-full">
                            <option value="">Pilih</option>
                            <option value="Keberatan">Keberatan</option>
                            <option value="Non Keberatan">Non Keberatan</option>
                            <option value="SUB">SUB</option>
                            <option value="STG">STG</option>
                        </select>
                        @error('uraian') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
                    </div>

                    <div class="mb-4">
                        <label class="label">Tahun Berkas</label>
                        <input type="number" wire:model="tahun_berkas" class="input input-bordered w-full" />
                        @error('tahun_berkas') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
                    </div>

                    <div class="mb-4">
                        <label class="label">Saldo Awal</label>
                        <input type="number" wire:model="saldo_awal" class="input input-bordered w-full" />
                        @error('saldo_awal') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
                    </div>

                    <div class="flex justify-end space-x-2">
                        <button type="button" class="btn" wire:click="closeModal">Batal</button>
                        <button type="submit" class="btn btn-primary">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    @endif
</div>
