<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAirplanesTables extends Migration
{
    public function up()
    {
        Schema::create('airplanes', function (Blueprint $table) {
            createDefaultTableFields($table);
        });

        // remove this if you're not going to use any translated field, ie. using the HasTranslation trait. If you do use it, create fields you want translatable in this table instead of the main table above. You do not need to create fields in both tables.
        Schema::create('airplane_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'airplane');

            $table->string('title', 200)->nullable();
            $table->text('description')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('airplane_translations');
        Schema::dropIfExists('airplanes');
    }
}
