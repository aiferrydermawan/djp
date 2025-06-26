<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Surat Jawaban</li>
        </ul>
    </div>
    <div class="mt-5">
        <div class="flex gap-4">
            <input
                wire:model.lazy="search"
                type="text"
                placeholder="Cari"
                class="input input-bordered w-1/3"
            />
            <select wire:model.live="tahun_berkas" class="select select-bordered w-1/3">
                <option value="">Semua Tahun</option>
                @foreach($tahun_berkas_all as $key => $item)
                    <option value="{{ $item->tahun_berkas }}">{{ $item->tahun_berkas }}</option>
                @endforeach
            </select>
            <select wire:model.live="nama_pk" class="select select-bordered w-1/3">
                <option value="">Nama PK</option>
                @foreach($nama_pk_all as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                @endforeach
            </select>
            <select
                wire:model.live="status"
                class="select select-bordered w-full max-w-xs"
            >
                <option value="pending">Pending</option>
                <option value="selesai">Selesai</option>
            </select>
        </div>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <table class="table table-xs">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>NOMOR SURAT PP</th>
                        <th>TGL SURAT PP</th>
                        <th>NOMOR SENGKETA</th>
                        <th>NPWP</th>
                        <th>NAMA WAJIB PAJAK</th>
                        <th>NAMA PK</th>
                        <th>SEKSI PK</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($permintaan as $key => $item)
                        <tr wire:key="{{ $item->id }}">
                            <th>{{ $permintaan->firstItem() + $key }}</th>
                            <th>{{ $item->nomor_surat_pp }}</th>
                            <th>{{ $item->tgl_surat_pp }}</th>
                            <th>{{ $item->nomor_sengketa }}</th>
                            <th>{{ $item->npwp }}</th>
                            <th>{{ $item->nama_wajib_pajak }}</th>
                            <th>
                                {{ $item->penelaahKeberatan->name }}
                            </th>
                            <th>
                                {{ $item->penelaahKeberatan->detail->organisasi->nama }}
                            </th>
                            <th>
                                {{ $item->suratJawaban ? "Done" : "Pending" }}
                            </th>
                            <th>
                                <a
                                    class="btn btn-warning btn-xs"
                                    href="{{ route("surat-jawaban.edit", $item->id) }}"
                                >
                                    Edit
                                </a>
                            </th>
                        </tr>
                    @endforeach

                    @if (count($permintaan) == 0)
                        <tr>
                            <th colspan="10">Kosong</th>
                        </tr>
                    @endif
                </tbody>
            </table>
            {{ $permintaan->links() }}
        </div>
    </div>
</div>
