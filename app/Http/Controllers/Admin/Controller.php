<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController;

class Controller extends ModuleController
{
    protected $defaultIndexOptions = [
        'create' => true,
        'edit' => true,
        'publish' => false,
        'bulkPublish' => false,
        'feature' => false,
        'bulkFeature' => false,
        'restore' => true,
        'bulkRestore' => true,
        'delete' => true,
        'bulkDelete' => true,
        'reorder' => false,
        'permalink' => false,
        'bulkEdit' => true,
        'editInModal' => true,
    ];
}
