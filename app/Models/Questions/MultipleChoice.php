<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\MultipleChoiceResource;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MultipleChoice extends Model
{
  use HasFactory;

  protected $table = "multiple_choices_questions";

  protected $fillable = [
    "choices",
    "randomize",
    "vertical_display",
    "multiple_answers",
    "min_answers",
    "max_answers",
    "hide_question_number",
  ];

  protected $casts = [
    "choices" => AsCollection::class,
    "randomize" => "boolean",
    "vertical_display" => "boolean",
    "multiple_answers" => "boolean",
    "hide_question_number" => "boolean",
  ];

  public function getResource(): MultipleChoiceResource
  {
    return new MultipleChoiceResource($this);
  }
}
