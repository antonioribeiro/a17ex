<?php

namespace App\Models\Presenters;

class Author extends Presenter
{
    public function occupationTitle()
    {
        // Had to hack this thing (in an ugly way) to make it work!
        // ¯\_(ツ)_/¯
        return $this->model->toArray()['occupation']['title'];
    }
}
