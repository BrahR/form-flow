<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatementQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        "button_text",
        "hide_question_number",
    ];
}
