<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Penyelesaian Permohonan</li>
        </ul>
    </div>

    <div class="mb-4 flex justify-between">
        <div>
            <label class="text-sm">Filter Tahun Berkas:</label>
            <select wire:model.live="tahunSuratTugas" class="select select-bordered max-w-xs">
                <option value="">Semua Tahun</option>
                @foreach ($listTahun as $tahun)
                    <option value="{{ $tahun }}">{{ $tahun }}</option>
                @endforeach
            </select>
        </div>
        <a class="btn btn-primary" href="{{ route('penyelesaian-permohonan.index') }}">Tambah</a>
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
                    <th>Total Permohonan</th>
                </tr>
                </thead>
                <tbody>
                @if ($tahunSuratTugas)
                    @foreach (['Keberatan', 'Non Keberatan', 'SUB', 'STG'] as $kategori)
                        <tr>
                            <td>{{ $kategori }}</td>
                            <td>{{ $data[$kategori]['saldo_awal'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['masuk'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['selesai'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['saldo_akhir'] ?? 0 }}</td>
                            <td>{{ $data[$kategori]['total_permohonan'] ?? 0 }}</td>
                        </tr>
                    @endforeach
                    <tr class="font-bold">
                        <td>Jumlah</td>
                        <td>{{ $total['saldo_awal'] ?? 0 }}</td>
                        <td>{{ $total['masuk'] ?? 0 }}</td>
                        <td>{{ $total['selesai'] ?? 0 }}</td>
                        <td>{{ $total['saldo_akhir'] ?? 0 }}</td>
                        <td>{{ $total['total_permohonan'] ?? 0 }}</td>
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
