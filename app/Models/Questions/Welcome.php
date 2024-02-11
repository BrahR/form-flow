<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\WelcomeResource;
use App\Models\Question;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Welcome extends Model
{
  use HasFactory;

  protected $table = "welcomes_questions";

  protected $fillable = [
    "button_text",
  ];

  public function getResource(): WelcomeResource
  {
    return new WelcomeResource($this);
  }

  public function question(): MorphOne
  {
    return $this->morphOne(Question::class, "questionable");
  }
}
