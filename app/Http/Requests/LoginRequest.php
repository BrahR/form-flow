<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
  public function rules(): array
  {
    return [
      "email" => ["required", "email", "exists:users,email"],
      "password" => ["required", "string"],
      "remember_me" => ["boolean"]
    ];
  }

  public function authorize(): bool
  {
    return true;
  }
}
