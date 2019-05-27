<?php

namespace App\Http\Controllers\Admin;

class AirplaneController extends Controller
{
    protected $moduleName = 'airplanes';

    protected $indexOptions = [
        'publish' => true,
        'bulkPublish' => true,
    ];
}
