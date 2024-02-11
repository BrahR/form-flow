<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('opinion_scale_questions', function (Blueprint $table) {
      $table->id();
      $table->json('labels');
      $table->integer('steps');
      $table->boolean('start_at_zero')->default(false);
      $table->boolean('hide_question_number')->default(false);
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('opinion_scale_questions');
  }
};
