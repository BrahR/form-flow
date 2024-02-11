<?php

namespace App\Http\Requests\questions;

use Illuminate\Foundation\Http\FormRequest;

class PictureChoiceRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'choices' => ['required'],
            'randomize' => ['boolean'],
            'vertical_display' => ['boolean'],
            'multiple_answers' => ['boolean'],
            'min_answers' => ['required', 'integer'],
            'max_answers' => ['required', 'integer'],
            'hide_question_number' => ['boolean'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
