<?php

namespace Database\Factories\questions;

use App\Models\Questions\Statement;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class StatementFactory extends Factory
{
    protected $model = Statement::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
