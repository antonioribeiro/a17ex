<?php

use App\Models\Author;
use App\Models\Article;
use App\Support\Constants;
use Faker\Generator as Faker;
use App\Models\Slugs\ArticleSlug;
use App\Models\Translations\ArticleTranslation;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'position' => ($position = Article::count() + 1),
        'published' => true,
        'author_id' => Author::all()->random()->id,
        'featured' => $position === 1,
    ];
});

$factory->define(ArticleTranslation::class, function (Faker $faker) {
    return [
        'article_id' => null,
        'locale' => collect(Constants::APP_LOCALES)->random(),
        'title' => $faker->title,
        'description' => $faker->sentence(random_int(2, 7)),
        'active' => true,
    ];
});

$factory->define(ArticleSlug::class, function (Faker $faker) {
    return [
        'article_id' => null,
        'locale' => collect(Constants::APP_LOCALES)->random(),
        'slug' => Str::slug($faker->name),
        'active' => true,
    ];
});
