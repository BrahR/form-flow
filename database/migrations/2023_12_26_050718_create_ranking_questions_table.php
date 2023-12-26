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
        Schema::create('ranking_questions', function (Blueprint $table) {
            $table->id();
            $table->json("choices");
            $table->boolean("randomize")->default(false);
            $table->boolean("fix_numbers")->default(false);
            $table->boolean("hide_question_number")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ranking_questions');
    }
};
