<?php

namespace Database\Factories\questions;

use App\Models\Questions\Rating;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class RatingFactory extends Factory
{
    protected $model = Rating::class;

    public function definition(): array
    {
        return [
            'type' => $this->faker->randomNumber(),
            'value' => $this->faker->randomNumber(),
            'hide_question_number' => $this->faker->randomNumber(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
