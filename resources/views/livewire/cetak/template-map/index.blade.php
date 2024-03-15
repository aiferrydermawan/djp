<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Template MAP</li>
        </ul>
    </div>
    <label class="form-control w-full max-w-xs">
        <div class="label">
            <span class="label-text">Filter By</span>
        </div>
        <select wire:model.live="filter" class="select select-bordered">
            <option value="1">NPWP</option>
            <option value="2">Tanggal Dibuat</option>
        </select>
    </label>
    @if ($filter == 1)
        <div class="mt-5 flex justify-between">
            <input
                wire:model.lazy="search"
                type="text"
                placeholder="Cari NPWP"
                class="input input-bordered w-full max-w-xs"
            />
            @if ($search)
                <form action="{{ route("template-map.npwp") }}" method="post">
                    @csrf
                    <input type="hidden" name="search" value="{{ $search }}" />
                    <button
                        type="submit"
                        class="btn btn-primary"
                        wire:loading.attr="disabled"
                    >
                        Print: {{ $search }}
                    </button>
                </form>
            @endif
        </div>
    @endif

    @if ($filter == 2)
        <form action="{{ route("template-map.tanggal") }}" method="post">
            @csrf
            <div class="mt-5 flex items-end gap-3">
                <label class="form-control w-1/3">
                    <div class="label">
                        <span class="label-text">Mulai</span>
                    </div>
                    <input
                        type="date"
                        name="start"
                        wire:model.live="start"
                        class="input input-bordered w-full"
                    />
                </label>
                <label class="form-control w-1/3">
                    <div class="label">
                        <span class="label-text">Akhir</span>
                    </div>
                    <input
                        type="date"
                        name="end"
                        wire:model.live="end"
                        class="input input-bordered w-full"
                    />
                </label>
                <div>
                    <button type="submit" class="btn btn-primary">Cetak</button>
                </div>
            </div>
        </form>
    @endif

    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama WP</th>
                            <th>NPWP</th>
                            <th>NOP</th>
                            <th>Jenis Permohonan</th>
                            <th>Jenis Pajak</th>
                            <th>Tahun Pajak</th>
                            <th>Nomor Ketetapan</th>
                            <th>Tanggal Ketetapan</th>
                            <th>Tanggal Diterima KPP</th>
                            <th>PK/NIP</th>
                            <th>Nomor ST</th>
                            <th>Tanggal ST</th>
                            <th>No Matrik</th>
                            <th>Tanggal Matrik</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($permohonan_all as $key => $item)
                            <tr wire:key="{{ $item->id }}">
                                <th>
                                    {{ $permohonan_all->firstItem() + $key }}
                                </th>
                                <td>{{ $item->nama_wp }}</td>
                                <td>{{ $item->npwp }}</td>
                                <td>{{ $item->nop ?? "-" }}</td>
                                <td>{{ $item->jenisPermohonan->nama }}</td>
                                <td>{{ $item->jenisPajak->nama }}</td>
                                <td>{{ $item->tahun_pajak }}</td>
                                <td>{{ $item->nomor_ketetapan }}</td>
                                <td>{{ $item->tanggal_ketetapan }}</td>
                                <td>{{ $item->tanggal_diterima }}</td>
                                <td>
                                    {{ $item->pelaksana->name }} /
                                    {{ $item->pelaksana->detail->nip }}
                                </td>
                                <td>{{ $item->nomor_surat_tugas }}</td>
                                <td>{{ $item->tanggal_surat_tugas }}</td>
                                <td>{{ $item->no_matriks }}</td>
                                <td>{{ $item->tanggal_matriks }}</td>
                            </tr>
                        @endforeach

                        @if (count($permohonan_all) == 0)
                            <tr>
                                <th colspan="14">Kosong</th>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
            {{ $permohonan_all->links() }}
        </div>
    </div>
</div>
