<?php

use App\User;
use App\Models\Occupation;
use Faker\Generator as Faker;
use App\Models\Translations\OccupationTranslation;

$factory->define(Occupation::class, function (Faker $faker) {
    return [];
});

$factory->define(OccupationTranslation::class, function (Faker $faker) {
    return [
        'occupation_id' => null,
        'locale' => collect(DatabaseSeeder::LANGUAGES)->random(),
        'title' => $faker->title,
        'active' => true,
        'description' => $faker->sentence(random_int(2, 7)),
    ];
});
