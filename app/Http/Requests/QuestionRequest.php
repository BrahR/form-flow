<?php

namespace App\Http\Requests;

use App\Models\Question;
use App\Models\Questions\GeneralText;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class QuestionRequest extends FormRequest
{
  public function rules(): array
  {
    $rules = [
      "type" => ["required", "string", "in:" . implode(",", array_keys(Question::getRules("all")))],
      "question.html_label" => ["required"],
      "question.html_description" => ["nullable"],
      "question.attachment" => ["nullable"],
      "questionable" => ["array", "required"],
    ];

    return array_merge(
      $rules,
      Question::getRules($this->input("type")),
      GeneralText::getRules($this->input("questionable.text_type"))
    );
  }

  public function after(): array
  {
    return [
      function (Validator $validator) {
        if (in_array($this->input("type"), ["Welcome", "Ending"])) {
          $uniqueExists = Question::with("questionable")
            ->where("survey_id", $this->route("survey")->id)
            ->whereHasMorph("questionable", "App\\Models\\Questions\\" . $this->input("type"))
            ->get();

          if ($uniqueExists->isNotEmpty()) {
            $validator->errors()->add("type", "Only one " . $this->input("type") . " question is allowed");
          }
        }
      }
    ];
  }

  public function authorize(): bool
  {
    return true;
  }
}
