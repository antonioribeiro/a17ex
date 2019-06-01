<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdsTables extends Migration
{
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            createDefaultTableFields($table);

            $table->string('title', 200)->nullable();

            $table->string('url', 200)->nullable();

            $table
                ->integer('position')
                ->unsigned()
                ->nullable();

            $table->timestamp('publish_start_date')->nullable();

            $table->timestamp('publish_end_date')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ads');
    }
}
