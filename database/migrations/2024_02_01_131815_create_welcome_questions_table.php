<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('welcomes_questions', function (Blueprint $table) {
      $table->id();
      $table->string('button_text');
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('welcomes_questions');
  }
};
