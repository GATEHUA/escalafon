<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    use HasFactory;
    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }

    protected $fillable = [
        't_nombre_documento_d',
        'descripcion_documento_d',
        'documento_d',
        'fecha_documento_d',
    ];
}
