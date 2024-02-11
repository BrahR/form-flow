<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Survey;
use App\Models\User;
use App\Models\Workspace;
use App\Models\WorkspaceMember;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // \App\Models\User::factory(10)->create();

    User::factory()->create([
      'email' => 'admin@example.com',
      'password' => bcrypt('password'),
    ]);

    Workspace::factory(10)->create();
    WorkspaceMember::factory(10)->create();
    Survey::factory(10)->create();
  }
}
