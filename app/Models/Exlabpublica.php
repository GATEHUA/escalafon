<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exlabpublica extends Model
{
    use HasFactory;
    public function exlaboral()
    {
        return $this->belongsTo(Exlaboral::class);
    }
    protected $fillable = [
        'dependencia_elpu',
        'tipo_elpu',
        'num_tipo_elpu',
    ];
}
