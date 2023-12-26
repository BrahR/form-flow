<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsCollection;

class RankingQuestion extends Model
{
    use HasFactory;

    protected $casts = [
        "choices" => AsCollection::class,
    ];

    protected $fillable = [
        "choices",
        "randomize",
        "fix_numbers",
        "hide_question_number",
    ];
}
