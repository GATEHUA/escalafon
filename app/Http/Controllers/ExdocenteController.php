<?php

namespace App\Http\Controllers;

use App\Models\Exdocente;
use App\Models\Personal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExdocenteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Inertia::render('Personal/Create', [
        //     'exdocente' => Exdocente::latest('id')->get()
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
            'institucion_ed' => '',
            'catedra_ed' => '',
            'categoria_ed' => '',
            'regimen_pensionario_ed' => '',
            'fecha_inicio_ed' => '',
            'fecha_culminacion_ed' => '',
        ]);
        $personal = Personal::latest('id')->first();
        $personal->exdocente()->create($validate);
        return redirect(route('personal.create'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exdocente  $exdocente
     * @return \Illuminate\Http\Response
     */
    public function show(Exdocente $exdocente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Exdocente  $exdocente
     * @return \Illuminate\Http\Response
     */
    public function edit(Exdocente $exdocente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Exdocente  $exdocente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Exdocente $exdocente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exdocente  $exdocente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exdocente $exdocente)
    {
        //
    }
}
