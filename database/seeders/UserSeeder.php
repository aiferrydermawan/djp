<?php

namespace Database\Seeders;

use App\Models\Referensi;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $unit_organisasi = Referensi::whereKategori('unit-organisasi')->orderBy('nama', 'asc')->get();
        foreach (range(0, 10) as $item) {
            $user = User::create([
                'name' => 'user '.$item,
                'email' => 'user'.$item.'@example.com',
                'password' => Hash::make('password'),
            ]);
            switch ($item) {
                case 0:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'admin',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => null,
                    ]);
                    break;
                case 1:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'kepala kanwil',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => null,
                    ]);
                    break;
                case 2:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'kepala bidang',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => null,
                    ]);
                    break;
                case 3:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'kepala seksi',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[0]->id,
                    ]);
                    break;
                case 4:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'pelaksana',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[0]->id,
                    ]);
                    break;
                case 5:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'penelaah keberatan',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[0]->id,
                    ]);
                    break;
                case 6:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'penelaah keberatan',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[0]->id,
                    ]);
                    break;
                case 7:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'kepala seksi',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[1]->id,
                    ]);
                    break;
                case 8:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'pelaksana',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[1]->id,
                    ]);
                    break;
                case 9:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'penelaah keberatan',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[1]->id,
                    ]);
                    break;
                case 10:
                    $user->detail()->create([
                        'nip' => fake('id_ID')->nik(),
                        'ip' => fake()->numberBetween(100000000, 999999999),
                        'Jabatan' => 'penelaah keberatan',
                        'pangkat' => fake()->jobTitle(),
                        'unit_organisasi_id' => $unit_organisasi[1]->id,
                    ]);
                    break;

            }
        }
    }
}
