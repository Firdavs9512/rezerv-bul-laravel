<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Index', []);
});

Route::get('/show', function () {
    return Inertia::render('Cafe/Show', []);
});
