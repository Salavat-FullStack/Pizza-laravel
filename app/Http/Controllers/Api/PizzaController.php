<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pizzas = Pizza::paginate(9);
        return response()->json($pizzas, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function selectPizza(Request $request)
    {
        $pizza = Pizza::find($request->id);

        if (!$pizza) {
            return response()->json(['error' => 'Пицца не найдена'], 404);
        }

        // $quantity = (int)$request->quantity;
        // $finalPrice = $pizza->price * $quantity;

        // ✅ Сохраняем данные во временное хранилище (сессию)
        session([
            'selected_pizza' => [$request]
        ]);

            // 'selected_pizza' => [
            //     'id' => $pizza->id,
            //     'name' => $pizza->name,
            //     'quantity' => $quantity,
            //     'final_price' => $finalPrice
            // ]

        // Отправляем фронту ссылку, куда перейти
        return response()->json([
            'redirect_url' => url("/pizza/{$pizza->id}")
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
