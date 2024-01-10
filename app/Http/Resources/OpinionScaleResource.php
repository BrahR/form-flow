<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OpinionScaleResource extends JsonResource
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
            "type" => "OpinionScale",
            "steps" => $this->steps,
            "labels" => $this->labels,
            "start_at_one" => $this->start_at_one,
            "hide_question_number" => $this->hide_question_number,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at
        ];
    }
}
