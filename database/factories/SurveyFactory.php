<?php

namespace Database\Factories;

use App\Models\Survey;
use App\Models\Workspace;
use Illuminate\Database\Eloquent\Factories\Factory;

class SurveyFactory extends Factory
{
  protected $model = Survey::class;

  public function definition(): array
  {
    $workspace = Workspace::inRandomOrder()->first();

    return [
      "name" => $this->faker->name,
      "workspace_id" => $workspace->id,
    ];
  }
}
