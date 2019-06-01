<?php

namespace App\Http\Controllers;

use App\Repositories\AdRepository;
use App\Repositories\ArticleRepository;

class News extends Controller
{
    public function index()
    {
        return view('site.news.index')->with([
            'rows' => app(ArticleRepository::class)->allForPublishing(),
            'trending' => app(ArticleRepository::class)->allTrending(),
            'ad' => app(AdRepository::class)->oneForPublishing(),
        ]);
    }

    public function show($slug)
    {
        return view('site.news.show')->with([
            'article' => app(ArticleRepository::class)->forSlug($slug),
            'trending' => app(ArticleRepository::class)->allTrending(),
            'ad' => app(AdRepository::class)->oneForPublishing(),
        ]);
    }
}
