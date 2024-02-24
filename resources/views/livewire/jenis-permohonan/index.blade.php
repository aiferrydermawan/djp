<div class="p-5">
    <div class="text-sm breadcrumbs">
        <ul>
            <li>Jenis Pajak</li>
        </ul>
    </div>
    <div class="flex justify-between mt-5">
        <input wire:model.lazy="search" type="text" placeholder="Cari"
               class="input input-bordered w-full max-w-xs"/>
        <a class="btn btn-primary" href="{{ route('jenis-permohonan.create') }}">Buat</a>
    </div>
    <div class="card bg-base-100 shadow mt-5">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Jatuh Tempo IKU</th>
                        <th>Jatuh Tempo UU</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($jenis_permohonan_all as $key => $item)
                        <tr wire:key="{{ $item->id }}">
                            <th>{{ $jenis_permohonan_all->firstItem() + $key }}</th>
                            <td>{{ $item->nama }}</td>
                            <td>{{ $item->jatuh_tempo_iku }}</td>
                            <td>{{ $item->jatuh_tempo_uu }}</td>
                            <td>
                                <a class="btn btn-xs btn-warning mr-1"
                                   href="{{ route('jenis-permohonan.edit',$item->id) }}">Edit</a>
                                <button class="btn btn-xs btn-error" wire:click="delete({{ $item->id }})"
                                        wire:confirm="Apakah Anda Yakin?">Delete
                                </button>
                            </td>
                        </tr>
                    @endforeach
                    @if(count($jenis_permohonan_all) == 0)
                        <tr>
                            <th colspan="14">Kosong</th>
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
            {{ $jenis_permohonan_all->links() }}
        </div>
    </div>
</div>
