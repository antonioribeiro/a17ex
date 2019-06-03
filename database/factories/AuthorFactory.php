<?php

use App\Models\Author;
use App\Models\Occupation;
use App\Support\Constants;
use App\Models\Slugs\AuthorSlug;
use App\Models\Translations\AuthorTranslation;

$factory->define(Author::class, function () {
    return [
        'name' => faker()->name,
        'occupation_id' => Occupation::all()->random()->id,
        'published' => true,
    ];
});

$factory->define(AuthorTranslation::class, function () {
    return [
        'author_id' => null,
        'bio' => faker()->text,
    ];
});

$factory->define(AuthorSlug::class, function () {
    return [
        'author_id' => null,
        'locale' => collect(Constants::APP_LOCALES)->random(),
        'slug' => Str::slug(faker()->name),
        'active' => true,
    ];
});
