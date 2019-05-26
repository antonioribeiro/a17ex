<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdsTables extends Migration
{
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            createDefaultTableFields($table);

            $table->string('title', 200)->nullable();

            $table->timestamp('publish_start_date')->nullable();
            $table->timestamp('publish_end_date')->nullable();

            $table
                ->integer('position')
                ->unsigned()
                ->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ads');
    }
}
