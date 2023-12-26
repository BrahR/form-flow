<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsCollection;

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
}
