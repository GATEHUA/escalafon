<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Familia extends Model
{
    use HasFactory;

    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }

    protected $fillable = [
        't_relacion_f',
        'apellidos_nombres_f',
        'tipo_documento_f',
        'dni_f',
        'carnet_extranjeria_f',
        'partida_nacimiento_f',
        'otro_documento_f',
        'genero_f',
        'fecha_nacimiento_f',
        'estado_civil_f',
        'estado_v_m_f',
        'nacionalidad_f',
    ];
}
