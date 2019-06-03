<?php

use Ramsey\Uuid\Uuid;
use A17\Twill\Models\Media;
use Illuminate\Database\Eloquent\Model;

$factory->define(Media::class, function () {
    return [
        'uuid' => (string) Uuid::uuid4(),
        'alt_text' => faker()->name,
        'caption' => faker()->name,
        'filename' => \Illuminate\Support\Str::slug(faker()->name) . '.jpg',
        'height' => faker()->numberBetween(600, 1080),
        'width' => faker()->numberBetween(800, 1920),
    ];
});

$factory->define(Mediable::class, function () {
    return [
        'mediable_id' => null,
        'mediable_type' => null,
        'media_id' => null,
        'role' => 'image',
        'crop' => 'default',
        'ratio' => 'landscape',
        'metadatas' => '{"caption":null,"altText":null,"video":null}',
    ];
});

class Mediable extends Model
{
}
