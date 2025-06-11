<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Rata-Rata Waktu Penyelesaian Per PK</li>
        </ul>
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
                            <th rowspan="2">Rata-Rata Total</th>
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
