<?php

use App\Models\Ad;

$factory->define(Ad::class, function () {
    return [
        'title' => null,
        'position' => 1,
        'published' => true,
        'url' => faker()->url,
    ];
});
