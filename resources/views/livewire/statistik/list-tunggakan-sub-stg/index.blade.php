<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>List Tunggakan SUB dan STG</li>
        </ul>
    </div>
    <div class="mt-5 flex gap-4">
        <input
            wire:model.lazy="search"
            type="text"
            placeholder="No Surat PP / Nama WP"
            class="input input-bordered w-full max-w-xs"
        />
        <select wire:model.live="tahun_berkas" class="select select-bordered w-full max-w-xs">
            <option value="">Tahun Berkas</option>
            @foreach($tahun_berkas_all as $item)
                <option value="{{ $item->tahun_berkas }}">{{ $item->tahun_berkas }}</option>
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
                            <th>NPWP</th>
                            <th>Nama Wajib Pajak</th>
                            <th>Nomor Surat PP</th>
                            <th>Tgl Surat PP</th>
                            <th>Tgl Resi PP</th>
                            <th>Tgl Diterima Kanwil</th>
                            <th>Jenis Sengketa</th>
                            <th>Nomor KEP/Surat yg dibanding/Gugat</th>
                            <th>Nama PK</th>
                            <th>Seksi PK</th>
                            <th>Sisa Waktu</th>
                            <th>Tanggal Berakhir</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach($permintaan as $index => $item)
                        <tr wire:key="item-{{ $item->id }}">
                            <th>{{ $permintaan->firstItem() + $index }}</th>
                            <td>{{ $item->npwp }}</td>
                            <td>{{ $item->nama_wajib_pajak }}</td>
                            <td>{{ $item->nomor_surat_pp }}</td>
                            <td>{{ $item->tgl_surat_pp }}</td>
                            <td>{{ $item->tgl_resi_pp }}</td>
                            <td>{{ $item->tgl_diterima_kanwil }}</td>
                            <td>{{ $item->jenis_sengketa }}</td>
                            <td>{{ $item->nomor_kep_surat_yang_di_banding_gugat }}</td>
                            <td>{{ $item->penelaahKeberatan->name }}</td>
                            <td>{{ $item->penelaahKeberatan->detail?->organisasi?->nama }}</td>
                            <td>{{ $item->sisa_waktu }}</td>
                            <td>{{ $item->tanggal_berakhir }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
            {{ $permintaan->links() }}
        </div>
    </div>
</div>
