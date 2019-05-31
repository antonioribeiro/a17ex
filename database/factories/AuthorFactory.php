<?php

use App\Models\Author;
use App\Models\Occupation;
use Faker\Generator as Faker;

$factory->define(Author::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'occupation_id' => Occupation::all()->random()->id,
        'published' => true,
    ];
});
