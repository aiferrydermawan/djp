<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>
                <a href="{{ route("permohonan-keb-nkeb.index") }}">
                    Permohonan Keb dan Non Keb
                </a>
            </li>
            <li>Import</li>
        </ul>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <form wire:submit="save">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Permohonan File .csv</span>
                    </div>
                    <input
                        wire:model="permohonan_file"
                        type="file"
                        class="file-input file-input-bordered w-full"
                    />
                    @error("permohonan_file")
                        <div class="label">
                            <span class="label-text-alt text-error">
                                {{ $message }}
                            </span>
                        </div>
                    @enderror
                </label>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">
                        Upload
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
