<?php

namespace Database\Factories\questions;

use App\Models\Questions\Ranking;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class RankingFactory extends Factory
{
    protected $model = Ranking::class;

    public function definition(): array
    {
        return [
            'choices' => $this->faker->words(),
            'randomize' => $this->faker->boolean(),
            'fix_numbers' => $this->faker->boolean(),
            'hide_question_number' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
