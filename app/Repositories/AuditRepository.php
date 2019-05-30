<?php

namespace App\Repositories;

use App\Models\Audit;

class AuditRepository
{
    public function sweep(): void
    {
        // Keep only the last year of audit records
        Audit::where('created_at', '<', now()->subYear())->delete();
    }
}
