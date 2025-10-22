<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

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
        $pizzaId = $request->id;
        $quantity = $request->quantity ?? 1;

        Cookie::queue('selected_pizza', json_encode([
            'id' => $pizzaId,
            'quantity' => $quantity
        ]), 0);

        return response()->json([
            'message' => 'Пицца сохранена в cookie'
        ]);
    }

    public function getSelectedPizza(Request $request)
    {
        $selectedPizza = $request->cookie('selected_pizza');

        if (!$selectedPizza) {
            return response()->json([
                'message' => 'Нет выбранной пиццы'
            ]);
        }

        return response()->json([
            'selected_pizza' => json_decode($selectedPizza, true)
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
