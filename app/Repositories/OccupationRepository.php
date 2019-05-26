<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleTranslations;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Occupation;

class OccupationRepository extends ModuleRepository
{
    use HandleTranslations;

    public function __construct(Occupation $model)
    {
        $this->model = $model;
    }
}
