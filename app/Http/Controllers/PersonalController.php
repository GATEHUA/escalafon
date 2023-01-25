<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
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
use Barryvdh\DomPDF\Facade\Pdf;

class PersonalController extends Controller
{
    public function index()
    {
        // dd(Storage::url(''),"asds");

        $user = Auth::user();
        if($user->id<=5)
        {
        return Inertia::render('Personal/Index', [
            'personal' => Personal::with(['user', 'administrativo', 'docente', 'familia', 'neducativo', 'exlaboral' => ['exlabprivada', 'exlabpublica'], 'exdocente', 'otrotrabajo', 'documento', 'resolucionesycontrato'])->latest('id')->get(),
            'files' => Storage::url('')
        ]);
        }else{
            return redirect(route('personal.create'));
        }
    }

    public function vistaPdf(Personal $personal)
    {
        // dd(
        //     asset(Storage::disk('public')->url('fotoPer/' . $personal->foto)),
        //     Storage::disk('public')->url('fotoPer/' . $personal->foto)
        // );
        if ($personal) {
            return Inertia::render('Personal/Pdf_personal_one', [
                'personalData' => Personal::where('id', '=', $personal->id)->latest('id')->with('administrativo', 'docente')->get(),
                'documentoData' => Documento::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'exdocenteData' => Exdocente::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'exlaboralData' => Exlaboral::where('personal_id', '=', $personal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
                'familiaData' => Familia::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'neducativoData' => Neducativo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'img' => asset('storage/app/public/fotoPer' . $personal->foto),
                // 'img' => Storage::disk('public')->url('fotoPer/' . $personal->foto)
                'img' => Storage::url('fotoPer/' . $personal->foto)
            ]);
        } else {
            return Inertia::render('Personal/Pdf_personal_one', [
                'personalData' => [1],
                'documentoData' => [],
                'exdocenteData' => [],
                'exlaboralData' => [],
                'familiaData' => [],
                'neducativoData' => [],
                'otrotrabajoData' => [],
                'resolucionesycontratoData' => [],
            ]);
        }

        // $pdf = Pdf::loadView('zxc');


        // return $pdf->stream();
    }

    public function create()
    {

        $user = Auth::user();

        $personal = Personal::where('user_id', '=', $user->id)->latest('id')->first();


    //    dd($user->id,$personal);

        if($user->id<=5){
            return Inertia::render('Personal/Create',[
                'personId'=>$personal,
            ]);
        }else{
            if(!$personal){
                return Inertia::render('Personal/Create',[
                    'personId'=>$personal,
                ]);
            }else{
                return redirect(route("personal.edit", $personal));
            }
        }
            // return Inertia::render('Personal/Create', [
                // 'personalData' => Personal::where('id', '=', $personal->id)->latest('id')->get(),
                // 'documentoData' => Documento::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'exdocenteData' => Exdocente::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'exlaboralData' => Exlaboral::where('personal_id', '=', $personal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
                // 'familiaData' => Familia::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'neducativoData' => Neducativo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personal->id)->latest('id')->get()

                // dd($request);
                // $url = Storage::url('app/public/documento_val_ne_Per/' . $neducativo->documento_val_ne);
                // dd($url);
                //dd(asset('storage/app/public/documento_val_ne_Per/' . $neducativo->documento_val_ne));
                // dd(asset(Storage::disk("public")->url($neducativo->documento_val_ne)));

            // ]);
        // } else {
        //     return Inertia::render('Personal/Create', [
            //     'personalData' => [1],
            //     'documentoData' => [],
            //     'exdocenteData' => [],
            //     'exlaboralData' => [],
            //     'familiaData' => [],
            //     'neducativoData' => [],
            //     'otrotrabajoData' => [],
            //     'resolucionesycontratoData' => [],
        //         ]);
        // }
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            // 'user_id' => '',
            //PERSONAL:
            'fecha_Ingreso_undac' => '',
            'nombra_fecha' => '',
            'condicion' => '',
            'situacion' => '',
            'foto' => '',
            'estado' => '',
            'fecha_jubilacion' => '',
            'nombres' => 'required',
            'apellido_paterno' => 'required',
            'apellido_materno' => 'required',
            'genero' => '',
            'fecha_nacimiento' => '',
            'pais' => '',
            'departamento' => '',
            'provincia' => '',
            'distrito' => '',
            // 'dni' => '',
            // 'carnet_extranjeria' => '',
            // 'carnet_identidad' => '',
            'tipo_documento' => '',
            'dni' => '',
            'carnet_extranjeria' => '',
            'partida_nacimiento' => '',
            'otro_documento' => '',
            //
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
            // 'administrativo_t_nivel' => '',
            'dependencia' => '',
            'nivel_remunerativo' => '',
            //DOCENTE:
            'docente_t' => '',
            // 'docente_t_nivel' => '',
            'facultad' => '',
            'escuela' => '',
            'dedicacion_t' => '',
            'horas_d' => ''

        ]);
        // $validateAdministrativo = $request->validate([
        //     //'personal_id'=>'',
        //     'administrativo_t' => '',
        //     'nivel_remunerativo' => '',
        // ]);


