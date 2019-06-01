<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');

            $table->timestamps();

            $table->softDeletes();

            $table
                ->string('key')
                ->nullable()
                ->index();

            $table
                ->string('section')
                ->nullable()
                ->index();

            $table->integer('show_posts')->nullable();
        });

        Schema::create('setting_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'setting');
        });
    }

    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
