<?php

use App\Models\Ad;
use Faker\Generator as Faker;

$factory->define(Ad::class, function (Faker $faker) {
    return [
        'title' => null,
        'position' => 1,
        'published' => true,
    ];
});
