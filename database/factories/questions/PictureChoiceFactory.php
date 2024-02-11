<?php

namespace Database\Factories\questions;

use App\Models\Questions\PictureChoice;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class PictureChoiceFactory extends Factory
{
    protected $model = PictureChoice::class;

    public function definition(): array
    {
        return [
            'choices' => $this->faker->words(),
            'randomize' => $this->faker->boolean(),
            'vertical_display' => $this->faker->boolean(),
            'multiple_answers' => $this->faker->boolean(),
            'min_answers' => $this->faker->randomNumber(),
            'max_answers' => $this->faker->randomNumber(),
            'hide_question_number' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
