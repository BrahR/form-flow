<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\OpinionScaleResource;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpinionScale extends Model
{
  use HasFactory;

  protected $table = "opinion_scale_questions";

  protected $fillable = [
    "steps",
    "labels",
    "start_at_zero",
    "hide_question_number",
  ];

  protected $casts = [
    "labels" => AsCollection::class,
    "start_at_zero" => "boolean",
    "hide_question_number" => "boolean",
  ];

  public function getResource(): OpinionScaleResource
  {
    return new OpinionScaleResource($this);
  }
}
