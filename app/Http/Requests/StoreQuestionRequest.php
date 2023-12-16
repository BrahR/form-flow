<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule | array | string>
     */
    public function rules(): array
    {
        return [
            "html_label" => ["required", "string"],
            "html_description" => ["optional", "string"],
            "attachment" => ["optional", "string"],
            "type" => ["required", "integer"],
            "survey_id" => ["required", "exists:surveys,id"],
        ];
    }
}
