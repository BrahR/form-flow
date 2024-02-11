<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('multiple_choices_questions', function (Blueprint $table) {
            $table->id();
            $table->json('choices');
            $table->boolean('randomize');
            $table->boolean('vertical_display');
            $table->boolean('multiple_answers');
            $table->integer('min_answers');
            $table->integer('max_answers');
            $table->boolean('hide_question_number');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('multiple_choices_questions');
    }
};
