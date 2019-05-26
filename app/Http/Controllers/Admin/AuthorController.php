<?php

namespace App\Http\Controllers\Admin;

class AuthorController extends Controller
{
    protected $moduleName = 'authors';

    protected $titleColumnKey = 'name';

    /*
     * Available columns of the index view
     */
    protected $indexColumns = [
        'name' => [
            'title' => 'Name',
            'field' => 'name',
            'sort' => true,
        ],

        'occupation' => [
            'title' => 'Occupation',
            'sort' => true,
            'relationship' => 'occupation',
            'field' => 'name',
        ],
    ];

    protected $indexWith = ['occupation'];
}
