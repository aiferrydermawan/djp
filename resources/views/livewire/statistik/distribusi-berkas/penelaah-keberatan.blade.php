<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Distribusi Berkas</li>
        </ul>
    </div>
    <div class="flex mt-4 gap-5">
        <div class="join">
            <a
                href="{{ route("distribusi-berkas.penelaah-keberatan") }}"
                class="btn btn-primary join-item"
            >
                PK
            </a>
            <a href="{{ route("distribusi-berkas.seksi") }}" class="btn join-item">
                Seksi
            </a>
        </div>
        <select wire:model.live="filterTahun" class="select select-bordered">
            <option value="">Semua Tahun</option>
            @foreach(range(2020, now()->year) as $year)
                <option value="{{ $year }}">{{ $year }}</option>
            @endforeach
        </select>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th rowspan="2">Penelaah Keberatan</th>
                        <th colspan="{{ count($allJenisPermohonan) }}">
                            Jenis Permohonan
                        </th>
                        <th rowspan="2">Berkas Masuk</th>
                        <th rowspan="2">Berkas Selesai</th>
                        <th rowspan="2">Jumlah Tunggakan</th>
                    </tr>
                    <tr>
                        @foreach ($allJenisPermohonan as $jenisPermohonan)
                            <th>{{ $jenisPermohonan->nama }}</th>
                        @endforeach
                    </tr>
                </thead>
                <tbody>
                    @foreach ($results as $result)
                        <tr class="hover">
                            <th>{{ $result["Nama Penelaah Keberatan"] }}</th>
                            @foreach ($allJenisPermohonan as $jenisPermohonan)
                                <td>
                                    {{ $result["Jenis Permohonan"][$jenisPermohonan->nama] }}
                                </td>
                            @endforeach

                            <td>{{ $result["Berkas Masuk"] }}</td>
                            <td>{{ $result["Berkas Selesai"] }}</td>
                            <td>{{ $result["Jumlah Tunggakan"] }}</td>
                            <td>{{ $result["Persentase Selesai"] }}%</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
