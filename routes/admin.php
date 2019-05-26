<?php

Route::group(['prefix' => 'news-manager'], function () {
    Route::module('articles');
    Route::module('authors');
});

Route::group(['prefix' => 'ads-manager'], function () {
    Route::module('ads');
});

Route::group(['prefix' => 'attributes-manager'], function () {
    Route::module('occupations');
});
