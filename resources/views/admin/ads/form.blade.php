@extends('twill::layouts.form')

@section('contentFields')
    @formField('medias', [
        'name' => 'image',
        'label' => 'Image',
    ])
@stop
