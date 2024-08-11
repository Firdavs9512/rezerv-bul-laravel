<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class RestaurantController extends Controller
{
    public function __invoke($slug)
    {
        $restaurant = Restaurant::where('slug', $slug)
            ->active()
            ->with('category')
            ->firstOrFail();

        return Inertia::render('Cafe/Show', [
            'restaurant' => $restaurant,
        ]);
    }
}
