<?php

namespace App\Http\Controllers;

use App\Repositories\AuthorRepository;

class Authors extends Controller
{
    public function show($locale, $slug): string
    {
        return view('site.authors.show')->with([
            'author' => ($author = app(AuthorRepository::class)->forSlug(
                $slug
            )),
        ]);
    }
}
