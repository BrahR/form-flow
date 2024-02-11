<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Workspace;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkspaceMemberFactory extends Factory
{
  public function definition(): array
  {
    $user = User::find(1);
    $workspace = Workspace::inRandomOrder()->first();
    return [
      "workspace_id" => $workspace->id,
      "user_id" => $user->id,
    ];
  }
}
