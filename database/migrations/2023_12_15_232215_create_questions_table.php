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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string("html_label");
            $table->string("html_description")->nullable();
            $table->string("attachment")->nullable();
            $table->morphs("questionable");
            $table->foreignId("survey_id")->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("questions", function (Blueprint $table) {
            $table->dropForeign(["questionable_id", "questionable_type"]);
        });
        Schema::dropIfExists('questions');
    }
};
