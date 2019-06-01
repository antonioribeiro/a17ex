<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Number of posts to show in the news section
    |--------------------------------------------------------------------------
    |
    */

    'show' => [
        'posts' => env('SHOW_POSTS', 7),

        'trending' => env('SHOW_TRENDING', 4),
    ],
];
