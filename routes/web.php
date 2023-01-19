<?php

use App\Http\Controllers\PersonalController;
use App\Http\Controllers\FamiliaController;
use App\Http\Controllers\NeducativoController;
use App\Http\Controllers\DocumentoController;
use App\Http\Controllers\ExdocenteController;
use App\Http\Controllers\ExlaboralController;
use App\Http\Controllers\OtrotrabajoController;
use App\Http\Controllers\ResolucionesycontratoController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('personal', PersonalController::class)
    ->only(['index', 'create', 'store', 'update', 'destroy', 'edit', 'show'])
    ->middleware(['auth']);

Route::get('personal/{personal}/Pdf', [PersonalController::class, 'vistaPdf'])->name('personal.vistaPdf')
    ->middleware(['auth']);
    
Route::get('personal/{personal}/Editextra', [PersonalController::class, 'extraedit'])->name('personal.extraedit')
    ->middleware(['auth']);

Route::resource('familia', FamiliaController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('familia/{personal}', [FamiliaController::class, 'storeUpdate'])->name('familia.storeUpdate')
    ->middleware(['auth']);

Route::resource('neducativo', NeducativoController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('neducativo/{personal}', [NeducativoController::class, 'storeUpdate'])->name('neducativo.storeUpdate')
    ->middleware(['auth']);

Route::resource('documento', DocumentoController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('documento/{personal}', [DocumentoController::class, 'storeUpdate'])->name('documento.storeUpdate')
    ->middleware(['auth']);

Route::resource('exdocente', ExdocenteController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('exdocente/{personal}', [ExdocenteController::class, 'storeUpdate'])->name('exdocente.storeUpdate')
    ->middleware(['auth']);

Route::resource('exlaboral', ExlaboralController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('exlaboral/{personal}', [ExlaboralController::class, 'storeUpdate'])->name('exlaboral.storeUpdate')
    ->middleware(['auth']);

Route::resource('otrotrabajo', OtrotrabajoController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('otrotrabajo/{personal}', [OtrotrabajoController::class, 'storeUpdate'])->name('otrotrabajo.storeUpdate')
    ->middleware(['auth']);

Route::resource('resolucionesycontrato', ResolucionesycontratoController::class)
    ->only(['index', 'store', 'update', 'destroy', 'edit'])
    ->middleware(['auth']);

    Route::post('resolucionesycontrato/{personal}', [ResolucionesycontratoController::class, 'storeUpdate'])->name('resolucionesycontrato.storeUpdate')
    ->middleware(['auth']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
