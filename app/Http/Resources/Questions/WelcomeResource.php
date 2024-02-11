<?php

namespace App\Http\Resources\Questions;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Questions\Welcome */
class WelcomeResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      "type" => "Welcome",
      'button_text' => $this->button_text,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
    ];
  }
}
