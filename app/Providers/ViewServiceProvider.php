<?php

namespace App\Providers;

use App\Repositories\AdRepository;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use App\Repositories\ArticleRepository;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('*', function ($view) {
            $view->with('currentPage', 'Home');

            $view->with(
                'trending',
                app(ArticleRepository::class)->allTrending()
            );

            $view->with('ad', app(AdRepository::class)->oneForPublishing());
        });
    }
}
