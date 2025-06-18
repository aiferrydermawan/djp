<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetAdminPassword extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reset:admin-password';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset password semua admin ke "password"';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $adminUserIds = DB::table('user_details')
            ->where('jabatan', 'admin')
            ->pluck('user_id');

        if ($adminUserIds->isEmpty()) {
            $this->info('Tidak ada admin yang ditemukan.');
            return;
        }

        $updated = DB::table('users')
            ->whereIn('id', $adminUserIds)
            ->update([
                'password' => Hash::make('password'),
            ]);

        $this->info("Berhasil mereset password {$updated} admin menjadi 'password'.");
    }
}
