<?php

namespace App\Http\Resources\Questions;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Questions\Ranking */
class RankingResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "type" => "Ranking",
      'choices' => $this->choices,
      'randomize' => $this->randomize,
      'fix_numbers' => $this->fix_numbers,
      'hide_question_number' => $this->hide_question_number,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
