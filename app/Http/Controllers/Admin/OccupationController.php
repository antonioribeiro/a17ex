<?php

namespace App\Http\Controllers\Admin;

class OccupationController extends Controller
{
    protected $moduleName = 'occupations';

    /*
     * Available columns of the index view
     */
    protected $indexColumns = [
        'title' => [
            'title' => 'Title',
            'field' => 'title',
            'sort' => true,
        ],
    ];
}
