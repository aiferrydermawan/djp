<?php

namespace Database\Seeders;

use App\Models\Referensi;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ReferensiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = [
            'amar-putusan', // Done
            'alasan', // lorem3
            'jenis-permohonan', //
            'dasar-pemrosesan',
            'pemenuhan-kriteria',
            'unit-organisasi',
            'jenis-ketetapan',
        ];
        // Amar Putusan
        foreach (range(1, 10) as $number) {
            $fake = Factory::create('id_ID');
            Referensi::create([
                'nama' => $fake->words(2, true),
                'kategori' => 'amar-putusan',
            ]);
        }
        // Alasan
        foreach (range(1, 10) as $number) {
            $fake = Factory::create('id_ID');
            Referensi::create([
                'nama' => $fake->words(3, true),
                'kategori' => 'alasan',
            ]);
        }

        // Dasar Pemrosesan
        foreach (range(1, 10) as $number) {
            $fake = Factory::create('id_ID');
            Referensi::create([
                'nama' => $fake->words(1, true),
                'kategori' => 'dasar-pemrosesan',
            ]);
        }

        // Pemenuhan Kriteria
        foreach (range(1, 10) as $number) {
            $fake = Factory::create('id_ID');
            Referensi::create([
                'nama' => $fake->words(5, true),
                'kategori' => 'pemenuhan-kriteria',
            ]);
        }

        // Unit Organisasi
        foreach (range(1, 2) as $number) {
            $fake = Factory::create('id_ID');
            Referensi::create([
                'nama' => 'Unit Organisasi '.$number,
                'kategori' => 'unit-organisasi',
            ]);
        }

        $ketetapan = ['SKP', 'STP', 'SPPT'];
        foreach ($ketetapan as $item) {
            Referensi::create([
                'nama' => $item,
                'kategori' => 'jenis-ketetapan',
            ]);
        }
    }
}
