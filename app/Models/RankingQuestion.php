<?php

namespace App\Models;

use App\Http\Resources\RankingResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Http\Resources\Json\ResourceCollection;

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

    public function getResource(): ResourceCollection
    {
        return new RankingResource($this);
    }
}
