<?php

namespace App\Admin\Models;

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
