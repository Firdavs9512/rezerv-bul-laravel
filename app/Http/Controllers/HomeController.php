<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $favorite = Restaurant::active()->inRandomOrder()->limit(4)->get();
        $popular = Restaurant::active()->orderBy('rating', 'desc')->limit(8)->get();
        $closest = Restaurant::active()->inRandomOrder()->limit(4)->get();

        return Inertia::render('Home/Index', [
            'favorite' => $favorite,
            'popular' => $popular,
            'closest' => $closest,
        ]);
    }
}
