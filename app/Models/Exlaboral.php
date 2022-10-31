<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exlaboral extends Model
{
    use HasFactory;
    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }
    public function exlabprivada()
    {
        return $this->hasOne(Exlabprivada::class);
    }
    public function exlabpublica()
    {
        return $this->hasOne(Exlabpublica::class);
    }
    protected $fillable = [
        'cargo_desempeniado_el',
        'fecha_inicio_el',
        'fecha_culminacion_el',
        't_lugar_ex_el',
    ];
}
