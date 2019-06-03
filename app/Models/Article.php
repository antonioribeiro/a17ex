<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasBlocks;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\HasRevisions;
use A17\Twill\Models\Behaviors\HasTranslation;

class Article extends Model implements Sortable
{
    use HasBlocks,
        HasTranslation,
        HasSlug,
        HasMedias,
        HasRevisions,
        HasPosition;

    protected $fillable = ['published', 'position', 'featured'];

    protected $with = ['author'];

    public $translatedAttributes = ['title', 'description'];

    public $slugAttributes = ['title'];

    public $checkboxes = ['published'];

    public $mediasParams = [
        'image' => [
            'default' => [
                [
                    'name' => 'landscape',
                    'ratio' => 3 / 2,
                ],
            ],
            'portrait' => [
                [
                    'name' => 'portrait',
                    'ratio' => 3 / 4,
                ],
            ],
            'mobile' => [
                [
                    'name' => 'mobile',
                    'ratio' => 1,
                ],
            ],
        ],
    ];

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function getShowUrlAttribute()
    {
        return __route('news.show', [
            'slug' => $this->getSlug(),
        ]);
    }
}
