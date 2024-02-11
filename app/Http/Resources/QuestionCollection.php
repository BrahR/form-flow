<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

/** @see \App\Models\Question */
class QuestionCollection extends ResourceCollection
{
  public function toArray(Request $request): array
  {
    return [
      "data" => $this->collection,
      "questions_count" => $this->collection->count(),
    ];
  }
}
