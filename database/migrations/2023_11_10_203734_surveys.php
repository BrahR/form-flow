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
        Schema::create("surveys", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->boolean("is_active")->default(false);
            $table->string("link")->unique();
            $table->foreignId("workspace_id")->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table("surveys", function (Blueprint $table) {
            $table->dropForeign(["workspace_id"]);
        });
        Schema::dropIfExists("surveys");
    }
};
