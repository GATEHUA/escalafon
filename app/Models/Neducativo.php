<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Neducativo extends Model
{
    use HasFactory;

    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }

    protected $fillable = [
        'nivel_educativo_ne',
        'etapa_ne',
        'nombre_institucion_ne',
        'descripcion_ne',
        'fecha_culminacion_ne',
        'documento_val_ne',
    ];
}
