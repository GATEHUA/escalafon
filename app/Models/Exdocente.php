<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exdocente extends Model
{
    use HasFactory;
    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }
    protected $fillable = [
        'institucion_ed',
        'catedra_ed',
        'categoria_ed',
        'regimen_pensionario_ed',
        'fecha_inicio_ed',
        'fecha_culminacion_ed',
    ];
}
