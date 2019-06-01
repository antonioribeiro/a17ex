<?php

namespace App\Http\Controllers;

use App\Repositories\AdRepository;
use App\Repositories\ArticleRepository;

class Home extends Controller
{
    public function index()
    {
        return view('site.home.index')->with([
            'rows' => app(ArticleRepository::class)->allForPublishing(),
            'ad' => app(AdRepository::class)->oneForPublishing(),
        ]);
    }
}
