<?php

namespace App\Http\Resources\Questions;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Questions\Rating */
class RatingResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "type" => "Rating",
      'rating_type' => $this->rating_type,
      'rating_value' => $this->rating_value,
      'hide_question_number' => $this->hide_question_number,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
