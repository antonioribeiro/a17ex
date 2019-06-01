@extends('twill::layouts.form')

@section('contentFields')
    @formField('input', [
        'name' => 'url',
        'label' => 'URL',
        'maxlength' => 200
    ])

    @formField('medias', [
        'name' => 'image',
        'label' => 'Image',
    ])
@stop
