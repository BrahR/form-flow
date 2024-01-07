<?php

namespace App\Models;

use App\Http\Resources\OpinionScaleResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OpinionScaleQuestion extends Model
{
    use HasFactory;

    protected $casts = [
        'labels' => AsCollection::class,
    ];

    protected $fillable = [
        'steps',
        'labels',
        'start_at_zero',
        'hide_question_number',
    ];

    public function getResource(): ResourceCollection
    {
        return new OpinionScaleResource($this);
    }
}
