<?php

Route::group(['middleware' => 'varnish'], function () {
    Route::get('/', 'News@index');

    Route::get('/{section}/{slug}', 'News@show')->name('news.show');
});
