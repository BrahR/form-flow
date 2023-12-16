<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        "html_label",
        "html_description",
        "attachment",
        "type",
    ];

    public function survey(): BelongsTo
    {
        return $this->belongsTo(Survey::class);
    }

    public function getQuestionWithSubclass(): Question
    {
//        $question = $this->load("welcomeQuestion", "multipleChoiceQuestion", "openQuestion");
//        if ($question->welcomeQuestion) {
//            return $question->welcomeQuestion;
//        } else if ($question->multipleChoiceQuestion) {
//            return $question->multipleChoiceQuestion;
//        } else if ($question->openQuestion) {
//            return $question->openQuestion;
//        }
//        return $question;
    }
}
