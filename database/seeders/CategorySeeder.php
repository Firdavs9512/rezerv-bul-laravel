<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Fast Food',
            ],
            [
                'name' => 'Fine Dining',
            ],
            [
                'name' => 'Casual Dining',
            ],
            [
                'name' => 'Cafe',
            ],
            [
                'name' => 'Buffet',
            ],
            [
                'name' => 'Food Truck',
            ],
            [
                'name' => 'Bar',
            ],
            [
                'name' => 'Pub',
            ],
            [
                'name' => 'Bakery',
            ],
            [
                'name' => 'Food Court',
            ],
        ];

        foreach ($data as $category) {
            \App\Models\Category::createOrFirst([
                'name' => $category['name'],
                'slug' => Str::slug($category['name']),
            ]);
        }
    }
}
