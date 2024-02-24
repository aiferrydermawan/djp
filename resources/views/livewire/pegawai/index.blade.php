<div class="p-5">
    <div class="text-sm breadcrumbs">
        <ul>
            <li>Pegawai</li>
        </ul>
    </div>
    <div class="flex justify-between mt-5">
        <input wire:model.lazy="search" type="text" placeholder="Cari"
               class="input input-bordered w-full max-w-xs"/>
        <a class="btn btn-primary" href="{{ route('pegawai.create') }}">Buat</a>
    </div>
    <div class="card bg-base-100 shadow mt-5">
        <div class="card-body">
            <div class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($users as $key => $item)
                        <tr wire:key="{{ $item->id }}">
                            <th>{{ $users->firstItem() + $key }}</th>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->email }}</td>
                            <td>
                                <a class="btn btn-xs btn-warning mr-1"
                                   href="{{ route('pegawai.edit',$item->id) }}">Edit</a>
                                <button class="btn btn-xs btn-error" wire:click="delete({{ $item->id }})"
                                        wire:confirm="Apakah Anda Yakin?">Delete
                                </button>
                            </td>
                        </tr>
                    @endforeach
                    @if(count($users) == 0)
                        <tr>
                            <th colspan="14">Kosong</th>
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
            {{ $users->links() }}
        </div>
    </div>
</div>
