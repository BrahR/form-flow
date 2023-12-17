<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreQuestionRequest extends FormRequest
{

    public $type_rules = [
        "Welcome" => [
            "questionable.button_text" => ["required", "string"],
        ],
    ];

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
        $initial_rules = [
            "type" => ["bail", "required", "string", "in:" . implode(",", array_keys($this->type_rules))],
            "question.html_label" => ["required", "string"],
            "question.html_description" => ["nullable", "string"],
            "question.attachment" => ["nullable", "string"],
            "questionable" => ["array", "required"],
        ];

        $type_rule = $this->type_rules[$this->type] ?? [];

        return array_merge($initial_rules, $type_rule);
    }
}
