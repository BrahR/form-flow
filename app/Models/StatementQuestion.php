<?php

namespace App\Models;

use App\Http\Resources\StatementResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\ResourceCollection;

class StatementQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        "button_text",
        "hide_question_number",
    ];

    public function getResource(): ResourceCollection
    {
        return new StatementResource($this);
    }
}
