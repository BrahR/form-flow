<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Workspace extends Model
{
    use HasFactory;

    protected $fillable = [
        "name"
    ];

    public function users(): BelongsToMany {
        return $this->BelongsToMany(User::class, 'workspace_members');
    }

    public function surveys(): HasMany {
        return $this->hasMany(Survey::class);
    }
}
