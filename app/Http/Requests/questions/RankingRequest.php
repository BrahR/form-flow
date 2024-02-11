<?php

namespace App\Http\Requests\questions;

use Illuminate\Foundation\Http\FormRequest;

class RankingRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'choices' => ['required'],
            'randomize' => ['boolean'],
            'fix_numbers' => ['boolean'],
            'hide_question_number' => ['boolean'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
