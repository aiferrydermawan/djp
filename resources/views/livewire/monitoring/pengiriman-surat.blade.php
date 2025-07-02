<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Monitoring Pengiriman KEP/Surat</li>
        </ul>
    </div>
    <div class="mt-5 flex">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="Nomor LPAD / NPWP / Nama WP"
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
                            <th>NPWP</th>
                            <th>Jenis Permohonan</th>
                            <th>Nomor Ketetapan</th>
                            <th>Tgl Ketetapan</th>
                            <th>Nomor LPAD</th>
                            <th>Tgl LPAD</th>
                            <th>Nomor Keputusan</th>
                            <th>Tgl Keputusan</th>
                            <th>Tgl Kirim SK</th>
                            <th>No Resi WP</th>
                            <th>No Resi KPP</th>
                            <th>Amar Putusan</th>
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
                                <td>{{ $item->jenisPermohonan->nama }}</td>
                                <td>{{ $item->nomor_ketetapan }}</td>
                                <td>
                                    {{ \Carbon\Carbon::parse($item->tanggal_ketetapan)->format("d M Y") }}
                                </td>
                                <td>{{ $item->nomor_lpad }}</td>
                                <td>{{ $item->tanggal_lpad }}</td>
                                <td>
                                    {{ $item->dataKeputusan->no_keputusan ?? "-" }}
                                </td>
                                <td>
                                    {{ $item->dataKeputusan->tanggal_keputusan2 ?? "-" }}
                                </td>
                                <td>
                                    {{ \Carbon\Carbon::parse($item->dataPengiriman->tanggal_resi_wp)->format("d M Y") }}
                                </td>
                                <td>
                                    {{ $item->dataPengiriman->nomor_resi_wp ?? "-" }}
                                </td>
                                <td>
                                    {{ $item->dataPengiriman->nomor_resi_kpp ?? "-" }}
                                </td>
                                <td>
                                    {{ $item->dataKeputusan->amarPutusan->nama ?? "-" }}
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
