<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Statistik Berkas Masuk/Selesai</li>
        </ul>
    </div>
    <div class="join">
        <a
            href="{{ route("berkas-masuk-selesai.masuk") }}"
            class="btn join-item"
        >
            Masuk
        </a>
        <a href="#" class="btn join-item" disabled>Selesai</a>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-zebra table-xs">
                    <thead>
                        <tr>
                            <th>KPP</th>
                            <th>Jenis Permohonan</th>
                            @for ($year = $yearStart; $year <= $yearNow; $year++)
                                <th>{{ $year }}</th>
                            @endfor
                        </tr>
                    </thead>
                    @php
                        $currentKPP = "";
                        $totalsPerKPP = [];
                    @endphp

                    @foreach ($permohonan_all as $row)
                        @if ($row->nama_kpp !== $currentKPP && $currentKPP !== "")
                            {{-- Menampilkan total untuk KPP sebelumnya --}}
                            <tr>
                                <td colspan="2">Total</td>
                                @for ($year = $yearStart; $year <= $yearNow; $year++)
                                    <td>
                                        {{ $totalsPerKPP[$currentKPP][$year] ?? 0 }}
                                    </td>
                                @endfor
                            </tr>
                            @php
                                // Reset total untuk KPP baru
                                $totalsPerKPP[$row->nama_kpp] = array_fill($yearStart, $yearNow - $yearStart + 1, 0);
                            @endphp
                        @endif

                        @if ($row->nama_kpp !== $currentKPP)
                            {{-- Mengatur ulang KPP saat ini dan mempersiapkan total untuk KPP baru --}}
                            @php
                                $currentKPP = $row->nama_kpp;
                                $totalsPerKPP[$currentKPP] = $totalsPerKPP[$currentKPP] ?? array_fill($yearStart, $yearNow - $yearStart + 1, 0);
                            @endphp
                        @endif

                        <tr>
                            <td>{{ $row->nama_kpp }}</td>
                            <td>{{ $row->nama_jenis_permohonan }}</td>
                            @for ($year = $yearStart; $year <= $yearNow; $year++)
                                @php
                                    $yearValue = $row->{$year};
                                    $totalsPerKPP[$currentKPP][$year] = ($totalsPerKPP[$currentKPP][$year] ?? 0) + $yearValue;
                                @endphp

                                <td>{{ $yearValue }}</td>
                            @endfor
                        </tr>
                    @endforeach

                    {{-- Menampilkan total untuk KPP terakhir --}}
                    @if ($currentKPP !== "")
                        <tr>
                            <td colspan="2">Total</td>
                            @for ($year = $yearStart; $year <= $yearNow; $year++)
                                <td>
                                    {{ $totalsPerKPP[$currentKPP][$year] }}
                                </td>
                            @endfor
                        </tr>
                    @endif

                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
</div>
