<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorsTables extends Migration
{
    public function up()
    {
        Schema::create('authors', function (Blueprint $table) {
            createDefaultTableFields($table, true, false);

            $table->string('name', 200)->nullable();

            $table
                ->integer('occupation_id')
                ->unsigned()
                ->nullable();

            $table
                ->foreign('occupation_id')
                ->references('id')
                ->on('occupations');
        });
    }

    public function down()
    {
        Schema::dropIfExists('authors');
    }
}
