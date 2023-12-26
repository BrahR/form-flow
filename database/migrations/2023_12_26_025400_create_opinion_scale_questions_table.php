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
        Schema::create('opinion_scale_questions', function (Blueprint $table) {
            $table->id();
            $table->integer("steps");
            $table->json("labels");
            $table->boolean("start_at_zero")->default(false);
            $table->boolean("hide_question_number")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opinion_scale_questions');
    }
};
