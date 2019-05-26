@extends('twill::layouts.form')

@section('contentFields')
    @formField('input', [
        'name' => 'description',
        'label' => 'Descriptionxxx',
        'maxlength' => 200
    ])

    @formField('input', [
        'name' => 'bio',
        'label' => 'BIO',
        'type' => 'textarea',
        'translated' => true,
        'maxlength' => 200
    ])

    @formField('medias',[
        'name' => 'profile',
        'label' => 'Profile picture',
    ])
@stop
