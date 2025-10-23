<?php

use App\Http\Controllers\Api\PizzaController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainController::class, 'index']);
Route::post('/api/v1/setCookiePizza', [PizzaController::class, 'setCookie']);
Route::get('/api/v1/getCookiePizza', [PizzaController::class, 'getCookie']);