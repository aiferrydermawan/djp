<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Statistik Amar Putusan</li>
        </ul>
    </div>
    <label class="form-control w-full">
        <div class="label">
            <span class="label-text">Tahun</span>
        </div>
        <select class="select select-bordered w-full" wire:model.live="tahun">
            @for ($i = 0; $i < 5; $i++)
                <option value="{{ $tahun - $i }}">{{ $tahun - $i }}</option>
            @endfor
        </select>
    </label>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th rowspan="2">Amar Keputusan</th>

                            <th colspan="{{ count($jenisPermohonan) }}">
                                Jenis Permohonan
                            </th>
                            <th rowspan="2">Jumlah SK Terbit</th>
                            <th rowspan="2">%</th>
                        </tr>
                        <tr>
                            @foreach ($jenisPermohonan as $jenis)
                                <th>{{ $jenis }}</th>
                            @endforeach
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($statistics as $stat)
                            <tr>
                                <td>{{ $stat->amar_putusan }}</td>
                                @foreach ($jenisPermohonan as $jenis)
                                    <td>
                                        {{ isset($stat->$jenis) ? $stat->$jenis : 0 }}
                                    </td>
                                @endforeach

                                <td>{{ $stat->total }}</td>
                                <td>
                                    {{ $grandTotal > 0 ? number_format(($stat->total / $grandTotal) * 100, 2) : 0 }}%
                                </td>
                            </tr>
                        @endforeach

                        <tr>
                            <td>Total</td>
                            @foreach ($totalPasal as $total)
                                <td>{{ $total }}</td>
                            @endforeach

                            <td>{{ $grandTotal }}</td>
                            <td>100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
