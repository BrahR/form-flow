<?php

namespace Database\Factories\questions;

use App\Models\Questions\GeneralText;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class GeneralTextFactory extends Factory
{
    protected $model = GeneralText::class;

    public function definition(): array
    {
        return [
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
