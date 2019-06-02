@extends('twill::layouts.form')

@section('contentFields')
    @formField('medias', [
        'name' => 'avatar',
        'label' => 'Avatar',
    ])

    @formField('wysiwyg', [
        'name' => 'bio',
        'label' => 'Bio',
    ])

    @formField('select', [
        'name' => 'occupation_id',
        'label' => 'Occupation',
        'placeholder' => 'Select an occupation',
        'options' => $occupations
    ])
@stop
