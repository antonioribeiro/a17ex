<?php

namespace App\Http\Controllers\Admin;

class AdController extends Controller
{
    protected $moduleName = 'ads';

    protected $indexColumns = [
        'image' => [
            'thumb' => true,
            'variant' => [
                'role' => 'image',
                'crop' => 'default',
            ],
        ],

        'title' => [
            'title' => 'Title',
            'field' => 'title',
        ],

        'url' => [
            'title' => 'URL',
            'field' => 'url',
        ],

        'clicks' => [
            'title' => 'Clicks',
            'field' => 'clicks',
            'sort' => true,
        ],
    ];
}
