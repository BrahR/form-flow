<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('rating_questions', function (Blueprint $table) {
      $table->id();
      $table->integer('type');
      $table->integer('value');
      $table->integer('hide_question_number')->default(false);
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('rating_questions');
  }
};
