<?php

namespace App\Http\Controllers;

use App\Support\Locale as LocaleService;

class Locale extends Controller
{
    /**
     * @var \App\Support\Locale
     */
    protected $locale;

    public function __construct(LocaleService $locale)
    {
        $this->locale = $locale;
    }

    public function set($locale)
    {
        $this->locale->set($locale);

        return $this->redirect();
    }

    public function redirect()
    {
        return $this->locale->redirectToHome();
    }
}
