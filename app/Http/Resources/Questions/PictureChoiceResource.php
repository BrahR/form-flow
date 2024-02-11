<?php

namespace App\Http\Resources\Questions;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Questions\PictureChoice */
class PictureChoiceResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "type" => "PictureChoice",
      'choices' => $this->choices,
      'randomize' => $this->randomize,
      'vertical_answers' => $this->vertical_answers,
      'multiple_answers' => $this->multiple_answers,
      'min_answers' => $this->min_answers,
      'max_answers' => $this->max_answers,
      'hide_question_number' => $this->hide_question_number,
      'double_display_size' => $this->double_display_size,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
