<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite([
        'resources/css/nav.css',
        'resources/js/nav.js',
        'resources/css/main.css',
        'resources/css/pizza.css',
    ])
    <title>{{ $pizza['name'] }}</title>
</head>
<body>
    <div class="main_container">
        @include('partials.nav')
        
        <div class="pizza_container">
            <div class="pizza_image"><img src="{{ asset($pizza['image']) }}" alt="image"></div>
            <div class="pizza_information"></div>
        </div>
    </div>
</body>
</html>