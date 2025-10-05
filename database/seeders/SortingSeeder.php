<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SortingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sortings')->insert([   
            ['name' => 'рейтингу'],
            ['name' => 'убывание цены'],
            ['name' => 'возрастание цены'],
            ['name' => 'убывание размера'],
            ['name' => 'возрастание размера']
        ]);
    }
}
