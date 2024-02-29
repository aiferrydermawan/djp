<?php

namespace Database\Seeders;

use App\Models\JenisPermohonan;
use Illuminate\Database\Seeder;

class JenisPermohonanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $iku['kuantitas'] = 3;
        $iku['kategori'] = 'bulan';
        $uu['kuantitas'] = 20;
        $uu['kategori'] = 'hari';
        $permohonan = ['KUP', 'PBB'];
        foreach (range(1, 10) as $number) {
            $rand = array_rand($permohonan);
            JenisPermohonan::create([
                'nama' => 'Pasal '.rand(1, 50).' '.$permohonan[$rand],
                'jatuh_tempo_iku' => json_encode($iku),
                'jatuh_tempo_uu' => json_encode($uu),
            ]);
        }
    }
}
