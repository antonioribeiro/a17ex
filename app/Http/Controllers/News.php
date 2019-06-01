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
            'ad' => app(AdRepository::class)->oneForPublishing(),
        ]);
    }

    public function show()
    {
        return view('site.news.show')->with([
            'ad' => app(AdRepository::class)->oneForPublishing(),
        ]);
    }
}
