<?php

namespace App\Http\Requests\questions;

use Illuminate\Foundation\Http\FormRequest;

class RatingRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => ['required', 'integer'],
            'value' => ['required', 'integer'],
            'hide_question_number' => ['required', 'integer'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
