<?php

use Illuminate\Support\Str;

if (!function_exists('__mix')) {
    /**
     * Get the path to a versioned Mix file.
     *
     * @param string $path
     * @param string $manifestDirectory
     * @return \Illuminate\Support\HtmlString|string
     *
     * @throws \Exception
     */
    function __mix($path, $manifestDirectory = '')
    {
        $path = mix($path, $manifestDirectory);

        return Str::startsWith($path, $manifestDirectory . $manifestDirectory)
            ? Str::after($path, $manifestDirectory)
            : $path;
    }
}
