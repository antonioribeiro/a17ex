@extends('twill::layouts.form')

@section('contentFields')
    @formField('medias',[
        'name' => 'image',
        'label' => 'Image',
    ])

    @formField('checkbox', [
        'name' => 'featured',
        'label' => 'Featured'
    ])

    @formField('select', [
        'name' => 'author_id',
        'label' => 'Author',
        'placeholder' => 'Select an author',
        'options' => $authors
    ])

    @formField('block_editor', [
        'blocks' => ['gallery', 'image_with_text', 'quote', 'paragraph']
    ])
@stop
