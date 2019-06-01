<?php

Route::get('/', 'News@index');

Route::get('/{section}/{slug}', 'News@show')->name('news.show');
