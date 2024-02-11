<?php

use App\Http\Controllers\AuthController;
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


  // needs changes
  Route::get("/workspaces", [WorkspaceController::class, "index"]);
  Route::post("/workspaces", [WorkspaceController::class, "store"]);
  Route::get("/workspaces/{workspace}", [WorkspaceController::class, "show"]);
  Route::put("/workspaces/{workspace}", [WorkspaceController::class, "update"]);
  Route::delete("/workspaces/{workspace}", [WorkspaceController::class, "destroy"]);

  Route::get("/workspaces/{workspace}/surveys", [SurveyController::class, "index"]);
  Route::post("/workspaces/{workspace}/surveys", [SurveyController::class, "store"]);
  Route::get("/workspaces/surveys/{survey}", [SurveyController::class, "show"]);

  Route::get("/surveys/{survey:link}", [SurveyController::class, "show"]);
  Route::put("/surveys/{survey}", [SurveyController::class, "update"]);

  Route::group(["prefix" => "/surveys/{survey}/questions"], function () {
    Route::get("/", [QuestionController::class, "index"]);
    Route::post("/", [QuestionController::class, "store"]);
    Route::get("/{question}", [QuestionController::class, "show"]);
    Route::put("/{question}", [QuestionController::class, "update"]);
    Route::delete("/{question}", [QuestionController::class, "destroy"]);
  });
});

Route::post("/register", [AuthController::class, "register"]);
Route::post("/logout", [AuthController::class, "logout"]);
Route::post("/login", [AuthController::class, "login"]);
