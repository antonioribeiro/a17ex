@extends('layouts.site')

@section('main')
    <div class='hero'>
        @if ($author->hasImage('avatar'))
            <img src="{{ $author->image('avatar', 'default') }}">
        @endif

        <h1>{{ $author->name }}</h1>
        <p>{{ $author->occupation->title }}</p>
        <br><br>
    </div>

    <div class='content'>
        <h6>Bio</h6>
        <br>
        {{ $author->bio }}
    </div>

    <br><br>

    <div class='articles'>
        <h6>Articles written by {{ $author->name }}</h6>
        <br>
        @foreach($author->articles as $article)
            <p><a href="{{ $article->showUrl }}">{{ $article->title }}</a></p>
        @endforeach
    </div>
@endsection

@section('aside')
    @include('site.news.partials.aside')
@endsection
