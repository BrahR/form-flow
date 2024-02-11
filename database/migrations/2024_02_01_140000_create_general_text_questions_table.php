<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('general_text_questions', function (Blueprint $table) {
      $table->id();
      $table->string('text_type');
      $table->integer('min')->nullable();
      $table->integer('max')->nullable();
      $table->string('format')->nullable();
      $table->string('error_message')->nullable();
      $table->string('placeholder')->nullable();
      $table->boolean('hide_question_number')->default(false);
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('general_text_questions');
  }
};
