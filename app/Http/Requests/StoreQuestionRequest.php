<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Closure;

class StoreQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    
    public function textTypeRules($key): array
    {
        $text_rules = [
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

        if ($key == "all") return $text_rules;

        return $text_rules[$key] ?? [];
    }

    public function questionTypeRules($key): array
    {
        $type_rules = [
            "Welcome" => [
                "questionable.button_text" => ["required", "string"],
            ],
            "GeneralText" => [
                "questionable.text_type" => ["required", "string", "in:" . implode(",", array_keys($this->textTypeRules('all')))],
            ],
            "MultipleChoice" => [
                "questionable.choices" => ["required", "array", "between:2,40", function (string $attribute, mixed $value, Closure $fail) {
                    $isChoiceEmpty = collect($value)->some(function ($choice, $key) {
                        return $choice["value"] == "" && $choice["hidden"] == false;
                    });

                    if ($isChoiceEmpty) $fail("Choices must not be empty");

                    $isChoiceDuplicated = collect($value)->some(function ($choice, $key) use ($value) {
                        return collect($value)->map(function ($val) {
                            return [
                                "value" => $val["value"],
                                "hidden" => $val["hidden"],
                            ];
                        })->where("value", $choice["value"])->where("hidden", false)->count() > 1;
                    });

                    if ($isChoiceDuplicated) $fail("Choices must be unique");
                }],
                "questionable.choices.*.value" => ["required", "string"],
                "questionable.choices.*.hidden" => ["required", "boolean"],
                "questionable.randomize" => ["required", "boolean"],
                "questionable.vertical_display" => ["required", "boolean"],
                "questionable.multiple_answers" => ["required", "boolean"],
                "questionable.min_answers" => ["required_if:questionable.multiple_answers,true", "numeric", "min:1"],
                "questionable.max_answers" => ["required_if:questionable.multiple_answers,true", "numeric", "min:2"],
                "questionable.hide_question_number" => ["required", "boolean"],
            ],
            "PictureChoice" => [
                "questionable.choices" => ["required", "array", "between:2,40", function (string $attribute, mixed $value, Closure $fail) {
                    $isChoiceEmpty = collect($value)->some(function ($choice, $key) {
                        return $choice["image"] == "" && $choice["hidden"] == false;
                    });

                    if ($isChoiceEmpty) $fail("Choices can not be empty");
                }],
                "questionable.choices.*.image" => ["required", "string"],
                "questionable.choices.*.hidden" => ["required", "boolean"],
                "questionable.randomize" => ["required", "boolean"],
                "questionable.double_display_size" => ["required", "boolean"],
                "questionable.multiple_answers" => ["required", "boolean"],
                "questionable.min_answers" => ["required_if:questionable.multiple_answers,true", "numeric", "min:1"],
                "questionable.max_answers" => ["required_if:questionable.multiple_answers,true", "numeric", "min:2"],
                "questionable.hide_question_number" => ["required", "boolean"],
            ],
            "OpinionScale" => [
                "questionable.steps" => ["required", "numeric", "min:2", "max:11"],
                "questionable.labels" => ["required", "array", "between:2,11"],
                "questionable.labels.right" => ["nullable", "string"],
                "questionable.labels.center" => ["nullable", "string"],
                "questionable.labels.left" => ["nullable", "string"],
                "questionable.start_at_zero" => ["required", "boolean"],
                "questionable.hide_question_number" => ["required", "boolean"],
            ],
        ];

        if ($key == "all") return $type_rules;

        return $type_rules[$key] ?? [];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule | array | string>
     */
    public function rules(): array
    {
        $initial_rules = [
            "type" => ["bail", "required", "string", "in:" . implode(",", array_keys($this->questionTypeRules('all')))],
            "question.html_label" => ["required", "string"],
            "question.html_description" => ["nullable", "string"],
            "question.attachment" => ["nullable", "string"],
            "questionable" => ["array", "required"],
        ];

        $type_rules = $this->questionTypeRules($this->input("type"));
        $text_rules = $this->textTypeRules($this->input("questionable.text_type"));
        // $this->questionable["text_type"] ?? ""

        return array_merge($initial_rules, $type_rules, $text_rules);
    }
}
