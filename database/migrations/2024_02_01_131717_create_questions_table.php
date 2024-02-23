<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void
  {
    Schema::create('Questions', function (Blueprint $table) {
      $table->id();
      $table->string('html_label');
      $table->string('html_description')->nullable();
      $table->string('attachment')->nullable();
      $table->boolean('required')->default(false);
      $table->morphs('questionable');
      $table->foreignId('survey_id')->constrained();
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::table("Questions", function (Blueprint $table) {
      $table->dropMorphs("questionable");
    });
    Schema::dropIfExists('Questions');
  }
};
