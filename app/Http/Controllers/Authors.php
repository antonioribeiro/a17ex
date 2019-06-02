<?php

namespace App\Http\Controllers;

use App\Repositories\AuthorRepository;

class Authors extends Controller
{
    public function show($slug): string
    {
        return view('site.authors.show')->with([
            'author' => ($author = app(AuthorRepository::class)->forSlug(
                $slug
            )),
        ]);
    }
}
