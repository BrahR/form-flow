<?php

namespace App\Models\Questions;

use App\Http\Resources\Questions\StatementResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statement extends Model
{
  use HasFactory;

  protected $table = "statement_questions";

  protected $fillable = [
    "button_text",
  ];

  public function getResource(): StatementResource
  {
    return new StatementResource($this);
  }
}
