<?php

namespace App\Http\Controllers\Admin;

class ArticleController extends Controller
{
    protected $moduleName = 'articles';

    protected $defaultIndexOptions = [
        'create' => true,
        'edit' => true,
        'publish' => true,
        'bulkPublish' => true,
        'feature' => false,
        'bulkFeature' => false,
        'restore' => true,
        'bulkRestore' => true,
        'delete' => true,
        'bulkDelete' => true,
        'reorder' => false,
        'permalink' => true,
        'bulkEdit' => true,
        'editInModal' => true,
    ];
}
