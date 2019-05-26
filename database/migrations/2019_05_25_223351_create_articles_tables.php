<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTables extends Migration
{
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            createDefaultTableFields($table);

            $table->timestamp('publish_start_date')->nullable();
            $table->timestamp('publish_end_date')->nullable();

            $table
                ->integer('position')
                ->unsigned()
                ->nullable();

            $table->boolean('featured')->default(false);
        });

        Schema::create('article_translations', function (Blueprint $table) {
            createDefaultTranslationsTableFields($table, 'article');

            $table->string('title', 200)->nullable();

            $table->text('body')->nullable();
        });

        Schema::create('article_slugs', function (Blueprint $table) {
            createDefaultSlugsTableFields($table, 'article');
        });

        Schema::create('article_revisions', function (Blueprint $table) {
            createDefaultRevisionsTableFields($table, 'article');
        });
    }

    public function down()
    {
        Schema::dropIfExists('article_revisions');
        Schema::dropIfExists('article_translations');
        Schema::dropIfExists('article_slugs');
        Schema::dropIfExists('articles');
    }
}
