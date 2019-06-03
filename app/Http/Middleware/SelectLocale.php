<?php

namespace App\Http\Middleware;

use App;
use Closure;
use App\Support\Locale;

class SelectLocale
{
    /**
     *
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        app(Locale::class)->inferLocaleFromRequest($request);

        return $next($request);
    }
}
