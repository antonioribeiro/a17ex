<?php

namespace App\Models\Translations;

use A17\Twill\Models\Model;

class ArticleTranslation extends Model
{
    protected $fillable = [
        'title',
        'description',
        'active',
        'locale',
    ];
}
