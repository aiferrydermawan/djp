<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Pegawai</li>
        </ul>
    </div>
    @if (session()->has('success'))
        <div class="alert alert-success my-3">{{ session('success') }}</div>
    @endif


@if ($showPasswordModal)
        <dialog class="modal modal-open">
            <div class="modal-box">
                <h3 class="font-bold text-lg mb-3">Ganti Password</h3>

                <input
                    type="password"
                    wire:model.defer="newPassword"
                    class="input input-bordered w-full mb-3"
                    placeholder="Password baru"
                />
                @error('newPassword') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror

                <div class="modal-action">
                    <button class="btn" wire:click="$set('showPasswordModal', false)">Batal</button>
                    <button class="btn btn-primary" wire:click="updatePassword">Simpan</button>
                </div>
            </div>
        </dialog>
    @endif

    <div class="mt-5 flex justify-between">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="Cari"
            class="input input-bordered w-full max-w-xs"
        />
        <a class="btn btn-primary" href="{{ route("pegawai.create") }}">
            Buat
        </a>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>IP</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users as $key => $item)
                            <tr wire:key="{{ $item->id }}">
                                <th>{{ $users->firstItem() + $key }}</th>
                                <td>{{ $item->name }}</td>
                                <td>{{ $item->detail->ip }}</td>
                                <td>
                                    <button
                                        class="btn btn-info btn-xs mr-1"
                                        wire:click="openPasswordModal({{ $item->id }})"
                                    >
                                        Ganti Password
                                    </button>
                                    <a
                                        class="btn btn-warning btn-xs mr-1"
                                        href="{{ route("pegawai.edit", $item->id) }}"
                                    >
                                        Edit
                                    </a>
                                    <button
                                        class="btn btn-error btn-xs"
                                        wire:click="delete({{ $item->id }})"
                                        wire:confirm="Apakah Anda Yakin?"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        @endforeach

                        @if (count($users) == 0)
                            <tr>
                                <th colspan="14">Kosong</th>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
            {{ $users->links() }}
        </div>
    </div>
</div>
