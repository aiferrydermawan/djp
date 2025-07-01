<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>List Tunggakan KEB dan NKEB</li>
        </ul>
    </div>
    <div class="mt-5 flex gap-2">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="Nomor LPAD / NPWP"
            class="input input-bordered w-full max-w-xs"
        />
        <!-- Filter Unit Organisasi untuk pelaksana dan kepala bidang -->
        @if(in_array(auth()->user()->detail->jabatan, ['pelaksana', 'kepala bidang']))
            <div>
                <select wire:model.live="selectedUnitOrganisasi" class="input input-bordered w-full max-w-xs">
                    <option value="">-- Pilih Unit Organisasi --</option>
                    @foreach ($unit_organisasi_list as $unit)
                        <option value="{{ $unit->id }}">{{ $unit->nama }}</option>
                    @endforeach
                </select>
            </div>
        @endif
    </div>
    <div class="flex mt-4 gap-4">
        <select wire:model.live="tahun_berkas" class="select select-bordered w-full max-w-xs">
            <option value="">Tahun Berkas</option>
            @foreach($tahun_berkas_all as $item)
                <option value="{{ $item->tahun_berkas }}">{{ $item->tahun_berkas }}</option>
            @endforeach
        </select>
        <select wire:model.live="jenis_permohonan" class="select select-bordered w-full max-w-xs">
            <option value="">Jenis Permohonan</option>
            @foreach($jenis_permohonan_all as $item)
                <option value="{{ $item->id }}">{{ $item->nama }}</option>
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
                        <th>Tanggal LPAD</th>
                        <th>Nama WP</th>
                        <th>NPWP</th>
                        <th>Jenis Permohonan</th>
                        <th>Jenis Pajak</th>
                        <th>Masa Pajak</th>
                        <th>Tahun Pajak</th>
                        <th>Nomor Ketetapan</th>
                        <th>Pelaksana</th>
                        <th>PK</th>
                        <th>Sisa Waktu</th>
                        <th>Tanggal Berakhir</th>
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
                            <td>{{ $item->jenisPermohonan->nama ?? '-' }}</td>
                            <td>{{ $item->jenisPajak->nama ?? '-' }}</td>
                            <td>{{ $item->masa_pajak }}</td>
                            <td>{{ $item->tahun_pajak }}</td>
                            <td>{{ $item->nomor_ketetapan }}</td>
                            <td>{{ $item->pelaksana->name ?? '-' }}</td>
                            <td>
                                @if ($item->penelaahKeberatan2)
                                    {{ $item->penelaahKeberatan2->name }}
                                @else
                                    {{ $item->penelaahKeberatan->name }}
                                @endif
                            </td>
                            <td>{{ $item->sisa_waktu }}</td>
                            <td>{{ $item->tanggal_berakhir }}</td>
                            <td></td>
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
