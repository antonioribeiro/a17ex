@extends('twill::layouts.form')

@section('contentFields')
    @formField('medias', [
        'name' => 'avatar',
        'label' => 'Avatar',
    ])

    @formField('select', [
        'name' => 'occupation_id',
        'label' => 'Occupation',
        'placeholder' => 'Select an occupation',
        'options' => $occupations
    ])
@stop
