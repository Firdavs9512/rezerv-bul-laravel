<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(2);
    return Inertia::render('Home/Index', []);
});

Route::get('/show', function () {
    sleep(2);
    return Inertia::render('Cafe/Show', []);
});
