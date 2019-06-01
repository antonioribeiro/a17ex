<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\AuthorRepository;

class ArticleController extends Controller
{
    protected $moduleName = 'articles';

    protected $previewView = 'site.articles.show';

    protected $indexOptions = ['permalink' => true];

    protected $indexColumns = [
        'image' => [
            'thumb' => true,
            'variant' => [
                'role' => 'image',
                'crop' => 'mobile',
            ],
        ],

        'featured' => [
            'title' => 'Featured',
            'field' => 'featured',
        ],

        'position' => [
            'title' => 'Position',
            'field' => 'position',
            'sort' => true,
        ],

        'title' => [
            'title' => 'Title',
            'field' => 'title',
            'sort' => true,
        ],

        'clicks' => [
            'title' => 'Clicks',
            'field' => 'clicks',
            'sort' => true,
        ],
    ];

    protected function formData($request)
    {
        return [
            'authors' => app(AuthorRepository::class)->listAll('name'),
        ];
    }
}
