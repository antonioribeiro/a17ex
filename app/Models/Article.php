<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\HasRevisions;
use A17\Twill\Models\Behaviors\HasTranslation;

class Article extends Model implements Sortable
{
    use HasSlug, HasMedias, HasPosition, HasRevisions, HasTranslation;

    protected $fillable = [
        'published',
        'title',
        'body',
        'featured',
        'position',
        'publish_start_date',
        'publish_end_date',
    ];

    public $translatedAttributes = ['title', 'body'];

    public $slugAttributes = ['title'];

    public $checkboxes = ['published', 'featured'];

    public $mediasParams = [
        'cover' => [
            'default' => [
                [
                    'name' => 'landscape',
                    'ratio' => 16 / 9,
                ],
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
}
