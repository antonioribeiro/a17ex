<?php

namespace App\Admin\Models;

use OwenIt\Auditing\Auditable;
use A17\Twill\Models\Model as A17Model;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;

class Model extends A17Model implements AuditableContract
{
    use Auditable;
}
