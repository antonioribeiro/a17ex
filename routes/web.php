<?php

Route::group(['middleware' => 'varnish'], function () {
    Route::get('/', 'News@index');

    Route::get('/news/{slug}', 'News@show')->name('news.show');

    Route::get('/authors/{slug}', 'Authors@show')->name('authors.show');
});
