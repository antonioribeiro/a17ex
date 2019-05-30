<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOccupationsTables extends Migration
{
    public function up()
    {
        Schema::create('occupations', function (Blueprint $table) {
            createDefaultTableFields($table);
        });

        Schema::create('occupation_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'occupation');

            $table->string('title', 200)->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('occupation_translations');
        Schema::dropIfExists('occupations');
    }
}
