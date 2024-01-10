<?php

namespace App\Models;

use App\Http\Resources\MultipleChoiceResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsCollection;

class MultipleChoiceQuestion extends Model
{
    use HasFactory;

    protected $casts = [
        'choices' => AsCollection::class,
    ];

    protected $fillable = [
        'choices',
        'randomize',
        'vertical_display',
        'multiple_answers',
        'min_answers',
        'max_answers',
        'hide_question_number',
    ];

    public function getResource(): MultipleChoiceResource
    {
        return new MultipleChoiceResource($this);
    }
}
