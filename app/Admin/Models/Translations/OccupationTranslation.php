<?php

namespace App\Admin\Models\Translations;

use A17\Twill\Models\Model;

class OccupationTranslation extends Model
{
    protected $fillable = ['title', 'active', 'locale'];
}
