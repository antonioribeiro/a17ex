<?php

namespace App\Admin\Repositories;

use App\Admin\Models\Author;
use A17\Twill\Repositories\ModuleRepository;
use A17\Twill\Repositories\Behaviors\HandleMedias;

class AuthorRepository extends ModuleRepository
{
    use HandleMedias;

    public function __construct(Author $model)
    {
        $this->model = $model;
    }
}
