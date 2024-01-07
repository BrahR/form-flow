<?php

namespace App\Models;

use App\Http\Resources\WelcomeResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Http\Resources\Json\ResourceCollection;

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

    public function getResource(): ResourceCollection
    {
        return new WelcomeResource($this);
    }
}
