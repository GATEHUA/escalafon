<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function administrativo()
    {
        return $this->hasOne(Administrativo::class);
    }
    public function docente()
    {
        return $this->hasOne(Docente::class);
    }
    public function familia()
    {
        return $this->hasMany(Familia::class);
    }
    public function neducativo()
    {
        return $this->hasMany(Neducativo::class);
    }
    public function exlaboral()
    {
        return $this->hasMany(Exlaboral::class);
    }
    public function exdocente()
    {
        return $this->hasMany(Exdocente::class);
    }
    public function otrotrabajo()
    {
        return $this->hasMany(Otrotrabajo::class);
    }
    public function documento()
    {
        return $this->hasMany(Documento::class);
    }
    public function resolucionesycontrato()
    {
        return $this->hasMany(Resolucionesycontrato::class);
    }



    // public function docente()
    // {
    //     return $this->hasOne(Docente::class);
    // }

    protected $fillable = [
        'fecha_Ingreso_undac',
        'nombra_fecha',
        'condicion',
        'situacion',
        'foto',
        'estado',
        'fecha_jubilacion',
        'nombres',
        'apellido_paterno',
        'apellido_materno',
        'genero',
        'fecha_nacimiento',
        'pais',
        'departamento',
        'provincia',
        'distrito',
        'tipo_documento',
        'dni',
        'carnet_extranjeria',
        'partida_nacimiento',
        'otro_documento',
        'regimen_pensionario',
        'nombre_afp',
        'ruc',
        'estado_civil',
        'domicilio_actual',
        'distrito_domicilio',
        'provincia_domicilio',
        'departamento_domicilio',
        'email',
        'telefono_fijo',
        'telefono_celular',
        'codigo',
        'val_dni',
        'regimen_laboral',



    ];
}
