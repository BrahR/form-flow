<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RankingResource extends JsonResource
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
            "type" => "Ranking",
            "choices" => $this->choices,
            "randomize" => $this->randomize,
            "fix_numbers" => $this->fix_numbers,
            "hide_question_number" => $this->hide_question_number,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at
        ];
    }
}
