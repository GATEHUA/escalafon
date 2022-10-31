<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Docente extends Model
{
    use HasFactory;
    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }

    protected $fillable = [
        //'personal_id',
        'docente_t',
        'dedicacion_t',
        'docente_t_nivel',
        'horas_d'
    ];
}
