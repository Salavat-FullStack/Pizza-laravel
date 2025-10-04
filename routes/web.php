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
            'С курицей'
        ]
    ]);
});
