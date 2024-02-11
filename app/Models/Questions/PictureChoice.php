<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\PictureChoiceResource;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PictureChoice extends Model
{
  use HasFactory;

  protected $table = "picture_choice_questions";

  protected $fillable = [
    "choices",
    "randomize",
    "vertical_answers",
    "multiple_answers",
    "min_answers",
    "max_answers",
    "hide_question_number",
    "double_display_size",
  ];

  protected $casts = [
    "choices" => AsCollection::class,
    "randomize" => "boolean",
    "vertical_answers" => "boolean",
    "multiple_answers" => "boolean",
    "hide_question_number" => "boolean",
  ];

  public function getResource(): PictureChoiceResource
  {
    return new PictureChoiceResource($this);
  }
}
