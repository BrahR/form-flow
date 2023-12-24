<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\WorkspaceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post("/logout", [AuthController::class, "logout"]);

    // needs changes
    Route::get("/dashboard", [DashboardController::class, "index"]);
    Route::get("/workspace/{workspace}", [WorkspaceController::class, "show"]);
    Route::post("/workspace/create", [WorkspaceController::class, "store"]);
    Route::post("/workspace/update/{workspace}", [WorkspaceController::class, "update"]);
    Route::delete("/workspace/delete/{workspace}", [WorkspaceController::class, "delete"]);

    Route::get("/workspace/{workspace}/survey", [SurveyController::class, "index"]);
    Route::get("/workspace/survey/{survey}", [SurveyController::class, "show"]);
    Route::post("/workspace/{workspace}/survey/create", [SurveyController::class, "store"]);
    Route::put("/survey/{survey}", [SurveyController::class, "update"]);

    Route::group(["prefix" => "/survey/{survey}/question"], function () {
        Route::get("/", [QuestionController::class, "index"]);
        Route::post("/", [QuestionController::class, "store"]);
        Route::get("/{question}", [QuestionController::class, "show"]);
        Route::put("/{question}", [QuestionController::class, "update"]);
        Route::delete("/{question}", [QuestionController::class, "delete"]);
    });
});

Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);
