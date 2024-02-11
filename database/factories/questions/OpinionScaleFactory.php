<?php

namespace Database\Factories\questions;

use App\Models\Questions\OpinionScale;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class OpinionScaleFactory extends Factory
{
    protected $model = OpinionScale::class;

    public function definition(): array
    {
        return [
            'labels' => $this->faker->words(),
            'steps' => $this->faker->randomNumber(),
            'start_at_zero' => $this->faker->boolean(),
            'hide_question_number' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
