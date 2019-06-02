<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasTranslation;
use App\Models\Presenters\Author as AuthorPresenter;

class Author extends Model
{
    use HasMedias, HasTranslation, HasSlug;

    protected $fillable = ['published', 'occupation_id', 'name'];

    protected $with = ['occupation'];

    public $translatedAttributes = ['bio'];

    public $mediasParams = [
        'avatar' => [
            'default' => [
                [
                    'name' => 'portrait',
                    'ratio' => 1,
                ],
            ],
        ],
    ];

    public $presenter = AuthorPresenter::class;

    public $presenterAdmin = AuthorPresenter::class;

    public function occupation()
    {
        return $this->belongsTo(Occupation::class);
    }
}
