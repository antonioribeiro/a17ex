@extends('twill::layouts.form')

@section('contentFields')
    @formField('input', [
        'name' => 'body',
        'label' => 'Body',
        'translated' => true,
        'maxlength' => 65536
    ])
@stop
