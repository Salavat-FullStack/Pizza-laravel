<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('main',[
        'categories' => [
            'Все',
            'Мясные',
            'Острые',
            'Сладкие',
            'Вегетарианские',
            'С курицей',
            'С ананасами',
            '4 мяса',
            'Tets',
            // 'Tets',
            // 'Tets',
            // 'Tets',
            // 'Tets'
        ]
    ]);
});
