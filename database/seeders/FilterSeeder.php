<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FilterSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('filter')->insert([   
            ['name' => 'Все'],
            ['name' => 'Мясные'],
            ['name' => 'Острые'],
            ['name' => 'Сладкие'],
            ['name' => 'Вегетарианские'],
            ['name' => 'С курицей'],
        ]);
    }
}
