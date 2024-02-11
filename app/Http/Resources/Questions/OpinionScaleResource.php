<?php

namespace App\Http\Resources\Questions;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Questions\OpinionScale */
class OpinionScaleResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "type" => "OpinionScale",
      'steps' => $this->steps,
      'labels' => $this->labels,
      'start_at_zero' => $this->start_at_zero,
      'hide_question_number' => $this->hide_question_number,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
