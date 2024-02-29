<?php

namespace Database\Seeders;

use App\Models\JenisPajak;
use App\Models\Referensi;
use Faker\Factory;
use Illuminate\Database\Seeder;

class JenisPajakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ketetapans = ['SKP', 'STP', 'SPPT'];
        foreach (range(1, 100) as $item) {
            $fake = Factory::create('id_ID');
            $rand = array_rand($ketetapans);
            $ketetapan = Referensi::whereNama($ketetapans[$rand])->first();
            JenisPajak::create([
                'jenis_ketetapan_id' => $ketetapan->id,
                'kode' => $item + 100,
                'nama' => $fake->name(),
            ]);
        }
    }
}
