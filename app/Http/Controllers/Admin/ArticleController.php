<?php

namespace App\Http\Controllers\Admin;

class ArticleController extends Controller
{
    protected $moduleName = 'articles';

    protected $previewView = 'site.articles.show';

    protected $indexColumns = [
        'image' => [
            'thumb' => true,
            'variant' => [
                'role' => 'image',
                'crop' => 'mobile',
            ],
        ],

        'title' => [
            'title' => 'Title',
            'field' => 'title',
        ],
    ];
}
