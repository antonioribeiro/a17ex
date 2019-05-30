<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleMedias;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Ad;

class AdRepository extends ModuleRepository
{
    use HandleMedias;

    public function __construct(Ad $model)
    {
        $this->model = $model;
    }
}
