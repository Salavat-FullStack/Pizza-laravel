<div class="main_filter_block">
    <h2>Все пиццы</h2>

    <div class="filter_panel">
        @foreach($categories as $category)
            <li>{{ $category }}</li>
        @endforeach
    </div>
</div>