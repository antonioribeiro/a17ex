<?php

use App\User;
use App\Support\Constants;
use App\Models\Occupation;
use App\Models\Translations\OccupationTranslation;

$factory->define(Occupation::class, function () {
    return [];
});

$factory->define(OccupationTranslation::class, function () {
    return [
        'occupation_id' => null,
        'locale' => collect(Constants::APP_LOCALES)->random(),
        'title' => faker()->title,
        'active' => true,
        'description' => faker()->sentence(random_int(2, 7)),
    ];
});
