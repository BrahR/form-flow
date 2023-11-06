<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): Response {
        $data = $request->validated();
        $data["password"] = bcrypt($data["password"]);

        $user = User::create($data);
        $token = $user->createToken("auth_token")->plainTextToken;

        return response([
            "user" => $user,
            "token" => $token,
        ]);
    }

    public function login(LoginRequest $request): Response {
        $credentials = $request->validated();
        $remember_me = $credentials["remember_me"] ?? false;
        unset($credentials["remember_me"]);

        if (!Auth::attempt($credentials, $remember_me)) {
            return response([
                "message" => "Invalid credentials",
            ], ResponseAlias::HTTP_UNAUTHORIZED);
        }

        /** @var $user User **/
        $user = Auth::user();
        $token = $user->createToken("auth_token")->plainTextToken;

        return response([
            "user" => $user,
            "token" => $token,
        ]);
    }

    public function logout(): Response {
        /** @var $user User **/
        $user = Auth::user();
        $user->tokens()->delete();

        return response([
            "success" => true,
        ]);
    }
}
