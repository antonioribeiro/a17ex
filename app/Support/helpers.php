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
