<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class StatementResource extends ResourceCollection
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
            "type" => "Statement",
            "button_next" => $this->button_next,
            "hide_question_number" => $this->hide_question_number,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at
        ];
    }
}
