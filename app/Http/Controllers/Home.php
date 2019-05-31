<?php

namespace App\Http\Controllers;

use App\Repositories\ArticleRepository;

class Home extends Controller
{
    public function index()
    {
        return view('site.home.index')->with(
            'articles',
            app(ArticleRepository::class)->allPublished()
        );
    }
}
