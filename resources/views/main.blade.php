<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite([
        'resources/css/nav.css',
        'resources/js/nav.js',
        'resources/css/filtr.block.css',
        'resources/css/main.css',
        'resources/css/product_card.css',
        'resources/js/filter.block.js',
        'resources/js/sorting.js',
        'resources/js/product_card.js'
    ])
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Next Pizza</title>
</head>
<body>
    <div class="main_container">
        @include('partials.nav')
        @include('partials.filtr')
        @include('partials.product_block')
    </div>
</body>
</html>