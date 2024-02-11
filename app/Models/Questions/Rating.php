<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\RatingResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
  use HasFactory;

  protected $table = "rating_questions";

  protected $fillable = [
    "rating_type",
    "rating_value",
    "hide_question_number",
  ];

  protected $casts = [
    "hide_question_number" => "boolean",
  ];

  public function getResource(): RatingResource
  {
    return new RatingResource($this);
  }
}
