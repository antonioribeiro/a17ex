<?php

namespace App\Admin\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController;

class Controller extends ModuleController
{
    protected $defaultIndexOptions = [
        'create' => true,
        'edit' => true,
        'restore' => true,
        'bulkRestore' => true,
        'delete' => true,
        'bulkDelete' => true,
        'bulkEdit' => true,
        'editInModal' => true,
        //
        //        'publish' => false,
        //        'bulkPublish' => false,
        //        'feature' => false,
        //        'bulkFeature' => false,
        //        'reorder' => false,
        //        'permalink' => false,
    ];

    protected $indexOptions = [
        'publish' => false,
        'bulkPublish' => false,
    ];
}
