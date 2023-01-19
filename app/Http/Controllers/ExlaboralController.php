<?php

namespace App\Http\Controllers;

use App\Models\Exlaboral;
use App\Models\Personal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $user = Auth::id();
        $personal = Personal::where('user_id', '=', $user)->latest('id')->first();
        if ($user == $personal->user_id) {


            $personal->exlaboral()->create($validate);
            $exlaboral = Exlaboral::latest('id')->first();
            // dd($exlaboral->id);
            if ($validate['t_lugar_ex_el'] == 'PRIVADA') {
                $exlaboral->exlabprivada()->create($validate);
            } else if ($validate['t_lugar_ex_el'] == 'PUBLICA') {
                $exlaboral->exlabpublica()->create($validate);
            }
        }
        return redirect(route('personal.create'));
    }

    public function storeUpdate(Request $request,Personal $personal)
    {

        // dd($personal->id);
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
        

        $personal->exlaboral()->create($validate);
            $exlaboral = Exlaboral::latest('id')->first();
            // dd($exlaboral->id);
            if ($validate['t_lugar_ex_el'] == 'PRIVADA') {
                $exlaboral->exlabprivada()->create($validate);
            } else if ($validate['t_lugar_ex_el'] == 'PUBLICA') {
                $exlaboral->exlabpublica()->create($validate);
            }
            // $personal->familia()->create($validate);
        
        return redirect(route('personal.extraedit',$personal));
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
        $validatePu = $request->validate([
            //PRIVADA
            'empresa_elpr' => '',
        ]);
        $validatePr = $request->validate([
            //PUBLICA
            'dependencia_elpu' => '',
            'tipo_elpu' => '',
            'num_tipo_elpu' => '',
        ]);

        // dd($validate['dependencia_elpu'], $validate['tipo_elpu'], $validate['num_tipo_elpu']);


        $exlaboral->update($validate);
        if ($validate['t_lugar_ex_el'] == 'PRIVADA') {
            $exlaboral->exlabprivada()->update($validatePu);
        } else if ($validate['t_lugar_ex_el'] == 'PUBLICA') {
            $exlaboral->exlabpublica()->update($validatePr);
        }
        // return redirect(route('personal.create'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exlaboral  $exlaboral
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exlaboral $exlaboral)
    {
        // dd($exlaboral['t_lugar_ex_el']);
        $exlaboral->delete();

        // if ($exlaboral['t_lugar_ex_el'] == 'PRIVADA') {
        //     $exlaboral->exlabprivada()->delete();
        // } else if ($exlaboral['t_lugar_ex_el'] == 'PUBLICA') {
        //     $exlaboral->exlabpublica()->delete();
        // }
        // return redirect(route('personal.create'));
    }
}
