<?php

namespace App\Admin\Http\Controllers\Admin;

class ArticleController extends Controller
{
    protected $moduleName = 'articles';

    protected $indexOptions = [
        'publish' => true,
        'bulkPublish' => true,
    ];
}
