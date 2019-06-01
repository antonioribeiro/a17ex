<?php

Route::group(['middleware' => 'varnish'], function () {
    Route::get('/', 'News@index');

    Route::get('/news/{slug}', 'News@show')->name('news.show');
});
