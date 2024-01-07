<?php

namespace App\Models;

use App\Http\Resources\GeneralTextResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\ResourceCollection;

class GeneralTextQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'text_type',
        'min',
        'max',
        'format',
        'error_message',
        'placeholder',
    ];

    public function getResource(): ResourceCollection
    {
        return new GeneralTextResource($this);
    }
}
