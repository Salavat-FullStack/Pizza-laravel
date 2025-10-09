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

        $pizza = Pizza::query()->find(1);
        $pizza2 = $pizza->ingredients->toArray();
        $pizzaThickness = $pizza->thicknesses->toArray();

        dump($pizza->toArray());
        dump($pizza2);
        dump($pizzaThickness);

        return view('main', [
            'filter' => $filter,
            'sorting' => $sorting
        ]);
    }
}
