<?php

namespace App\Admin\Http\Requests\Admin;

use A17\Twill\Http\Requests\Admin\Request;

class AdRequest extends Request
{
    public function rulesForCreate()
    {
        return [];
    }

    public function rulesForUpdate()
    {
        return [];
    }
}
