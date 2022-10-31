<?php

namespace App\Http\Controllers;

use App\Models\Exlaboral;
use App\Models\Personal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExlaboralController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Inertia::render('Personal/Create', [
        //     'exlaboral' => Exlaboral::with(['exlabprivada:empresa_elpr'], ['exlabpublica:dependencia_elpu,tipo_elpu,num_tipo_elpu'])->latest('id')->get()
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
            'cargo_desempeniado_el' => '',
            'fecha_inicio_el' => '',
            'fecha_culminacion_el' => '',
            't_lugar_ex_el' => '',
            //PRIVADA
            'empresa_elpr' => '',
            //PUBLICA
            'dependencia_elpu' => '',
            'tipo_elpu' => '',
            'num_tipo_elpu' => '',
        ]);
        $personal = Personal::latest('id')->first();
        $personal->exlaboral()->create($validate);
        $exlaboral = Exlaboral::latest('id')->first();
        if ($validate['t_lugar_ex_el'] == 'PRIVADA') {
            $exlaboral->exlabprivada()->create($validate);
        } else if ($validate['t_lugar_ex_el'] == 'PUBLICA') {
            $exlaboral->exlabpublica()->create($validate);
        }
        return redirect(route('personal.create'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exlaboral  $exlaboral
     * @return \Illuminate\Http\Response
     */
    public function show(Exlaboral $exlaboral)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Exlaboral  $exlaboral
     * @return \Illuminate\Http\Response
     */
    public function edit(Exlaboral $exlaboral)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Exlaboral  $exlaboral
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exlaboral $exlaboral)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exlaboral  $exlaboral
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exlaboral $exlaboral)
    {
        //
    }
}
