<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Jenis Permohonan</li>
        </ul>
    </div>
    <div class="mt-5 flex justify-between">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="Cari"
            class="input input-bordered w-full max-w-xs"
        />
        <a
            class="btn btn-primary"
            href="{{ route("jenis-permohonan.create") }}"
        >
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
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Jatuh Tempo IKU</th>
                            <th>Jatuh Tempo UU</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($jenis_permohonan_all as $key => $item)
                            <tr wire:key="{{ $item->id }}">
                                <th>
                                    {{ $jenis_permohonan_all->firstItem() + $key }}
                                </th>
                                <th>{{ $item->id }}</th>
                                <td>{{ $item->nama }}</td>
                                <td>{{ $item->jatuh_tempo_iku }}</td>
                                <td>{{ $item->jatuh_tempo_uu }}</td>
                                <td>
                                    <a
                                        class="btn btn-warning btn-xs mr-1"
                                        href="{{ route("jenis-permohonan.edit", $item->id) }}"
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

                        @if (count($jenis_permohonan_all) == 0)
                            <tr>
                                <th colspan="14">Kosong</th>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
            {{ $jenis_permohonan_all->links() }}
        </div>
    </div>
</div>
