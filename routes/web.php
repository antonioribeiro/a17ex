<?php

Route::group(['middleware' => 'doNotCacheResponse'], function () {
    Route::get('/', 'Locale@redirect')->name('home');

    Route::get('/locale/{locale}', 'Locale@set')->name('locale.set');
});

Route::group(['middleware' => 'varnish', 'prefix' => '{locale}'], function () {
    Route::get('/', 'News@index')->name('home.with-locale');

    Route::get('/news/{slug}', 'News@show')->name('news.show');

    Route::get('/authors/{slug}', 'Authors@show')->name('authors.show');
});
