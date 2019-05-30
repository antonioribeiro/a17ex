@extends('twill::layouts.form')

@section('contentFields')
    @formField('medias',[
        'name' => 'image',
        'label' => 'Image',
    ])

    @formField('block_editor', [
        'blocks' => ['gallery', 'image_with_text', 'quote', 'paragraph']
    ])
@stop
