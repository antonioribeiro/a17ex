@extends('twill::layouts.settings')

@section('contentFields')
    @formField('input', [
        'label' => 'Number of posts to show in the news section',
        'name' => 'show_posts',
        'translated' => false,
    ])
@stop
