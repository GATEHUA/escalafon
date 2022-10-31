<?php

namespace App\Http\Controllers;

use App\Models\Documento;
use App\Models\Personal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Inertia::render('Personal/Create', [
        //     'documento' => Documento::latest('id')->get()
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            't_nombre_documento_d' => '',
            'descripcion_documento_d' => '',
            'documento_d' => '',
            'fecha_documento_d' => '',
        ]);
        if ($validate['documento_d'] != '') {
            $dtemporal = time() . '.' . $validate['documento_d']->extension();
            $validate['documento_d']->storeAs('documentoPer', $dtemporal, 'public');
            $validate['documento_d'] = $dtemporal;
        }
        $personal = Personal::latest('id')->first();
        $personal->documento()->create($validate);
        return redirect(route('personal.create'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Documento  $documento
     * @return \Illuminate\Http\Response
     */
    public function show(Documento $documento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Documento  $documento
     * @return \Illuminate\Http\Response
     */
    public function edit(Documento $documento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Documento  $documento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Documento $documento)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Documento  $documento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Documento $documento)
    {
        //
    }
}