        // dd($validate['foto']);
        //$validate['foto']->getClientOriginalName() . Nombre del archivo

        // dd($validate['val_dni']->getSize(),$validate['foto']->getSize());
        if ($validate['foto'] != '') {
            $dtemporal = $validate['apellido_paterno'].' '.$validate['apellido_materno'].' '.$validate['nombres'].' '.time() . '.' . $validate['foto']->extension();
            // $validate['foto']->storeAs('fotoPer',  $dtemporal, 'public');
            $validate['foto']->storeAs('fotoPer',  $dtemporal, 's3');
            $validate['foto'] = $dtemporal;
        }
        if ($validate['val_dni'] != '') {
            $dtemporal2 = $validate['apellido_paterno'].' '.$validate['apellido_materno'].' '.$validate['nombres'].' '.time() . '.' . $validate['val_dni']->extension();
            // $validate['val_dni']->storeAs('Dni_I_Per', $dtemporal2, 'public');
            $validate['val_dni']->storeAs('Dni_I_Per', $dtemporal2, 's3');
            $validate['val_dni'] = $dtemporal2;
        }

        // dd(gettype($validate['nombra_fecha']));
        $request->user()->personal()->create($validate);
        // $personal =  Personal::create($validate);
        $user = Auth::user();


        // $personaldata = Personal::find(2);
        // $personal = Personal::latest('id')->first();
        $personal = Personal::where('user_id', '=', $user->id)->latest('id')->first();
        

