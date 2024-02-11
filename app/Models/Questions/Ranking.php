<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\RankingResource;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ranking extends Model
{
  use HasFactory;

  protected $table = "ranking_questions";

  protected $fillable = [
    "choices",
    "randomize",
    "fix_numbers",
    "hide_question_number",
  ];

  protected $casts = [
    "choices" => AsCollection::class,
    "randomize" => "boolean",
    "fix_numbers" => "boolean",
    "hide_question_number" => "boolean",
  ];

  public function getResource(): RankingResource
  {
    return new RankingResource($this);
  }
}
