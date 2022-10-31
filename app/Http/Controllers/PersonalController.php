<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Documento;
use App\Models\Exdocente;
use App\Models\Exlaboral;
use App\Models\Familia;
use App\Models\Neducativo;
use App\Models\Otrotrabajo;
use App\Models\Personal;
use App\Models\Resolucionesycontrato;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonalController extends Controller
{
    public function index()
    {
        return Inertia::render('Personal/Create', [
            'personal' => Personal::with(['user', 'administrativo', 'docente', 'familia', 'neducativo', 'exlaboral' => ['exlabprivada', 'exlabpublica'], 'exdocente', 'otrotrabajo', 'documento', 'resolucionesycontrato'])->latest('id')->get()
        ]);
    }

    public function create()
    {

        $user = Auth::id();;

        $personal = Personal::where('user_id', '=', $user)->latest('id')->first();


        // if ($user == $personal->user_id) {
        return Inertia::render('Personal/Create', [
            'personalData' => Personal::where('id', '=', $personal->id)->latest('id')->get(),
            'documentoData' => Documento::where('personal_id', '=', $personal->id)->latest('id')->get(),
            'exdocenteData' => Exdocente::where('personal_id', '=', $personal->id)->latest('id')->get(),
            'exlaboralData' => Exlaboral::where('personal_id', '=', $personal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
            'familiaData' => Familia::where('personal_id', '=', $personal->id)->latest('id')->get(),
            'neducativoData' => Neducativo::where('personal_id', '=', $personal->id)->latest('id')->get(),
            'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personal->id)->latest('id')->get(),
            'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personal->id)->latest('id')->get()
        ]);
        // } else {
        //     return Inertia::render('Personal/Create', [
        //         'personalData' => [],
        //         'documentoData' => [],
        //         'exdocenteData' => [],
        //         'exlaboralData' => [],
        //         'familiaData' => [],
        //         'neducativoData' => [],
        //         'otrotrabajoData' => [],
        //         'resolucionesycontratoData' => [],
        //     ]);
        // }
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            // 'user_id' => '',
            //PERSONAL:
            'fecha_Ingreso_undac' => '',
            'condicion' => '',
            'situacion' => '',
            'foto' => '',
            'facultad' => '',
            'escuela' => '',
            'estado' => '',
            'fecha_jubilacion' => '',
            'nombres' => '',
            'apellido_paterno' => '',
            'apellido_materno' => '',
            'genero' => '',
            'fecha_nacimiento' => '',
            'pais' => '',
            'departamento' => '',
            'provincia' => '',
            'distrito' => '',
            'dni' => '',
            'carnet_extranjeria' => '',
            'carnet_identidad' => '',
            'regimen_pensionario' => '',
            'nombre_afp' => '',
            'ruc' => '',
            'estado_civil' => '',
            'domicilio_actual' => '',
            'distrito_domicilio' => '',
            'provincia_domicilio' => '',
            'departamento_domicilio' => '',
            'email' => '',
            'telefono_fijo' => '',
            'telefono_celular' => '',
            'codigo' => '',
            'val_dni' => '',
            'regimen_laboral' => '',
            //ADMINISTRATIVO:
            'administrativo_t' => '',
            'administrativo_t_nivel' => '',
            'nivel_remunerativo' => '',
            //DOCENTE:
            'docente_t' => '',
            'docente_t_nivel' => '',
            'dedicacion_t' => '',
            'horas_d' => ''

        ]);
        // $validateAdministrativo = $request->validate([
        //     //'personal_id'=>'',
        //     'administrativo_t' => '',
        //     'nivel_remunerativo' => '',
        // ]);


        // dd($validate);

        if ($validate['foto'] != '') {
            $dtemporal = time() . '.' . $validate['foto']->extension();
            $validate['foto']->storeAs('fotoPer', $dtemporal, 'public');
            $validate['foto'] = $dtemporal;
        }
        if ($validate['val_dni'] != '') {
            $dtemporal = time() . '.' . $validate['val_dni']->extension();
            $validate['val_dni']->storeAs('Dni_I_Per', $dtemporal, 'public');
            $validate['val_dni'] = $dtemporal;
        }

        $request->user()->personal()->create($validate);
        // $personal =  Personal::create($validate);



        // $personaldata = Personal::find(2);
        $personal = Personal::latest('id')->first();
        // dd($personaldata);

        if ($validate['situacion'] == 'ADMINISTRATIVO') {
            $personal->administrativo()->create($validate);
        } else if ($validate['situacion'] == 'DOCENTE') {
            $personal->docente()->create($validate);
        }



        return redirect(route('personal.create'));
    }

    public function show(Personal $personal)
    {
        //
    }

    public function edit(Personal $personal)
    {
        //
    }

    public function update(Request $request, Personal $personal)
    {
        //
    }

    public function destroy(Personal $personal)
    {
        //
    }
}
