<?php

namespace App\Admin\Repositories;

use A17\Twill\Repositories\Behaviors\HandleTranslations;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\Behaviors\HandleRevisions;
use A17\Twill\Repositories\ModuleRepository;
use App\Admin\Models\Article;

class ArticleRepository extends ModuleRepository
{
    use HandleTranslations, HandleSlugs, HandleMedias, HandleRevisions;

    public function __construct(Article $model)
    {
        $this->model = $model;
    }
}
