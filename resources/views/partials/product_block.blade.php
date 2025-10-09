<div class="product_block">


    @foreach ($pizzas as $pizza)
        @php
            $ingredients = $pizza->ingredients->pluck('name')->join(', ')
        @endphp
    @endforeach 


    @foreach ($pizzas as $pizza)
        <div class="product_card">
            <div class="img_container">
                <img class="product_card_img" src="{{ asset($pizza->image) }}" alt="image">
            </div>
            <div class="product_inform_container">
                <h3>{{ $pizza->name }}</h3>
                <div class="deacription">
                    {{ $ingredients }}
                </div>
            </div>
        </div>
    @endforeach
    
</div>