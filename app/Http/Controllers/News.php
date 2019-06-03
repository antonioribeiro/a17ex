<?php

namespace App\Http\Controllers;

use App\Repositories\ArticleRepository;

use App\Support\Locale as LocaleService;

class News extends Controller
{
    public function index($locale): string
    {
        if (
            $response = app(LocaleService::class)->changeLocaleFromRoot($locale)
        ) {
            return $response;
        }

        return view('site.news.index')->with([
            'rows' => app(ArticleRepository::class)->allForPublishing(),
        ]);
    }

    public function show($locale, $slug): string
    {
        return view('site.news.show')->with([
            'article' => app(ArticleRepository::class)->forSlug($slug),
        ]);
    }
}
