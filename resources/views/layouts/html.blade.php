<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta version="@version('compact')">

        <title>{{ config('app.name') }} :: Front End :: {{ $currentPage }}</title>

        <script src="{{ __mix('/site/js/app.js', '/site') }}" defer></script>
        <link href="{{ __mix('/site/css/app.css', '/site') }}" rel="stylesheet">
    </head>
    <body>
        <div id="wrapper">
            @yield('content')
        </div>

        <script>
            @yield('JavaScript')
        </script>

        @include('layouts.partials.analytics')
        @include('layouts.partials.livereload')
    </body>
</html>
