<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use App\Models\Sorting;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){
        $filter = Filter::all()->toArray();
        $sorting = Sorting::all()->toArray();

        return view('main', [
            'filter' => $filter,
            'sorting' => $sorting
        ]);
    }
}
