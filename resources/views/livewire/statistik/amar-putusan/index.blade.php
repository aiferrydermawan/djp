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
                            <th>Amar Keputusan</th>
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
                            </tr>
                        @endforeach

                        <tr>
                            <td class="font-bold">Total</td>
                            @foreach ($jenisPermohonan as $jenis)
                                <td class="font-bold">
                                    <?php
                                    $totalPasal = 0;
                                    foreach ($statistics as $stat) {
                                        if (isset($stat->$jenis)) {
                                            $totalPasal += $stat->$jenis;
                                        }
                                    }
                                    echo $totalPasal;
                                    ?>
                                </td>
                            @endforeach
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
