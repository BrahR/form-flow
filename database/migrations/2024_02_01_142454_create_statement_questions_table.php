<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('statement_questions', function (Blueprint $table) {
      $table->id();
      $table->string('button_text');
      $table->boolean("hide_question_number");
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('statement_questions');
  }
};
