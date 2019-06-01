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
                ->orderBy('featured', 'desc')
                ->orderBy('position', 'asc')
                ->take(config('news.show.posts'))
                ->get()
        );
    }

    public function allTrending()
    {
        return $this->published()
            ->orderBy('clicks', 'asc')
            ->orderBy('position', 'asc')
            ->skip(config('news.show.posts'))
            ->take(config('news.show.trending'))
            ->get();
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

    public function afterSave($object, $fields)
    {
        $this->afterSaveHandleSlugs($object, $fields);

        parent::afterSave($object, $fields);
    }
}
