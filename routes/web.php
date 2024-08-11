<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RestaurantController;

Route::get('/', HomeController::class);
Route::get('/restoran/{slug}', RestaurantController::class);
