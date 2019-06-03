<?php

use Illuminate\Support\Str;

if (!function_exists('__mix')) {
    function __mix($path, $manifestDirectory = ''): string
    {
        $path = mix($path, $manifestDirectory);

        return Str::startsWith($path, $manifestDirectory . $manifestDirectory)
            ? Str::after($path, $manifestDirectory)
            : $path;
    }
}

if (!function_exists('faker')) {
    /**
     * @param null $locale
     * @return \Faker\Generator
     */
    function faker($locale = null)
    {
        return Faker\Factory::create(
            [
                'en' => 'en_US',
                'es' => 'es_AR',
                'fr' => 'fr_FR',
                'pt' => 'pt_BR',
            ][$locale ?? config('app.locale')]
        );
    }
}

if (!function_exists('__route')) {
    function __route($name, $parameters = [], $absolute = true)
    {
        $parameters = $parameters + ['locale' => app()->getLocale()];

        return route($name, $parameters, $absolute);
    }
}
