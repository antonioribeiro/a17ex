@extends('twill::layouts.form')

@section('contentFields')
    @formField('medias', [
        'name' => 'avatar',
        'label' => 'Avatar image',
    ])

    @formField('browser', [
        'label' => 'Occupation',
        'name' => 'occupation_id',
        'moduleName' => 'occupations'
    ])
@stop
