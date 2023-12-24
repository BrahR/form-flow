<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreQuestionRequest extends FormRequest
{
    public static $text_types_rules = [
        "text" => [
            "questionable.min" => ["required", "numeric", "min:0"],
            "questionable.max" => ["required", "numeric", "min:0", "max:200"],
        ],
        "long-text" => [
            "questionable.min" => ["required", "numeric", "min:0"],
            "questionable.max" => ["required", "numeric", "min:0", "max:5000"],
        ],
        "date" => [
            "questionable.format" => ["required", "string"],
            "questionable.error_message" => ["required", "string"],
        ],
        "phone-number" => [
            "questionable.default_country" => ["required", "string"],
            "questionable.placeholder" => ["required", "string"],
            "questionable.error_message" => ["required", "string"],
        ],
        "english-letter" => [
            "questionable.placeholder" => ["required", "string"],
            "questionable.error_message" => ["required", "string"],
        ],
        "time" => [
            "questionable.format" => ["required", "string"],
            "questionable.error_message" => ["required", "string"],
        ],
        "custom" => [
            "questionable.placeholder" => ["required", "string"],
            "questionable.format" => ["required", "string"],
            "questionable.error_message" => ["required", "string"],
        ]
    ];

    public static $type_rules = [
        "Welcome" => [
            "questionable.button_text" => ["required", "string"],
        ],
        "GeneralText" => [],
        "MultipleChoice" => [
            "questionable.options" => ["required", "array"],
            "questionable.options.*.label" => ["required", "string"],
            "questionable.options.*.value" => ["required", "string"],
        ],
        "ShortAnswer" => [
            "questionable.placeholder" => ["required", "string"],
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
        self::$type_rules["GeneralText"] =  [
            "questionable.text_type" => ["required", "string", "in:" . implode(",", array_keys(self::$text_types_rules))],
        ];

        $initial_rules = [
            "type" => ["bail", "required", "string", "in:" . implode(",", array_keys(self::$type_rules))],
            "question.html_label" => ["required", "string"],
            "question.html_description" => ["nullable", "string"],
            "question.attachment" => ["nullable", "string"],
            "questionable" => ["array", "required"],
        ];

        $type_rules = self::$type_rules[$this->type] ?? [];
        $text_rules = self::$text_types_rules[$this->questionable["text_type"] ?? ""] ?? [];

        return array_merge($initial_rules, $type_rules, $text_rules);
    }
}
