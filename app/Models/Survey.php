<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Survey extends Model
{
  use HasFactory;

  protected $fillable = [
    "name",
  ];

  protected $casts = [
    "is_active" => "boolean",
  ];

  protected static function boot(): void
  {
    parent::boot();

    static::creating(function ($survey) {
      $link = Str::random(10);
      $survey->link = Survey::where("link", $link)->exists() ? Str::random(10) : $link;
    });
  }

  public function workspace(): BelongsTo
  {
    return $this->belongsTo(Workspace::class);
  }

  public function questions(): HasMany
  {
    return $this->hasMany(Question::class);
  }
}
