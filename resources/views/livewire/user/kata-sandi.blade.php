<div class="p-5">
    <div class="breadcrumbs text-sm">
        <ul>
            <li>Kata Sandi</li>
        </ul>
    </div>
    <div class="card mt-5 bg-base-100 shadow">
        <div class="card-body">
            <div class="card-title">Ubah Kata Sandi</div>
            <form wire:submit="change">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Kata Sandi Lama</span>
                    </div>
                    <input
                        type="password"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        wire:model="old_password"
                    />
                    @error("old_password")
                        <div class="label">
                            <span class="label-text-alt text-error">
                                {{ $message }}
                            </span>
                        </div>
                    @enderror
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Kata Sandi</span>
                    </div>
                    <input
                        type="password"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        wire:model="password"
                    />
                    @error("password")
                        <div class="label">
                            <span class="label-text-alt text-error">
                                {{ $message }}
                            </span>
                        </div>
                    @enderror
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Ulangi Kata Sandi</span>
                    </div>
                    <input
                        type="password"
                        placeholder="Type here"
                        class="input input-bordered w-full"
                        wire:model="password_confirmation"
                    />
                    @error("password_confirmation")
                        <div class="label">
                            <span class="label-text-alt text-error">
                                {{ $message }}
                            </span>
                        </div>
                    @enderror
                </label>
                <button type="submit" class="btn btn-primary mt-5">Ubah</button>
            </form>
        </div>
    </div>
</div>
