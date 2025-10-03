<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/nav.css','resources/js/nav.js'])
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Next Pizza</title>
</head>
<body>
    <div class="main_container">
        <nav class="main_nav">
            <img class="main_logo" src="{{ asset('images/logo.png') }}" alt="Логотип">
            <div class="nav_search">
                <img class="search_icon" src="{{ asset('images/icons/search.png') }}" alt="search">
                <input class="input_search" type="text" placeholder="Поиск...">
            </div>
            <div class="nav_panel">
                <div class="account"><img class="account_logo" src="{{ asset('images/icons/account.png') }}" alt="account">Войти</div>
                <div class="basket"><img class="basket_logo" src="{{ asset('images/icons/basket.svg') }}" alt="basket"></div>
            </div>
        </nav>
    </div>
</body>
</html>