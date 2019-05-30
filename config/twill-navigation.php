<?php

return [
    'news-manager' => [
        'title' => 'News',

        'route' => 'admin.news-manager.articles.index',

        'primary_navigation' => [
            'articles' => [
                'title' => 'Articles',
                'module' => true,
            ],

            'authors' => [
                'title' => 'Authors',
                'module' => true,
            ],
        ],
    ],

    'ads-manager' => [
        'title' => 'Ads',

        'route' => 'admin.ads-manager.ads.index',

        'primary_navigation' => [
            'ads' => [
                'title' => 'Ads',
                'module' => true,
            ],
        ],
    ],

    'attributes-manager' => [
        'title' => 'Attributes',

        'route' => 'admin.attributes-manager.occupations.index',

        'primary_navigation' => [
            'occupations' => [
                'title' => 'Occupations',
                'module' => true,
            ]
        ],
    ],
];
