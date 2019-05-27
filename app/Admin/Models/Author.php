<?php

namespace App\Admin\Models;

use A17\Twill\Models\Behaviors\HasMedias;

class Author extends Model
{
    use HasMedias;

    protected $fillable = ['name'];

    public $mediasParams = [
        'cover' => [
            'default' => [
                [
                    'name' => 'portrait',
                    'ratio' => 3 / 4,
                ],
            ],
        ],
    ];

    public function scopeMine($query)
    {
        return $query;
    }

    public function occupation()
    {
        return $this->belongsTo(Occupation::class);
    }
}
