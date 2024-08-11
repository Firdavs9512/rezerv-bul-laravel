<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class);

Route::get('/show', function () {
    return Inertia::render('Cafe/Show', []);
});
