<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class AuthController extends Controller
{
  public function register(RegisterRequest $request): JsonResponse
  {
    $validatedData = $request->validated();
    $validatedData["password"] = bcrypt($validatedData["password"]);
    $user = User::create($validatedData);
    $token = $user->createToken("auth_token")->plainTextToken;

    return response()->json([
      "user" => $user,
      "token" => $token,
    ]);
  }

  public function login(LoginRequest $request): JsonResponse
  {
    $credentials = $request->validated();
    $remember_me = $credentials["remember_me"] ?? false;
    unset($credentials["remember_me"]);

    if (!auth()->attempt($credentials, $remember_me)) {
      return response()->json([
        "message" => "Invalid credentials",
      ], Response::HTTP_UNAUTHORIZED);
    }

    $user = auth()->user();
    $token = $user->createToken("auth_token")->plainTextToken;

    return response()->json([
      "user" => $user,
      "token" => $token,
    ]);
  }

  public function logout(): JsonResponse
  {
    $user = auth()->user();
    $user->tokens()->delete();

    return response()->json([
      "message" => "Logged out",
    ]);
  }
}
