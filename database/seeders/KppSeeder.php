<?php

namespace Database\Seeders;

use App\Models\Kpp;
use Faker\Factory;
use Illuminate\Database\Seeder;

class KppSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (range(101, 200) as $item) {
            $fake = Factory::create('id_ID');
            Kpp::create([
                'kode_kpp' => $item,
                'nama' => 'KPP Pratama '.$fake->firstNameMale(),
            ]);
        }
    }
}
