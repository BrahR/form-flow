<?php

namespace App\Models;

use App\Models\Questions\GeneralText;
use Closure;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Question extends Model
{
  use HasFactory;

  protected $fillable = [
    "html_label",
    "described",
    "html_description",
    "attachment",
    "required",
  ];

  protected $casts = [
    "required" => "boolean",
  ];

  public function survey(): BelongsTo
  {
    return $this->belongsTo(Survey::class);
  }

  public function questionable(): MorphTo
  {
    return $this->morphTo();
  }

//  I prefer to have this in one file instead of each question type
  public static function getRules(mixed $type): array {
    $type_rules = [
      "Welcome" => [
        "questionable.button_text" => ["required", "string"],
      ],
      "GeneralText" => [
        "questionable.text_type" => ["required", "string", "in:" . implode(",", array_keys(GeneralText::getRules("all")))],
      ],
      "MultipleChoice" => [
        "questionable.choices" => ["required", "array", "between:2,40", function (string $attribute, mixed $value, Closure $fail) {
          $isChoiceEmpty = collect($value)->some(function ($choice, $key) {
            return $choice["value"] === "" && $choice["hidden"] === false;
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
            return $choice["image"] === "" && $choice["hidden"] === false;
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
      "Rating" => [
        "questionable.rating_type" => ["required", "integer", "min:0", "max:2"],
        "questionable.rating_value" => ["required", "integer", "min:1", "max:10"],
        "questionable.hide_question_number" => ["required", "boolean"],
      ],
      "Ranking" => [
        "questionable.choices" => ["required", "array", "between:2,40", function (string $attribute, mixed $value, Closure $fail) {
          $isChoiceEmpty = collect($value)->filter(function ($choice, $key) {
              return $choice["value"] !== "";
            })->count() < 2;

          if ($isChoiceEmpty) $fail("At least 2 choices must not be empty");

          $isChoiceDuplicated = collect($value)->some(function ($choice, $key) use ($value) {
            return collect($value)->where("value", $choice["value"])->count() > 1;
          });

          if ($isChoiceDuplicated) $fail("Choices must be unique");
        }],
        "questionable.choices.*.id" => ["required", "integer"],
        "questionable.choices.*.value" => ["required", "string"],
        "questionable.randomize" => ["required", "boolean"],
        "questionable.fix_numbers" => ["required", "boolean"],
        "questionable.hide_question_number" => ["required", "boolean"],
      ],
      "Statement" => [
        "questionable.button_text" => ["required", "string"],
        "questionable.hide_question_number" => ["required", "boolean"],
      ]
    ];

    if ($type === "all") return $type_rules;
    return $type_rules[$type] ?? [];
  }
}
