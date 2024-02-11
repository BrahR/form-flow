<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
  public function rules(): array
  {
    return [
      "email" => ["required", "email", "unique:users,email"],
      "password" => ["required", "string", "confirmed", "min:8"],
    ];
  }

  public function authorize(): bool
  {
    return true;
  }
}
