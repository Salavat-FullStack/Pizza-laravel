<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePizzaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => 'required|integer',
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'finelPrice' => 'required|numeric',
            'size' => 'required|string',
            'weight' => 'required|string',
            'calories' => 'required|string',
            'quantity' => 'required|integer',
            'image' => 'required|string',
            'created_at' => 'nullable|date',
            'updated_at' => 'nullable|date',
            
            // массив ингредиентов (вложенные объекты)
            'ingredients' => 'array',
            'ingredients.*.id' => 'integer',
            'ingredients.*.name' => 'string',
            'ingredients.*.price' => 'numeric',
            'ingredients.*.description' => 'required|string',
            'ingredients.*.weight' => 'required|string',
            'ingredients.*.calories' => 'required|string',
            'ingredients.*.finelPrice' => 'required|numeric',
            'ingredients.*.quantity' => 'required|integer',
            
            // массив толщин
            'thicknesses' => 'array',
            'thicknesses.*.id' => 'integer',
            'thicknesses.*.pizza_id' => 'integer',
            'thicknesses.*.name' => 'string',
            'thicknesses.*.price' => 'numeric',
            'thicknesses.*.calories' => 'string',
            'thicknesses.*.thickness' => 'string',
        ];
    }
}
