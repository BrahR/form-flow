<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Question */
class QuestionResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "survey_id" => $this->survey_id,
      'html_label' => $this->html_label,
      'html_description' => $this->html_description,
      'attachment' => $this->attachment,
      'required' => $this->required,
      'questionable' => $this->questionable->getResource(),
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
