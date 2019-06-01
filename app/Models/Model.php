<?php

namespace App\Models;

use OwenIt\Auditing\Auditable;
use A17\Twill\Models\Model as A17Model;
use Spatie\ResponseCache\Facades\ResponseCache;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;

class Model extends A17Model implements AuditableContract
{
    use Auditable;

    public function save(array $options = [])
    {
        ResponseCache::clear();

        return parent::save($options);
    }
}
