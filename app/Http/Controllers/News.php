<?php

namespace App\Http\Controllers;

use App\Repositories\ArticleRepository;

class News extends Controller
{
    public function index(): string
    {
        return view('site.news.index')->with([
            'rows' => app(ArticleRepository::class)->allForPublishing(),
        ]);
    }

    public function show($slug): string
    {
        return view('site.news.show')->with([
            'article' => app(ArticleRepository::class)->forSlug($slug),
        ]);
    }
}
