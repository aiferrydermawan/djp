<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Monitoring Jatuh Tempo Berkas</li>
        </ul>
    </div>
    <div class="mt-5 flex gap-4">
        <select wire:model.live="filterTahun" class="select select-bordered max-w-xs">
            <option value="">Semua Tahun</option>
            @foreach($tahun_all as $item)
                <option value="{{ $item }}">{{ $item }}</option>
            @endforeach
        </select>
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
                            <th>No LPAD</th>
                            <th>Tgl Diterima</th>
                            <th>NPWP</th>
                            <th>Nama WP</th>
                            <th>Jenis Kasus</th>
                            <th>No Ketetapan</th>
                            <th>Tanggal Ketetapan</th>
                            <th>Masa Pajak</th>
                            <th>Tahun Pajak</th>
                            <th>NIlai RP</th>
                            <th>Nama PK</th>
                            <th>Seksi PK</th>
                            <th>JT IKU</th>
                            <th>Sisa Waktu</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($permohonan_all as $key => $item)
                            <tr wire:key="{{ $item->id }}">
                                <td>
                                    {{ $permohonan_all->firstItem() + $key }}
                                </td>
                                <td>{{ $item->nomor_lpad }}</td>
                                <td>{{ $item->tanggal_lpad }}</td>
                                <td>{{ $item->npwp }}</td>
                                <td>{{ $item->nama_wp }}</td>
                                <td>{{ $item->jenisPermohonan->nama ?? '-' }}</td>
                                <td>{{ $item->nomor_ketetapan }}</td>
                                <td>
                                    {{ \Carbon\Carbon::parse($item->tanggal_ketetapan)->format("d M Y") }}
                                </td>
                                <td>{{ $item->masa_pajak }}</td>
                                <td>{{ $item->tahun_pajak }}</td>
                                <td>
                                    {{ $item->dataKeputusan ? number_format($item->dataKeputusan->nilai_akhir_menurut_keputusan) : "0" }}
                                </td>
                                <td>
                                    @if ($item->penelaahKeberatan2)
                                        {{ $item->penelaahKeberatan2->name }}
                                    @else
                                        {{ $item->penelaahKeberatan->name }}
                                    @endif
                                </td>
                                <td>
                                    @if ($item->penelaahKeberatan2)
                                        {{ $item->penelaahKeberatan2->detail->organisasi->nama ?? "-" }}
                                    @else
                                        {{ $item->penelaahKeberatan->detail->organisasi->nama ?? "-" }}
                                    @endif
                                </td>
                                <td>
                                    {{ \Carbon\Carbon::parse($item->tanggal_berakhir)->format("d M Y") }}
                                </td>
                                <td>{{ $item->sisa_waktu }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            {{ $permohonan_all->links() }}
        </div>
    </div>
</div>
