<?php

namespace App\Http\Controllers;

use App\Models\Neducativo;
use App\Models\Personal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
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
        $user = Auth::user();
        // dd($user->rol);
        $validate = $request->validate([
            // 'nivel_educativo_ne' => 'required',
            'nivel_educativo_ne' => '',
            'etapa_ne' => '',
            'nombre_institucion_ne' => '',
            'descripcion_ne' => '',
            'fecha_culminacion_ne' => '',
            'documento_val_ne' => 'nullable|file|max:11000',
        ]);
        // dd($request->file('documento_val_ne'), $validate['documento_val_ne']);
        // dd($request);

        // dd($validate['documento_val_ne']);
        $user = Auth::id();
        $personal = Personal::where('user_id', '=', $user)->latest('id')->first();
        //dd($personal->apellido_paterno, $personal->apellido_materno, $personal->nombres);
        if ($validate['documento_val_ne'] != '') {
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - ' . $validate['nivel_educativo_ne'] . '_' . time() . '.' . $validate['documento_val_ne']->extension();
            // $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne'] = $dtemporal;
            // $validate['documento_val_ne'] = $request->file('documento_val_ne')->store('documento_val_ne_Per', 'public');
        }

        if ($user == $personal->user_id) {
            $personal->neducativo()->create($validate);
        }
        return redirect(route('personal.create'));
    }

    public function storeUpdate(Request $request,Personal $personal)
    {
        $user = Auth::user();
        // dd($user->rol);
        $validate = $request->validate([
            // 'nivel_educativo_ne' => 'required',
            'nivel_educativo_ne' => '',
            'etapa_ne' => '',
            'nivel_educativo_ne' => ($user->rol !== 'ADMINISTRADOR') ? 'required' : '',
            'descripcion_ne' => '',
            'fecha_culminacion_ne' => '',
            'documento_val_ne' => 'nullable|file|max:11000',
        ]);

        // dd($validate['documento_val_ne']);

        if ($validate['documento_val_ne'] != '') {
            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - ' . $validate['nivel_educativo_ne'] . '_' . time() . '.' . $validate['documento_val_ne']->extension();
            // $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne'] = $dtemporal;
            // $validate['documento_val_ne'] = $request->file('documento_val_ne')->store('documento_val_ne_Per', 'public');
        }
        
            $personal->neducativo()->create($validate);
        
        return redirect(route('personal.extraedit',$personal));
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
        // $user = Auth::id();

        // $personal = Personal::where('user_id', '=', $user)->latest('id')->first()->id;

  
        // if ($personal == $neducativo->personal_id) {
        //     return Inertia::render('Personal/NeducativoEdit', [
        //         'neducativoDataEdit' => $neducativo
        //     ]);
        // }
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
        
        $validate = $request->validate([
            'nivel_educativo_ne' => '',
            'etapa_ne' => '',
            'nombre_institucion_ne' => '',
            'descripcion_ne' => '',
            'fecha_culminacion_ne' => '',
            'documento_val_ne' => '',
        ]);
        // dd($validate);

        // dd($validate['documento_val_ne']);

        // dd($request);
        // $url = Storage::url('app/public/documento_val_ne_Per/' . $neducativo->documento_val_ne);
        // dd($url);
        //dd(asset('storage/app/public/documento_val_ne_Per/' . $neducativo->documento_val_ne));
        // dd(asset(Storage::disk("public")->url($neducativo->documento_val_ne)));

        // dd($validate['documento_val_ne']);

        $personal=Personal::where('id', '=', $neducativo->personal_id)->latest('id')->first();

        // dd($personal)

        
        if (is_string($validate['documento_val_ne']) === false && $validate['documento_val_ne']) {
            // Storage::delete('public/documento_val_ne_Per/' . $neducativo->documento_val_ne);
            Storage::disk('public')->delete('documento_val_ne_Per/' . $neducativo->documento_val_ne);

            $dtemporal = $personal->apellido_paterno . ' ' . $personal->apellido_materno . ' ' . $personal->nombres . ' - ' . $validate['nivel_educativo_ne'] . '_' . time() . '.' . $validate['documento_val_ne']->extension();
            // $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne']->storeAs('documento_val_ne_Per', $dtemporal, 'public');
            $validate['documento_val_ne'] = $dtemporal;
            // Storage::delete('public/' . $validate['documento_val_ne']);
            // $validate['documento_val_ne'] = $validate['documento_val_ne']->store('documento_val_ne_Per', 'public');
            // $neducativo->update($validate);
        }
        // elseif (is_string($neducativo->documento_val_ne)) {

        // }
        $neducativo->update($validate);




        // return redirect(route('neducativo.edit', $neducativo->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Neducativo  $neducativo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Neducativo $neducativo)
    {
// dd($neducativo->documento_val_ne);
        // if (Storage::delete('public/documento_val_ne_Per/' . $neducativo->documento_val_ne)||!$neducativo->documento_val_ne) {
        //     $neducativo->delete();
        // }
        // dd($neducativo->documento_val_ne);
        if (Storage::disk('public')->delete('documento_val_ne_Per/' . $neducativo->documento_val_ne)||!$neducativo->documento_val_ne) {
           
            $neducativo->delete();}
        // }else{
        //     dd("gringo no se la come");
        // }
        // Storage::disk('s3')->delete('documento_val_ne_Per/' . $neducativo->documento_val_ne);
        // $neducativo->delete();
        

        // return redirect(route('personal.create'));
    }
}
