<?php

use App\Http\Controllers\Api\PizzaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::apiResource('pizzas', PizzaController::class);
    Route::post('/pizzas/select', [PizzaController::class, 'selectPizza']);
    Route::get('/pizzas/selected', [PizzaController::class, 'getSelectedPizza']);
});