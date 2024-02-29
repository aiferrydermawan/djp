<?php

namespace Database\Seeders;

use App\Models\JenisPajak;
use App\Models\JenisPermohonan;
use App\Models\Kpp;
use App\Models\Permohonan;
use App\Models\Referensi;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class PermohonanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kpp = Kpp::inRandomOrder()->first();
        $jenis_permohonan = JenisPermohonan::inRandomOrder()->first();
        $kanwil = User::whereHas('detail', function ($query) {
            $query->whereJabatan('kepala kanwil');
        })->inRandomOrder()->first();
        $jenis_pajak = JenisPajak::inRandomOrder()->first();
        $jenis_ketetapan = Referensi::where(
            'kategori',
            'jenis-ketetapan',
        )->inRandomOrder()->first();
        $dasar_pemrosesan = Referensi::where(
            'kategori',
            'dasar-pemrosesan',
        )->inRandomOrder()->first();
        foreach (range(1, 20) as $item) {
            Permohonan::create([
                'nama_wp' => fake()->name,
                'npwp' => fake()->numerify('###############'),
                'nop' => fake()->numerify('######'),
                'kode_kpp_terdaftar' => $kpp->id,
                'jenis_permohonan' => $jenis_permohonan->id,
                'unit_yang_memproses' => $kanwil->id,
                'jenis_pajak' => $jenis_pajak->id,
                'masa_pajak' => Arr::random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
                'tahun_pajak' => Arr::random([2020, 2021, 2022, 2023, 2024]),
                'mata_uang' => Arr::random(['rupiah', 'dollar']),
                'jenis_ketetapan' => $jenis_ketetapan->id,
                'nomor_ketetapan' => fake()->randomNumber(7, true),
                'tanggal_ketetapan' => fake()->date,
                'tanggal_kirim_ketetapan' => fake()->date,
                'nilai_1' => fake()->randomNumber(6, true),
                'nilai_2' => fake()->randomNumber(6, true),
                'nilai_3' => fake()->randomNumber(6, true),
                'nilai_4' => fake()->randomNumber(6, true),
                'dasar_pemrosesan' => $dasar_pemrosesan->id,
                'nomor_surat_wp' => fake()->numerify('wp-####'),
                'tanggal_surat_wp' => fake()->date,
                'nomor_lpad' => 'lpad-'.fake()->randomNumber(5, true),
                'tanggal_diterima' => fake()->date,
                'no_surat_pengantar_kpp' => fake()->numerify('kpp-####'),
                'tanggal_surat_pengantar' => fake()->date,
                'tanggal_pengiriman_kpp' => fake()->date,
                'nomor_surat_tugas' => fake()->numerify('tugas-####'),
                'tanggal_surat_tugas' => fake()->date,
                'nama_pk' => 6,
                'no_matriks' => fake()->randomNumber(9, true),
                'tanggal_matriks' => fake()->date,
                'nomor_surat_tugas_2' => null,
                'tanggal_surat_tugas_2' => null,
                'nama_pk_2' => null,
                'pembuat' => 5,
            ]);
        }
    }
}
