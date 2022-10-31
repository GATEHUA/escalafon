<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otrotrabajo extends Model
{
    use HasFactory;
    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }
    protected $fillable = [
        'estado_ot',
        'cargo_ot',
        'nombre_institucion_ot',
        'frecuencia_diaria_ot',
        'hora_entrada_ot',
        'hora_salida_ot',
    ];
}
