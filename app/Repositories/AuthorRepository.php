<?php

namespace App\Repositories;

use App\Models\Author;
use A17\Twill\Repositories\ModuleRepository;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\Behaviors\HandleTranslations;

class AuthorRepository extends ModuleRepository
{
    use HandleMedias, HandleTranslations, HandleSlugs;

    public function __construct(Author $model)
    {
        $this->model = $model;
    }
}
