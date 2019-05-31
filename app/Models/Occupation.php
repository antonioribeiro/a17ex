<?php

namespace App\Models;

use A17\Twill\Models\Model;
use A17\Twill\Models\Behaviors\HasTranslation;

class Occupation extends Model
{
    use HasTranslation;

    protected $fillable = ['published', 'title'];

    public $translatedAttributes = ['title', 'description'];

    public $checkboxes = ['published'];
}
