<div class="p-5">
    <div class="text-sm breadcrumbs">
        <ul>
            <li>KPP</li>
        </ul>
    </div>
    <div class="flex justify-between mt-5">
        <input wire:model.lazy="search" type="text" placeholder="Cari"
               class="input input-bordered w-full max-w-xs"/>
        <a class="btn btn-primary" href="{{ route('kpp.create') }}">Buat</a>
    </div>
    <div class="card bg-base-100 shadow mt-5">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Dibuat</th>
                        <th>Diubah</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($kpp_all as $key => $item)
                        <tr wire:key="{{ $item->id }}">
                            <th>{{ $kpp_all->firstItem() + $key }}</th>
                            <td>{{ $item->kode_kpp }}</td>
                            <td>{{ $item->nama }}</td>
                            <td>{{ $item->dibuat }}</td>
                            <td>{{ $item->diubah }}</td>
                            <td>
                                <a class="btn btn-xs btn-warning mr-1"
                                   href="{{ route('kpp.edit',$item->id) }}">Edit</a>
                                <button class="btn btn-xs btn-error" wire:click="delete({{ $item->id }})"
                                        wire:confirm="Apakah Anda Yakin?">Delete
                                </button>
                            </td>
                        </tr>
                    @endforeach
                    @if(count($kpp_all) == 0)
                        <tr>
                            <th colspan="14">Kosong</th>
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
            {{ $kpp_all->links() }}
        </div>
    </div>
</div>
