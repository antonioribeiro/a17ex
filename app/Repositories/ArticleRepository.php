<?php

namespace App\Repositories;

use App\Models\Article;
use A17\Twill\Repositories\ModuleRepository;
use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleBlocks;
use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\Behaviors\HandleRevisions;
use A17\Twill\Repositories\Behaviors\HandleTranslations;

class ArticleRepository extends ModuleRepository
{
    use HandleBlocks,
        HandleTranslations,
        HandleSlugs,
        HandleMedias,
        HandleRevisions;

    public function __construct(Article $model)
    {
        $this->model = $model;
    }

    public function allPublished()
    {
        return $this->published()
            ->orderBy('position')
            ->get();
    }
}
