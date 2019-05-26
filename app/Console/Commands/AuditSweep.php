<?php

namespace App\Console\Commands;

use App\Data\Repositories\Audits;
use Illuminate\Console\Command;

class AuditSweep extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'audit:sweep';

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
     * @return mixed
     */
    public function handle()
    {
        $this->info('Sweeping audits table...');

        app(Audits::class)->sweep();

        $this->info('Done.');
    }
}
