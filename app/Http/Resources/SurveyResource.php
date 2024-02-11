<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Survey */
class SurveyResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'name' => $this->name,
      'is_active' => $this->is_active,
      'link' => $this->link,
      "questions" => QuestionResource::collection($this->whenLoaded("questions")),
      'workspace_id' => $this->workspace_id,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}

