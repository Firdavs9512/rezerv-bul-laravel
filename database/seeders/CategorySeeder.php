<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            \App\Models\Category::createOrFirst($category);
        }
    }
}
