<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RatingQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        "rating_type",
        "rating_value",
        "hide_question_number",
    ];
}
