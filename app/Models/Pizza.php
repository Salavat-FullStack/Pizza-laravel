<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    protected $casts = [
        'price' => 'float',
        'size' => 'float',
        'weight' => 'float',
        'calories' => 'float',
    ];

    public function ingredients()   
    {
        return $this->belongsToMany(Ingredient::class, 'ingredient_pizza');
    }

    public function thicknesses()
    {
        return $this->hasMany(PizzaThickness::class);
    }
}
