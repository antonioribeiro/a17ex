@extends('layouts.html')

@section('content')
    <main>
        @yield('main')
    </main>

    <aside>
        @yield('aside')
    </aside>
@endsection

@section('JavaScript')
    @yield('site-javascript')
@endsection
