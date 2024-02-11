<?php

namespace Database\Factories;

use App\Models\Question;
use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    protected $model = Question::class;

    public function definition(): array
    {
        return [
            'text_type' => $this->faker->text(),
            'min' => $this->faker->randomNumber(),
            'man' => $this->faker->randomNumber(),
            'format' => $this->faker->word(),
            'error_message' => $this->faker->word(),
            'placeholder' => $this->faker->word(),
            'hide_question_number' => $this->faker->boolean(),
        ];
    }
}
