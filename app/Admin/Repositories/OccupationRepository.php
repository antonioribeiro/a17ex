<?php

namespace App\Admin\Repositories;

use A17\Twill\Repositories\Behaviors\HandleTranslations;
use A17\Twill\Repositories\ModuleRepository;
use App\Admin\Models\Occupation;

class OccupationRepository extends ModuleRepository
{
    use HandleTranslations;

    public function __construct(Occupation $model)
    {
        $this->model = $model;
    }
}
