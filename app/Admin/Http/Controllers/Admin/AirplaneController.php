<?php

namespace App\Admin\Http\Controllers\Admin;

class AirplaneController extends Controller
{
    protected $moduleName = 'airplanes';

    protected $indexOptions = [
        'publish' => true,
        'bulkPublish' => true,
    ];
}
