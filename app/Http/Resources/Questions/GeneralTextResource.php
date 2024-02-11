<?php

namespace App\Http\Resources\Questions;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Questions\GeneralText */
class GeneralTextResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "type" => "GeneralText",
      'text_type' => $this->text_type,
      'min' => $this->min,
      'max' => $this->max,
      'format' => $this->format,
      'error_message' => $this->error_message,
      'placeholder' => $this->placeholder,
      'hide_question_number' => $this->hide_question_number,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
