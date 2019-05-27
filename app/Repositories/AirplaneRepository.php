<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleTranslations;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Airplane;

class AirplaneRepository extends ModuleRepository
{
    use HandleTranslations;

    public function __construct(Airplane $model)
    {
        $this->model = $model;
    }
}
