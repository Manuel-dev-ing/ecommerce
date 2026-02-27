<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => "Pedro ",
            'last_name' => "Sanches",
            'document_type' => "1",
            'document_number' => "12345678",
            'email' => "pedro@gmail.com",
            'phone' => "987654321",
            'password' => bcrypt('12345678'),
        ]);

        $this->call([
            FamilySeeder::class,
            OptionSeeder::class

        ]);

    }
}
