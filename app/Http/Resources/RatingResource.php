<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RatingResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "type" => "Rating",
            "rating_type" => $this->rating_type,
            "rating_value" => $this->rating_value,
            "hide_question_number" => $this->hide_question_number,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at
        ];
    }
}
