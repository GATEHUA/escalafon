<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exlabprivada extends Model
{
    use HasFactory;
    public function exlaboral()
    {
        return $this->belongsTo(Exlaboral::class);
    }
    protected $fillable = [
        'empresa_elpr'
    ];
}
