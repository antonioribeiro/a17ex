<?php

namespace App\Support;

use Illuminate\Http\Request;

class Locale
{
    public function set($locale)
    {
        session()->put(Constants::SESSION_LOCALE_KEY, $locale);

        app()->setLocale($locale);
    }

    public function get()
    {
        return session()->has(Constants::SESSION_LOCALE_KEY)
            ? session()->get(Constants::SESSION_LOCALE_KEY)
            : app()->getLocale();
    }

    public function redirectToHome()
    {
        return redirect()->to(app()->getLocale());
    }

    public function isCurrent($locale)
    {
        return $this->get() === $locale;
    }

    public function getBrowserLocale($request): string
    {
        return trim(substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2));
    }

    public function inferLocaleFromRequest(Request $request)
    {
        if (strlen($locale = $request->segment(1)) === 2) {
            app()->setLocale($locale);

            return;
        }

        if (session()->has(Constants::SESSION_LOCALE_KEY)) {
            $locale = session()->get(
                Constants::SESSION_LOCALE_KEY,
                config('app.locale')
            );
        } else {
            if (blank($locale = $this->getBrowserLocale($request))) {
                $locale = config('app.locale');
            }
        }

        app()->setLocale($locale);
    }

    public function changeLocaleFromRoot($locale)
    {
        if ($this->isCurrent($locale)) {
            return null;
        }

        $this->set($locale);

        return $this->redirectToHome();
    }
}
