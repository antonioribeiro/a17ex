<?php

namespace App\Models\Presenters;

class Presenter
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function __get($name)
    {
        return $this->$name();
    }
}
