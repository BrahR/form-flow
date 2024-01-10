<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GeneralTextResource extends JsonResource
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
            "type" => "GeneralText",
            "text_type" => $this->text_type,
            "min" => $this->min,
            "max" => $this->max,
            "format" => $this->format,
            "error_message" => $this->error_message,
            "placeholder" => $this->placeholder,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
