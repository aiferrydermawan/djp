<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Export Data</li>
        </ul>
    </div>
    <div class="mt-5 flex justify-between">
        <div class="grid grid-cols-2 gap-4">
{{--            <input--}}
{{--                wire:model.lazy="search"--}}
{{--                type="text"--}}
{{--                placeholder="Nomor LPAD / NPWP / Nama WP"--}}
{{--                class="input input-bordered w-full max-w-xs"--}}
{{--            />--}}
            <select wire:model.live="tahun_berkas" class="select select-bordered w-full max-w-xs">
                <option value="">Semua Tahun</option>
                @foreach($tahun_berkas_all as $item)
                    <option value="{{ $item->tahun_berkas }}">{{ $item->tahun_berkas }}</option>
                @endforeach
            </select>
{{--            <select wire:model.live="nama_pk" class="select select-bordered w-full max-w-xs">--}}
{{--                <option value="">Nama PK</option>--}}
{{--                @foreach($nama_pk_all as $item)--}}
{{--                    <option value="{{ $item->id }}">{{ $item->name }}</option>--}}
{{--                @endforeach--}}
{{--            </select>--}}
        </div>

        <div>
            <button
                class="btn btn-success"
                wire:click="export"
            >
                Export
            </button>
        </div>
    </div>
</div>
