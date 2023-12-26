<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('picture_choice_questions', function (Blueprint $table) {
            $table->id();
            $table->json('choices');
            $table->boolean('randomize')->default(false);
            $table->boolean('vertical_display')->default(false);
            $table->boolean('multiple_answers')->default(false);
            $table->integer('min_answers')->default(1);
            $table->integer('max_answers')->default(2);
            $table->boolean('hide_question_number')->default(false);
            $table->boolean('double_display_size')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('picture_choice_questions');
    }
};
