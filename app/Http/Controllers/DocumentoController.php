<?php

namespace App\Http\Controllers;

use App\Models\Documento;
use App\Models\Personal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
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
        $user = Auth::id();
        $personal = Personal::where('user_id', '=', $user)->latest('id')->first();
        if ($validate['documento_d'] != '') {
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - ' .time() . '.' . $validate['documento_d']->extension();
            $validate['documento_d']->storeAs('documentoPer', $dtemporal, 'public');
            $validate['documento_d'] = $dtemporal;
        }
        if ($user == $personal->user_id) {
            $personal->documento()->create($validate);
        }
        return redirect(route('personal.create'));
    }

    public function storeUpdate(Request $request,Personal $personal)
    {
        $validate = $request->validate([
            't_nombre_documento_d' => '',
            'descripcion_documento_d' => '',
            'documento_d' => '',
            'fecha_documento_d' => '',
        ]);

        if ($validate['documento_d'] != '') {
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - ' .time() . '.' . $validate['documento_d']->extension();
            $validate['documento_d']->storeAs('documentoPer', $dtemporal, 'public');
            $validate['documento_d'] = $dtemporal;
        }
        
        $personal->documento()->create($validate);
        
        return redirect(route('personal.extraedit',$personal));
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
        return Inertia::render('Personal/DocumentoEdit', [
            'documentoDataEdit' => $documento
        ]);
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
        $validate = $request->validate([
            't_nombre_documento_d' => '',
            'descripcion_documento_d' => '',
            'documento_d' => '',
            'fecha_documento_d' => '',
        ]);
        $personal=Personal::where('id', '=', $documento->personal_id)->latest('id')->first();


        if (is_string($validate['documento_d']) === false && $validate['documento_d']) {
            Storage::delete('public/documentoPer/' . $documento->documento_d);
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - ' .time() . '.' . $validate['documento_d']->extension();
            $validate['documento_d']->storeAs('documentoPer', $dtemporal, 'public');
            $validate['documento_d'] = $dtemporal;
        }
        $documento->update($validate);
        // return redirect(route('documento.edit', $documento->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Documento  $documento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Documento $documento)
    {
        if (Storage::delete('public/documentoPer/' . $documento->documento_d )|| !$documento->documento_d ) {
            $documento->delete();
        }


        // return redirect(route('personal.create'));
    }
}
