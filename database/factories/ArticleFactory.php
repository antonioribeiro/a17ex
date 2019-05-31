<?php

use App\Models\Article;
use Faker\Generator as Faker;
use App\Models\Translations\ArticleTranslation;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'position' => Article::count() + 1,
        'published' => true,
    ];
});

$factory->define(ArticleTranslation::class, function (Faker $faker) {
    return [
        'article_id' => null,
        'locale' => collect(DatabaseSeeder::LANGUAGES)->random(),
        'title' => $faker->title,
        'description' => $faker->sentence(random_int(2, 7)),
        'active' => true,
    ];
});
