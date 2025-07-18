<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Rata-Rata Waktu Penyelesaian Per PK</li>
        </ul>
    </div>

    <div class="mb-4">
        <label class="text-sm">Filter Tahun Berkas:</label>
        <select wire:model.live="tahunSuratTugas" class="select select-bordered max-w-xs">
            <option value="">Semua Tahun</option>
            @foreach ($listTahun as $tahun)
                <option value="{{ $tahun }}">{{ $tahun }}</option>
            @endforeach
        </select>
    </div>

    <div class="flex items-center gap-2 mb-2">
        <button class="btn btn-sm btn-outline" wire:click="selectAllAmarKeputusan">Pilih Semua</button>
        <button class="btn btn-sm btn-outline" wire:click="resetAmarKeputusan">Hapus Semua</button>
    </div>


    <!-- Filter Amar Putusan (Checkbox) -->
    <div class="mb-4">
        <label class="text-sm">Filter Amar Putusan:</label>
        <div class="flex flex-wrap gap-4">
            @foreach ($amarPutusanAll as $amarPutusan)
                <label class="flex items-center">
                    <input
                        type="checkbox"
                        wire:model.live="selectedAmarKeputusan"
                        value="{{ $amarPutusan->id }}"
                        class="checkbox checkbox-sm"
                    />
                    <span class="ml-2">{{ $amarPutusan->nama }}</span>
                </label>
            @endforeach
        </div>
    </div>

    @foreach ([['Non Keberatan', $nonKeberatan], ['Keberatan', $keberatan]] as [$judul, $data])
        <div class="card mt-5 bg-base-100 shadow">
            <div class="card-body">
                <div class="card-title">{{ $judul }}</div>
                <div class="overflow-x-auto">
                    <table class="table table-xs">
                        <thead>
                        <tr>
                            <th rowspan="2">Nama PK</th>
                            <th colspan="{{ count($jenisPermohonanList) }}">Jenis Permohonan</th>
                            <th rowspan="2">Rata-Rata Penyelesaian (hari)</th>
                        </tr>
                        <tr>
                            @foreach ($jenisPermohonanList as $namaJenis)
                                <th>{{ $namaJenis }}</th>
                            @endforeach
                        </tr>
                        </thead>
                        <tbody>
                        @forelse ($data as $row)
                            <tr>
                                <td>{{ $row['nama'] }}</td>
                                @foreach ($jenisPermohonanList as $namaJenis)
                                    <td>{{ $row['jenis'][$namaJenis] ?? 0 }}</td>
                                @endforeach
                                <td>{{ $row['total'] }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="{{ count($jenisPermohonanList) + 2 }}" class="text-center text-gray-500">Tidak ada data</td>
                            </tr>
                        @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    @endforeach
</div>
