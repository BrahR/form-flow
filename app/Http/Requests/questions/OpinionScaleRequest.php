<?php

namespace App\Http\Requests\questions;

use Illuminate\Foundation\Http\FormRequest;

class OpinionScaleRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'labels' => ['required'],
            'steps' => ['required', 'integer'],
            'start_at_zero' => ['boolean'],
            'hide_question_number' => ['boolean'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
