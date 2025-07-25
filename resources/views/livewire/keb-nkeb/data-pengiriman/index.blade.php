<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Data Pengiriman</li>
        </ul>
    </div>
    <div class="mt-5 flex gap-5">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="Nomor LPAD / NPWP / Nama WP"
            class="input input-bordered w-full max-w-xs"
        />
        <select
            wire:model.live="status"
            class="select select-bordered w-full max-w-xs"
        >
            <option value="pending">Pending</option>
            <option value="selesai">Selesai</option>
        </select>
        <select wire:model.live="nama_pk" class="select select-bordered w-full max-w-xs">
            <option value="">Nama PK</option>
            @foreach($nama_pk_all as $item)
                <option value="{{ $item->id }}">{{ $item->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>No LPAD</th>
                            <th>Tanggal Diterima</th>
                            <th>Nama WP</th>
                            <th>NPWP</th>
                            <th>Jenis Permohonan</th>
                            <th>Masa Pajak</th>
                            <th>Tahun Pajak</th>
                            <th>Nomor Ketetapan</th>
                            <th>Pelaksana</th>
                            <th>Sisa Waktu</th>
                            <th>Data Pengiriman</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($permohonan_all as $key => $item)
                            <tr wire:key="{{ $item->id }}">
                                <th>
                                    {{ $permohonan_all->firstItem() + $key }}
                                </th>
                                <td>{{ $item->nomor_lpad }}</td>
                                <td>{{ $item->tanggal_lpad }}</td>
                                <td>{{ $item->nama_wp }}</td>
                                <td>{{ $item->npwp }}</td>
                                <td>{{ $item->jenisPermohonan->nama }}</td>
                                <td>{{ $item->masa_pajak }}</td>
                                <td>{{ $item->tahun_pajak }}</td>
                                <td>{{ $item->nomor_ketetapan }}</td>
                                <td>{{ $item->pelaksana->name }}</td>
                                <td>{{ $item->sisa_waktu }}</td>
                                <td>
                                    {{ $item->dataPengiriman ? "Selesai" : "Pending" }}
                                </td>
                                <td>
                                    <a
                                        class="btn btn-warning btn-xs mr-1"
                                        href="{{ route("data-pengiriman.edit", $item->id) }}"
                                    >
                                        Edit
                                    </a>
                                </td>
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
