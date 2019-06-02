<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Repositories\AuditRepository;

class AuditSweep extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'auditing:sweep';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove too old audit records';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle(): void
    {
        $this->info('Sweeping audits table...');

        app(AuditRepository::class)->sweep();

        $this->info('Done.');
    }
}
