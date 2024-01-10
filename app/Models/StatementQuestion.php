<?php

namespace App\Models;

use App\Http\Resources\StatementResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatementQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        "button_text",
        "hide_question_number",
    ];

    public function getResource(): StatementResource
    {
        return new StatementResource($this);
    }
}
