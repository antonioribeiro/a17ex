<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAuthorsTables extends Migration
{
    public function up()
    {
        Schema::create('authors', function (Blueprint $table) {
            createDefaultTableFields($table);
            
            $table->string('name', 200)->nullable();

            $table->unsignedBigInteger('occupation_id')->nullable();
        });

        Schema::create('author_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'author');

            $table->text('occupation')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('author_translations');
        Schema::dropIfExists('authors');
    }
}
