<?php

namespace Database\Factories\questions;

use App\Models\Questions\Welcome;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class WelcomeFactory extends Factory
{
    protected $model = Welcome::class;

    public function definition(): array
    {
        return [
            'button_text' => $this->faker->text(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
