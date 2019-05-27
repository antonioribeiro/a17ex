<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasTranslation;
use A17\Twill\Models\Model;

class Airplane extends Model
{
    use HasTranslation;

    protected $fillable = ['title', 'description'];

    public $translatedAttributes = ['title', 'description'];
}
