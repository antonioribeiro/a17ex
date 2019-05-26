<?php

namespace App\Http\Requests\Admin;

use A17\Twill\Http\Requests\Admin\Request;

class AuthorRequest extends Request
{
    const RULES = ['name' => 'required'];

    public function rulesForCreate()
    {
        return static::RULES;
    }

    public function rulesForUpdate()
    {
        return static::RULES;
    }
}
