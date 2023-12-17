<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class WelcomeQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'button_text',
    ];

    public function question(): MorphOne
    {
        return $this->morphOne(Question::class, 'questionable');
    }
}
