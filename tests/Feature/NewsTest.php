<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Repositories\AdRepository;
use App\Repositories\ArticleRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NewsTest extends TestCase
{
    private function assertSeeTrending($response)
    {
        app(ArticleRepository::class)
            ->allTrending()
            ->each(function ($article) use ($response) {
                $response->assertSeeText(e($article->title));
            });
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testNewsPageIsAccessible()
    {
        $response = $this->get(__route('home'));

        $response->assertStatus(200);
    }

    public function testDatabaseIsSeeded()
    {
        $this->assertGreaterThan(0, config('news.show.posts'));
        $this->assertGreaterThan(0, config('news.show.trending'));

        $this->assertEquals(
            app(ArticleRepository::class)
                ->allPublishedArticles()
                ->flatten()
                ->count(),
            config('news.show.posts')
        );

        $this->assertEquals(
            app(ArticleRepository::class)
                ->allTrending()
                ->count(),
            config('news.show.trending')
        );

        $this->assertNotNull(app(AdRepository::class)->oneForPublishing());
    }

    public function testArticlesAreRendering()
    {
        $response = $this->get(__route('home'));

        app(ArticleRepository::class)
            ->allPublishedArticles()
            ->each(function ($article) use ($response) {
                $response->assertSeeText(e($article->title));
            });
    }

    public function testTrendingIsRendering()
    {
        $this->assertSeeTrending($this->get(__route('home')));
    }

    public function testCanShowAnArticle()
    {
        $article = app(ArticleRepository::class)
            ->allTrending()
            ->first();

        $response = $this->get($article->showUrl);

        $response->assertStatus(200);

        $response->assertSee(e($article->title));

        $this->assertSeeTrending($response);
    }
}
