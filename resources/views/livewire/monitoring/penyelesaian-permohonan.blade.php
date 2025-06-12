<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Penyelesaian Permohonan</li>
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

    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="card-title"></div>
            <table class="table">
                <thead>
                <tr>
                    <th>Uraian</th>
                    <th>Saldo Awal</th>
                    <th>Permohonan Masuk Tahun Ini</th>
                    <th>Selesai</th>
                    <th>Saldo Akhir</th>
                </tr>
                </thead>
                <tbody>
                @if ($tahunSuratTugas)
                    @foreach (['Keberatan', 'Non Keberatan'] as $kategori)
                        <tr>
                            <td>{{ $kategori }}</td>
                            <td>{{ $data[$kategori]['saldo_awal'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['masuk'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['selesai'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['saldo_akhir'] ?? 0 }}</td>
                        </tr>
                    @endforeach
                    <tr class="font-bold">
                        <td>Jumlah</td>
                        <td>{{ $total['saldo_awal'] }}</td>
                        <td>{{ $total['masuk'] }}</td>
                        <td>{{ $total['selesai'] }}</td>
                        <td>{{ $total['saldo_akhir'] }}</td>
                    </tr>
                @else
                    <tr>
                        <td colspan="5" class="text-center text-sm text-gray-500">Silakan pilih tahun terlebih dahulu</td>
                    </tr>
                @endif

                </tbody>
            </table>
        </div>
    </div>
</div>
