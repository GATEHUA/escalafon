<?php

namespace App\Http\Controllers;

use App\Models\Resolucionesycontrato;
use Illuminate\Http\Request;
use App\Models\Personal;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ResolucionesycontratoController extends Controller
{

    public function index()
    {
        // Inertia::render('Personal/Create', [
        //     'resolucionesycontrato' => Resolucionesycontrato::latest('id')->get()
        // ]);
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $validate = $request->validate([
            'cod_res' => '',
            'tipo_res' => 'required',
            'fecha_dic_res' => '',
            'des_art_pri_res' => '',
            'vigencia_res' => '',
            'categoria_alcanz_res' => '',
            'nivel_alcanz_res' => '',
            'antiguedad_in_res' => '',
            'antiguedad_sa_res' => '',
            'condicion_res' => '',
            'dependencia_res' => '',
            'observacion_res' => '',
            'documento_val_res' => '',
        ]);
        $user = Auth::id();
        $personal = Personal::where('user_id', '=', $user)->latest('id')->first();
        if ($validate['documento_val_res'] != '') {
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - '. $validate['tipo_res'] . '_' .time() . '.' . $validate['documento_val_res']->extension();
            $validate['documento_val_res']->storeAs('documento_val_res_Per', $dtemporal, 's3');
            $validate['documento_val_res'] = $dtemporal;
        }
        if ($user == $personal->user_id) {
            $personal->resolucionesycontrato()->create($validate);
        }
        return redirect(route('personal.create'));
    }
    public function storeUpdate(Request $request,Personal $personal)
    {
        $validate = $request->validate([
            'cod_res' => '',
            'tipo_res' => 'required',
            'fecha_dic_res' => '',
            'des_art_pri_res' => '',
            'vigencia_res' => '',
            'categoria_alcanz_res' => '',
            'nivel_alcanz_res' => '',
            'antiguedad_in_res' => '',
            'antiguedad_sa_res' => '',
            'condicion_res' => '',
            'dependencia_res' => '',
            'observacion_res' => '',
            'documento_val_res' => '',
        ]);

        if ($validate['documento_val_res'] != '') {
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - '. $validate['tipo_res'] . '_' .time() . '.' . $validate['documento_val_res']->extension();
            $validate['documento_val_res']->storeAs('documento_val_res_Per', $dtemporal, 's3');
            $validate['documento_val_res'] = $dtemporal;
        }
        
        $personal->resolucionesycontrato()->create($validate);
        
        return redirect(route('personal.extraedit',$personal));
    }

    public function show(Resolucionesycontrato $resolucionesycontrato)
    {
        //
    }


    public function edit(Resolucionesycontrato $resolucionesycontrato)
    {
        return Inertia::render('Personal/ResolucionesycontratoEdit', [
            'resolucionesycontratoDataEdit' => $resolucionesycontrato
        ]);
    }

    public function update(Request $request, Resolucionesycontrato $resolucionesycontrato)
    {
        $validate = $request->validate([
            'cod_res' => '',
            'tipo_res' => '',
            'fecha_dic_res' => '',
            'des_art_pri_res' => '',
            'vigencia_res' => '',
            'categoria_alcanz_res' => '',
            'nivel_alcanz_res' => '',
            'antiguedad_in_res' => '',
            'antiguedad_sa_res' => '',
            'condicion_res' => '',
            'dependencia_res' => '',
            'observacion_res' => '',
            'documento_val_res' => '',
        ]);
        $personal=Personal::where('id', '=', $resolucionesycontrato->personal_id)->latest('id')->first();

        if (is_string($validate['documento_val_res']) === false && $validate['documento_val_res']) {
            // Storage::delete('public/documento_val_res_Per/' . $resolucionesycontrato->documento_val_res);
            Storage::disk('s3')->delete('documento_val_res_Per/' . $resolucionesycontrato->documento_val_res);

            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - '. $validate['tipo_res'] . '_' .time() . '.' . $validate['documento_val_res']->extension();
            $validate['documento_val_res']->storeAs('documento_val_res_Per', $dtemporal, 's3');
            $validate['documento_val_res'] = $dtemporal;
            // Storage::delete('public/' . $validate['documento_val_ne']);
            // $validate['documento_val_ne'] = $validate['documento_val_ne']->store('documento_val_ne_Per', 'public');
            // $neducativo->update($validate);
        }
        // elseif (is_string($neducativo->documento_val_ne)) {

        // }
        $resolucionesycontrato->update($validate);
    }


    public function destroy(Resolucionesycontrato $resolucionesycontrato)
    {
        // if (Storage::delete('public/documento_val_res_Per/' . $resolucionesycontrato->documento_val_res) || !$resolucionesycontrato->documento_val_res ) {
        //     $resolucionesycontrato->delete();
        // }
        if (Storage::disk('s3')->delete('documento_val_res_Per/' . $resolucionesycontrato->documento_val_res) || !$resolucionesycontrato->documento_val_res ) {
            $resolucionesycontrato->delete();
        }


        // return redirect(route('personal.create'));
    }
}
