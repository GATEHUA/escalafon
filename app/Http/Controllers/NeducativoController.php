<?php

namespace App\Http\Controllers;

use App\Models\Neducativo;
use App\Models\Personal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NeducativoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Inertia::render('Personal/Create', [
        //     'neducativo' => Neducativo::latest('id')->get()
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'nivel_educativo_ne' => '',
            'etapa_ne' => '',
            'nombre_institucion_ne' => '',
            'descripcion_ne' => '',
            'fecha_culminacion_ne' => '',
            'documento_val_ne' => '',
        ]);
        if ($validate['documento_val_ne'] != '') {
            $dtemporal = time() . '.' . $validate['documento_val_ne']->extension();
            $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne'] = $dtemporal;
        }
        $personal = Personal::latest('id')->first();
        $personal->neducativo()->create($validate);
        return redirect(route('personal.create'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Neducativo  $neducativo
     * @return \Illuminate\Http\Response
     */
    public function show(Neducativo $neducativo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Neducativo  $neducativo
     * @return \Illuminate\Http\Response
     */
    public function edit(Neducativo $neducativo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Neducativo  $neducativo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Neducativo $neducativo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Neducativo  $neducativo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Neducativo $neducativo)
    {
        //
    }
}
