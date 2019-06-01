@extends('layouts.site')

@section('main')
    @include('site.news.partials.main')
@endsection

@section('aside')
    @include('site.news.partials.aside')
@endsection

@section('site-javascript')
    window.onload = () => observeShareButtons()
@endsection
