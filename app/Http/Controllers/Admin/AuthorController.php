<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\OccupationRepository;

class AuthorController extends Controller
{
    protected $moduleName = 'authors';

    protected $titleColumnKey = 'name';

    protected $indexWith = ['occupation'];

    protected $formWith = ['occupation'];

    protected $indexOptions = ['permalink' => true];

    protected $indexColumns = [
        'image' => [
            'thumb' => true,
            'variant' => [
                'role' => 'avatar',
                'crop' => 'default',
            ],
        ],

        'name' => [
            'title' => 'Name',
            'field' => 'name',
        ],

        'occupation' => [
            // presenter column
            'title' => 'Occupation',
            'field' => 'occupationTitle',
            'present' => true,
        ],
    ];

    protected function formData($request)
    {
        return [
            'occupations' => app(OccupationRepository::class)->listAll(),
        ];
    }
}
