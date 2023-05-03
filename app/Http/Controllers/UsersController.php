<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;



use Illuminate\Support\Facades\Auth;



class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
       
// dd($user->rol);
        if($user->rol=="ADMINISTRADOR"){
            return Inertia::render('Usuarios/Index', [
                'usuarios'=>User::latest()->get(),
            ]);
        }else{
            return redirect(route('personal.create'));
        }


       
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $usuario)
    {
        // dd($usuario);
        // $user = Auth::user();

        // dd($user);
        $user = Auth::user();
        if($user->rol=="ADMINISTRADOR"){

            return Inertia::render('Usuarios/UsuarioEdit', [
                'usuarioData' => User::where('id', '=', $usuario->id)->latest('id')->get(),
    
            ]);
        }else{
            return redirect(route('personal.create'));

        }

        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $usuario)
    {
       if($request->password){
        $request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|string|email|max:255',
            'rol'=>'required',
            'password'=>'required|min:8',
        ]);
        $usuario->update([
            'name' => $request->name,
            'email' => $request->email,
            'rol' => $request->rol,
            'password' => Hash::make($request->password),
        ]);
       }else{
        $request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|string|email|max:255',
            'rol'=>'required',

        ]);
        $usuario->update([
            'name' => $request->name,
            'email' => $request->email,
            'rol' => $request->rol,
        ]);
       }
       return redirect(route('usuarios.index'));

       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $usuario)
    {
        $usuario->delete();
    }
}
