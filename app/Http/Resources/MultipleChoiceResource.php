<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MultipleChoiceResource extends ResourceCollection
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
            "type" => "MultipleChoice",
            "choices" => $this->choices,
            "randomize" => $this->randomize,
            "vertical_display" => $this->vertical_display,
            "multiple_answers" => $this->multiple_answers,
            "min_answers" => $this->min_answers,
            "max_answers" => $this->max_answers,
            "hide_question_number" => $this->hide_question_number,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
