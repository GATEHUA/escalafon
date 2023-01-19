<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resolucionesycontrato extends Model
{
    use HasFactory;
    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }
    protected $fillable = [
        'cod_res',
        'tipo_res',
        'fecha_dic_res',
        'des_art_pri_res',
        'vigencia_res',
        'categoria_alcanz_res',
        'nivel_alcanz_res',
        'antiguedad_in_res',
        'antiguedad_sa_res',
        'condicion_res',
        'dependencia_res',
        'observacion_res',
        'documento_val_res',
    ];
}
