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

    public function allForPublishing()
    {
        return $this->splitArticlesIntoRowsAndCols(
            $this->published()
                ->orderBy('position')
                ->get()
        );
    }

    /**
     * @param $articles
     * @param $other
     * @return \Illuminate\Support\Collection
     */
    private function splitArticlesIntoRowsAndCols($articles)
    {
        // Featured should be the first
        $other = $articles->splice(1);

        // Merge featured with all other chunks
        return collect([collect([$articles->first()])])
            ->merge(
                $other->chunk(2)->mapSpread(function ($a, $b) {
                    return collect([$a, $b]);
                })
            )
            ->chunk(2);
    }
}
