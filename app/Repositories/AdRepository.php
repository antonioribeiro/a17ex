<?php

namespace App\Repositories;

use App\Models\Ad;
use A17\Twill\Repositories\ModuleRepository;
use A17\Twill\Repositories\Behaviors\HandleMedias;

class AdRepository extends ModuleRepository
{
    use HandleMedias;

    public function __construct(Ad $model)
    {
        $this->model = $model;
    }

    public function oneForPublishing()
    {
        return $this->published()
            ->orderBy('position')
            ->first();
    }
}
