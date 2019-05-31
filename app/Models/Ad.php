<?php

namespace App\Models;

use A17\Twill\Models\Model;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasPosition;

class Ad extends Model implements Sortable
{
    use HasMedias, HasPosition;

    protected $fillable = [
        'published',
        'title',
        'position',
        'publish_start_date',
        'publish_end_date',
    ];

    public $checkboxes = ['published'];

    public $mediasParams = [
        'image' => [
            'default' => [
                [
                    'name' => 'landscape',
                    'ratio' => 6 / 5,
                ],
            ],
        ],
    ];
}
