<div class="main_filter_block">
    <h2>Все пиццы</h2>

    <div class="filter_contain">
        <div class="filter_panel">
            @foreach($filter as $filt)
                <div class="filtr_btn">{{ $filt['name'] }}</div>
            @endforeach
            <div class="more_filter_btn">
                Ёще <img src="{{ asset('images/icons/Vector.png') }}" alt="more">
            </div>
        </div>
        <div class="sorting_panel" data-sorting='@json($sorting)'>
            <img src="{{ asset('images/icons/sorting.png') }}" alt="sorting">
            Сортировка:
            <div class="sorting_text"></div>
        </div>
        <div class="drop_menu display_none"></div>

    </div>
</div>