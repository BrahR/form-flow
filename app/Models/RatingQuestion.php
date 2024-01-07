<?php

namespace App\Models;

use App\Http\Resources\RatingResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\ResourceCollection;

class RatingQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        "rating_type",
        "rating_value",
        "hide_question_number",
    ];

    public function getResource(): ResourceCollection
    {
        return new RatingResource($this);
    }
}
