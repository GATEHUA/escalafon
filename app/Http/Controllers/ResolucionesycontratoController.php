<?php

namespace App\Http\Controllers;

use App\Models\Resolucionesycontrato;
use Illuminate\Http\Request;
use App\Models\Personal;
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
        if ($validate['documento_val_res'] != '') {
            $dtemporal = time() . '.' . $validate['documento_val_res']->extension();
            $validate['documento_val_res']->storeAs('documento_val_res_Per', $dtemporal, 'public');
            $validate['documento_val_res'] = $dtemporal;
        }
        $personal = Personal::latest('id')->first();
        $personal->resolucionesycontrato()->create($validate);
        return redirect(route('personal.create'));
    }

    public function show(Resolucionesycontrato $resolucionesycontrato)
    {
        //
    }


    public function edit(Resolucionesycontrato $resolucionesycontrato)
    {
        //
    }

    public function update(Request $request, Resolucionesycontrato $resolucionesycontrato)
    {
        //
    }


    public function destroy(Resolucionesycontrato $resolucionesycontrato)
    {
        //
    }
}
