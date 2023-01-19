<?php

namespace App\Http\Controllers;

use App\Models\Personal;
use App\Models\Familia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class FamiliaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Inertia::render('Personal/Create', [
        //     'familia' => Familia::latest('id')->get()
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Inertia::render('Personal/Create', []);
    }


    public function store(Request $request)
    {
        $validate = $request->validate([
            't_relacion_f' => '',
            'apellidos_nombres_f' => '',
            'tipo_documento_f' => '',
            'dni_f' => '',
            'carnet_extranjeria_f' => '',
            'partida_nacimiento_f' => '',
            'otro_documento_f' => '',
            'genero_f' => '',
            'fecha_nacimiento_f' => '',
            'estado_civil_f' => '',
            'estado_v_m_f' => '',
            'nacionalidad_f' => '',
        ]);
        $user = Auth::id();
        $personal = Personal::where('user_id', '=', $user)->latest('id')->first();
        if ($user == $personal->user_id) {
            $personal->familia()->create($validate);
        }
        return redirect(route('personal.create'));
    }

    public function storeUpdate(Request $request,Personal $personal)
    {

        // dd($personal->id);
        $validate = $request->validate([
            't_relacion_f' => '',
            'apellidos_nombres_f' => '',
            'tipo_documento_f' => '',
            'dni_f' => '',
            'carnet_extranjeria_f' => '',
            'partida_nacimiento_f' => '',
            'otro_documento_f' => '',
            'genero_f' => '',
            'fecha_nacimiento_f' => '',
            'estado_civil_f' => '',
            'estado_v_m_f' => '',
            'nacionalidad_f' => '',
        ]);
        
            $personal->familia()->create($validate);
        
        return redirect(route('personal.extraedit',$personal));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Familia  $familia
     * @return \Illuminate\Http\Response
     */
    public function show(Familia $familia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Familia  $familia
     * @return \Illuminate\Http\Response
     */
    public function edit(Familia $familia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Familia  $familia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Familia $familium)
    {

        // $name = Route::currentRouteName();

        //dd($name);


        $validate = $request->validate([
            't_relacion_f' => '',
            'apellidos_nombres_f' => '',
            'tipo_documento_f' => '',
            'dni_f' => '',
            'carnet_extranjeria_f' => '',
            'partida_nacimiento_f' => '',
            'otro_documento_f' => '',
            'genero_f' => '',
            'fecha_nacimiento_f' => '',
            'estado_civil_f' => '',
            'estado_v_m_f' => '',
            'nacionalidad_f' => '',
        ]);
        // $familia = Familia::find($familium);
        // dd($request, $familium);
        // dd($validate);
        $familium->update($validate);

        

        //return redirect(route('personal.create'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Familia  $familia
     * @return \Illuminate\Http\Response
     */
    public function destroy(Familia $familium)
    {
        $familium->delete();
        // return redirect(route('personal.create'));
    }
}
