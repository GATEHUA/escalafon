<?php

namespace App\Http\Controllers;

use App\Models\Otrotrabajo;
use App\Models\Personal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OtrotrabajoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Inertia::render('Personal/Create', [
        //     'otrotrabajo' => Personal::latest('id')->get()
        // ]);
        // return ("sdasd");
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
            'estado_ot' => '',
            'cargo_ot' => '',
            'nombre_institucion_ot' => '',
            'frecuencia_diaria_ot' => '',
            'hora_entrada_ot' => '',
            'hora_salida_ot' => '',
        ]);
        $personal = Personal::latest('id')->first();
        $personal->otrotrabajo()->create($validate);
        return redirect(route('personal.create'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Otrotrabajo  $otrotrabajo
     * @return \Illuminate\Http\Response
     */
    public function show(Otrotrabajo $otrotrabajo)
    {
        //
    }

    public function edit(Otrotrabajo $otrotrabajo)
    {
        //
    }


    public function update(Request $request, Otrotrabajo $otrotrabajo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Otrotrabajo  $otrotrabajo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Otrotrabajo $otrotrabajo)
    {
        //
    }
}
