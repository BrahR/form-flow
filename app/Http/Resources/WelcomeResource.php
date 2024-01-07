<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class WelcomeResource extends ResourceCollection
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
            "type" => "Welcome",
            "button_text" => $this->button_text,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
