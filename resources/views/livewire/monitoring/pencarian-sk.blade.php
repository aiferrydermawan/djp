<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Pencarian SK</li>
        </ul>
    </div>
    <div class="mt-5 flex">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="Nomor LPAD / NPWP"
            class="input input-bordered w-full max-w-xs"
        />
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama WP</th>
                            <th>Nomor Surat WP</th>
                            <th>Jenis Permohonan</th>
                            <th>Nomor Ketetapan</th>
                            <th>Tanggal diterima</th>
                            <th>PK</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($permohonan_all as $key => $item)
                            <tr wire:key="{{ $item->id }}">
                                <th>
                                    {{ $permohonan_all->firstItem() + $key }}
                                </th>
                                <td>{{ $item->nama_wp }}</td>
                                <td>{{ $item->nomor_surat_wp }}</td>
                                <td>{{ $item->jenisPermohonan->nama }}</td>
                                <td>{{ $item->nomor_ketetapan }}</td>
                                <td>{{ $item->tanggal_lpad }}</td>
                                <td>
                                    @if ($item->penelaahKeberatan2)
                                        {{ $item->penelaahKeberatan2->name }}
                                    @else
                                        {{ $item->penelaahKeberatan->name }}
                                    @endif
                                </td>
                                <td>
                                    @if ($item->dataPengiriman)
                                        Selesai
                                    @else
                                            -
                                    @endif
                                </td>
                                <td>
                                    <a
                                        href="{{ route("permohonan-keb-nkeb.preview", $item->id) }}"
                                        class="btn btn-xs"
                                    >
                                        DetailPermohonan
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="{{ route("data-keputusan.preview", $item->id) }}"
                                        class="btn btn-xs"
                                    >
                                        DetailKeputusan
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            {{ $permohonan_all->links() }}
        </div>
    </div>
</div>
