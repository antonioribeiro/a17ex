<?php

namespace App\Http\Controllers\Admin;

class AdController extends Controller
{
    protected $moduleName = 'ads';

    protected $indexOptions = [
        'publish' => true,
        'bulkPublish' => true,
    ];
}
