<?php

namespace App\Http\Requests\questions;

use Illuminate\Foundation\Http\FormRequest;

class WelcomeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'button_text' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
