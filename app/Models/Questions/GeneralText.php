<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\GeneralTextResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralText extends Model
{
  use HasFactory;

  protected $table = "general_text_questions";

  protected $fillable = [
    "text_type",
    "min",
    "max",
    "format",
    "error_message",
    "placeholder",
    "hide_question_number",
  ];

  protected $casts = [
    "hide_question_number" => "boolean",
  ];

  public function getResource(): GeneralTextResource
  {
    return new GeneralTextResource($this);
  }

  public static function getRules(mixed $type): array {
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

    if ($type === "all") return $text_rules;
    return $text_rules[$type] ?? [];
  }
}
