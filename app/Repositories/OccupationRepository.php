<?php

namespace App\Repositories;

use App\Models\Occupation;
use A17\Twill\Repositories\ModuleRepository;
use A17\Twill\Repositories\Behaviors\HandleTranslations;

class OccupationRepository extends ModuleRepository
{
    use HandleTranslations;

    public function __construct(Occupation $model)
    {
        $this->model = $model;
    }
}
