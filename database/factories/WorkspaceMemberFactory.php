<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Workspace;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\WorkspaceMember>
 */
class WorkspaceMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
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
