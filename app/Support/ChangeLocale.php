<?php

namespace App\Support;

use App;
use Closure;

class ChangeLocale
{
    /**
     * @param $request
     * @return string
     */
    private function getBrowserLocale($request): string
    {
        return trim(substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2));
    }

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
        if (session()->has('current-locale')) {
            $locale = session()->get('current-locale', config('app.locale'));
        } else {
            if (blank($locale = $this->getBrowserLocale($request))) {
                $locale = config('app.locale');
            }
        }

        app()->setLocale($locale);

        return $next($request);
    }
}
