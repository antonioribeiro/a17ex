<?php

use A17\Twill\Models\User;
use Illuminate\Support\Str;

$factory->define(User::class, function () {
    return [
        'name' => faker()->name,
        'email' => faker()->unique()->safeEmail,
        'role' => 'user',
        'published' => true,
        'password' =>
            '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});
