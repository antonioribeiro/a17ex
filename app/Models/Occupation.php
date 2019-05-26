<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasTranslation;

class Occupation extends Model
{
    use HasTranslation;

    protected $fillable = ['title'];

    public $translatedAttributes = ['title'];
}
