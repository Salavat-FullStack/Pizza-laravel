<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pizza_sizes', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('pizza_id');

            $table->foreign('pizza_id')
                  ->references('id')
                  ->on('pizzas')
                  ->onDelete('cascade');

            $table->decimal('price', 8, 2);
            $table->decimal('size', 8, 2);
            $table->string('thickness');
            $table->decimal('weight', 8, 2);
            $table->decimal('calories', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pizza_sizes');
    }
};
