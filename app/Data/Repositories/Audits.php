<?php

namespace App\Data\Repositories;

use App\Data\Models\Audit;

class Audits
{
    public function sweep(): void
    {
        // Keep only the last year of audit records
        Audit::where('created_at', '<', now()->subYear())->delete();
    }
}
