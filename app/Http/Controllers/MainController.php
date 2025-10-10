<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use App\Models\Pizza;
use App\Models\Sorting;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){
        $filter = Filter::all()->toArray();
        $sorting = Sorting::all()->toArray();

        // $pizza = Pizza::query()->find(1);
        // $ingredients = $pizza->ingredients->toArray();
        // $pizzaThickness = $pizza->thicknesses->toArray();

        $pizzas = Pizza::with(['ingredients', 'thicknesses'])->get();

        foreach($pizzas as $pizza){
            $pizza->quantity = 1;
            $pizza->finelPrice = 0;
            $pizza->price = $pizza->ingredients->sum('price');

            foreach($pizza->ingredients as $el){
                $el->quantity = 1;
                $el->finelPrice = $el->price;
            }
        }

        return view('main', [
            'filter' => $filter,
            'sorting' => $sorting,
            'pizzas' => $pizzas
        ]);
    }
}
