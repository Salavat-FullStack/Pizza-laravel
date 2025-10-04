<div class="main_filter_block">
    <h2>Все пиццы</h2>

    <div class="filter_contain">
        <div class="filter_panel">
            @foreach($categories as $category)
                <div class="filtr_btn">{{ $category }}</div>
            @endforeach
            <div class="more_filter_btn">
                Ёще <img src="{{ asset('images/icons/Vector.png') }}" alt="more">
            </div>
        </div>
        <div class="sorting_panel">
            <img src="{{ asset('images/icons/sorting.png') }}" alt="sorting">
            Сортировка:
            <div class="sorting_text">рейтингу</div>
        </div>
    </div>
</div>