        if ($validate['situacion'] == 'ADMINISTRATIVO') {
            $personal->administrativo()->create($validate);
        } else if ($validate['situacion'] == 'DOCENTE') {
            $personal->docente()->create($validate);
        }
        // dd($personal->id,$user->name);
        return redirect(route("personal.extraedit", $personal))->with('message', 'Datos almacenados correctamente, por favor continue con el formulario.');    
    }

    public function show(Personal $personal)
    {
        //
    }

    public function edit(Personal $personal)
    {
        // dd($personal);
        // $id = Auth::id();
        $user = Auth::user();
        
        $personalVal = Personal::where('user_id', '=', $user->id)->latest('id')->first();
        // dd(auth()->user()->name);
        // dd($personalVal->id,$personal->id);
        // dd(Storage::url(""));
        if($user->id<=5){
            return Inertia::render('Personal/PersonalEdit', [
                'personalData' => Personal::where('id', '=', $personal->id)->latest('id')->with('administrativo', 'docente')->get(),
                // 'documentoData' => Documento::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'exdocenteData' => Exdocente::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'exlaboralData' => Exlaboral::where('personal_id', '=', $personal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
                // 'familiaData' => Familia::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'neducativoData' => Neducativo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                // 'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'img' => Storage::url('fotoPer/' . $personal->foto),
                'file' =>Storage::url('Dni_I_Per/'. $personal->val_dni)
            ]);
        }else{
            if($personalVal){
                if($personalVal->id==$personal->id ){
                    return Inertia::render('Personal/PersonalEdit', [
                        'personalData' => Personal::where('id', '=', $personalVal->id)->latest('id')->with('administrativo', 'docente')->get(),
                        // 'documentoData' => Documento::where('personal_id', '=', $personalVal->id)->latest('id')->get(),
                        // 'exdocenteData' => Exdocente::where('personal_id', '=', $personalVal->id)->latest('id')->get(),
                        // 'exlaboralData' => Exlaboral::where('personal_id', '=', $personalVal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
                        // 'familiaData' => Familia::where('personal_id', '=', $personalVal->id)->latest('id')->get(),
                        // 'neducativoData' => Neducativo::where('personal_id', '=', $personalVal->id)->latest('id')->get(),
                        // 'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personalVal->id)->latest('id')->get(),
                        // 'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personalVal->id)->latest('id')->get(),
                        'img' => Storage::url('fotoPer/' . $personalVal->foto),
                        'file' =>Storage::url('Dni_I_Per/'. $personalVal->val_dni)
                    ]);
                }
                else if($personalVal->id!==$personal->id){
                    return Inertia::render('Personal/NoEdit',[
                        'userData' => Auth::user()->name
                    ]);
                }
            }else if(!$personalVal){
                return redirect(route('personal.create'));
            }
        } 
        
    }
    public function extraedit(Personal $personal)
    {

        $user = Auth::user();
        
        $personalVal = Personal::where('user_id', '=', $user->id)->latest('id')->first();
        // dd($personal);

        // dd(Storage::url(''));
        if($user->id<=5){
            return Inertia::render('Personal/PersonalEditExtra', [
                'personalData' => Personal::where('id', '=', $personal->id)->latest('id')->with('administrativo', 'docente')->get(),
                'documentoData' => Documento::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'exdocenteData' => Exdocente::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'exlaboralData' => Exlaboral::where('personal_id', '=', $personal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
                'familiaData' => Familia::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'neducativoData' => Neducativo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personal->id)->latest('id')->get(),
                'img' => Storage::url('')
            ]);
        }else{
            if($personalVal){
                if($personalVal->id==$personal->id ){
                    return Inertia::render('Personal/PersonalEditExtra', [
                        'personalData' => Personal::where('id', '=', $personal->id)->latest('id')->with('administrativo', 'docente')->get(),
                        'documentoData' => Documento::where('personal_id', '=', $personal->id)->latest('id')->get(),
                        'exdocenteData' => Exdocente::where('personal_id', '=', $personal->id)->latest('id')->get(),
                        'exlaboralData' => Exlaboral::where('personal_id', '=', $personal->id)->with('exlabprivada', 'exlabpublica')->latest('id')->get(),
                        'familiaData' => Familia::where('personal_id', '=', $personal->id)->latest('id')->get(),
                        'neducativoData' => Neducativo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                        'otrotrabajoData' => Otrotrabajo::where('personal_id', '=', $personal->id)->latest('id')->get(),
                        'resolucionesycontratoData' => Resolucionesycontrato::where('personal_id', '=', $personal->id)->latest('id')->get(),
                        'img' => Storage::url('')
                    ]);
                }
                else if($personalVal->id!==$personal->id){
                    return Inertia::render('Personal/NoEdit',[
                        'userData' => Auth::user()->name
                    ]);
                }
            }else if(!$personalVal){
                return redirect(route('personal.create'));
            }
        }
        
    }

    public function update(Request $request, Personal $personal)
    {
        // dd($request);
        $validate = $request->validate([
            // 'user_id' => '',
            //PERSONAL:
            'fecha_Ingreso_undac' => '',
            'nombra_fecha' => '',
            'condicion' => '',
            'situacion' => '',
            'foto' => '',
            'estado' => '',
            'fecha_jubilacion' => '',
            'nombres' => 'required',
            'apellido_paterno' => 'required',
            'apellido_materno' => 'required',
            'genero' => '',
            'fecha_nacimiento' => '',
            'pais' => '',
            'departamento' => '',
            'provincia' => '',
            'distrito' => '',
            // 'dni' => '',
            // 'carnet_extranjeria' => '',
            // 'carnet_identidad' => '',
            'tipo_documento' => '',
            'dni' => '',
            'carnet_extranjeria' => '',
            'partida_nacimiento' => '',
            'otro_documento' => '',
            //
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
            // 'administrativo_t_nivel' => '',
            'dependencia' => '',
            'nivel_remunerativo' => '',
            //DOCENTE:
            'docente_t' => '',
            // 'docente_t_nivel' => '',
            'facultad' => '',
            'escuela' => '',
            'dedicacion_t' => '',
            'horas_d' => ''

        ]);

        
        
        // dd($validateAd);

        if ($validate['situacion'] == 'ADMINISTRATIVO'){
            $validateAd = $request->validate([
                // 'personal_id',
            'administrativo_t'=>'required',
            // 'administrativo_t_nivel',
            'dependencia'=>'',
            'nivel_remunerativo'=>'',
            ]);

            if ($validateAd['administrativo_t'] &&  !$validate['docente_t']) {
                $personal->administrativo()->update($validateAd);
            }else if($validateAd['administrativo_t'] &&  $validate['docente_t']){
                $personal->docente()->delete();
                $personal->administrativo()->delete();
                $personal->administrativo()->create($validate);
                
            }
    
        }else if($validate['situacion'] == 'DOCENTE'){
            $validateDo = $request->validate([
                //'personal_id',
            'docente_t'=>'required',
            'dedicacion_t'=>'',
            // 'docente_t_nivel',
            'facultad'=>'',
            'escuela'=>'',
            'horas_d'=>''
            ]);
            if (!$validate['administrativo_t'] &&  $validateDo['docente_t']) {
                $personal->docente()->update($validateDo);
            }else if($validate['administrativo_t'] &&  $validateDo['docente_t']){

                $personal->administrativo()->delete();
                $personal->docente()->delete();
                $personal->docente()->create($validate);
            }
        }


        // dd($validate['administrativo_t'],$validate['docente_t']);

        
        if (is_string($validate['foto']) === false && $validate['foto']) {
            // Storage::delete('public/fotoPer/' . $personal->foto);
            Storage::disk('s3')->delete('fotoPer/' . $personal->foto);

            $dtemporal = $validate['apellido_paterno'].' '.$validate['apellido_materno'].' '.$validate['nombres'].' '.time() . '.' . $validate['foto']->extension();
            // $validate['foto']->storeAs('fotoPer',  $dtemporal, 'public');
            $validate['foto']->storeAs('fotoPer',  $dtemporal, 's3');
            $validate['foto'] = $dtemporal;
            
        }

        if (is_string($validate['val_dni']) === false && $validate['val_dni']) {
            // Storage::delete('public/Dni_I_Per/' . $personal->val_dni);
            Storage::disk('s3')->delete('Dni_I_Per/' . $personal->val_dni);
            $dtemporal2 = $validate['apellido_paterno'].' '.$validate['apellido_materno'].' '.$validate['nombres'].' '.time() . '.' . $validate['val_dni']->extension();
            // $validate['val_dni']->storeAs('Dni_I_Per', $dtemporal2, 'public');
            $validate['val_dni']->storeAs('Dni_I_Per', $dtemporal2, 's3');
            $validate['val_dni'] = $dtemporal2;
            
        }
        
       
        
        
        
        // if ($validate['situacion'] == 'ADMINISTRATIVO' && $validateDo['docente_t']==null) {
        //     $personal->administrativo()->update($validateAd);
        // }else if ($validate['situacion'] == 'DOCENTE' && $validateAd['administrativo_t']=null) {
        //     $personal->docente()->update($validateDo);
        // }else if($validate['situacion'] == 'ADMINISTRATIVO' && $validateDo['docente_t'] && $validateAd['administrativo_t']){
        //     dd($validateAd['administrativo_t']==null);
        //     $personal->docente()->delete();
        //     $personal->administrativo()->create($validate);
        // }else if($validate['situacion'] == 'DOCENTE' && $validateAd['administrativo_t'] &&  $validateDo['docente_t']){
        //     dd($validateDo['docente_t']==null);
        //     $personal->docente()->delete();
        //     $personal->docente()->create($validate);
        // }

        $personal->update($validate);


        // return redirect(route('personal.edit', $personal->id))->with('message',"Datos actualizados correctamente");
        // return redirect(back())->with('message',"Datos actualizados correctamente");
        return redirect(route("personal.extraedit", $personal))->with('message', 'Datos principales actualizados correctamente.');    


    }

    public function destroy(Personal $personal)
    {
        // dd($personal->id);
        // if((Storage::delete('public/fotoPer/' . $personal->foto)||!$personal->foto)&&(Storage::delete('public/Dni_I_Per/' . $personal->val_dni)||!$personal->val_dni)){
        //     $personal->delete();
        // }
        if((Storage::disk('s3')->delete('fotoPer/' . $personal->foto)||!$personal->foto)&&(Storage::disk('s3')->delete('Dni_I_Per/' . $personal->val_dni)||!$personal->val_dni)){
            $personal->delete();
        }
        // return redirect(route('personal.index'));
        // return Inertia::render('Personal/Index', [
        //     'personal' => Personal::with(['user', 'administrativo', 'docente', 'familia', 'neducativo', 'exlaboral' => ['exlabprivada', 'exlabpublica'], 'exdocente', 'otrotrabajo', 'documento', 'resolucionesycontrato'])->latest('id')->get(),
        //     'files' => Storage::url('')
        // ]);
    }
}
