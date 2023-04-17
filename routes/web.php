<?php

use App\Http\Controllers\PersonalController;
use App\Http\Controllers\FamiliaController;
use App\Http\Controllers\NeducativoController;
use App\Http\Controllers\DocumentoController;
use App\Http\Controllers\ExdocenteController;
use App\Http\Controllers\ExlaboralController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\OtrotrabajoController;
use App\Http\Controllers\ResolucionesycontratoController;

use Illuminate\Http\Request;
use Aws\S3\S3Client;

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

Route::get('/usuarios',[PersonalController::class, 'vistaPdf'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('personal/{personal}/Pdf', [PersonalController::class, 'vistaPdf'])->name('personal.vistaPdf')
    ->middleware(['auth']);
    
Route::get('personal/{personal}/Editextra', [PersonalController::class, 'extraedit'])->name('personal.extraedit')
    ->middleware(['auth']);

Route::get('personal/{personal}/PdfResoluciones', [PersonalController::class, 'pdfResoluciones'])->name('personal.pdfResoluciones')
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




Route::get('/download-folder-documentoPer', function (Request $request) {
    $folderPath = 'documentoPer'; // Ruta de la carpeta en S3
    $localPath = storage_path('app/downloads/AWS_Resp_documentoPer'); // Ruta local donde se descargará la carpeta
    if (!file_exists($localPath)) {
        mkdir($localPath, 0777, true);
    }
    $s3 = new S3Client([
        'version' => 'latest',
        'region' => env('AWS_DEFAULT_REGION'),
        'credentials' => [
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
        ],
    ]);
    $s3->registerStreamWrapper();
    $files = $s3->listObjectsV2(['Bucket' => env('AWS_BUCKET'), 'Prefix' => $folderPath]);
    foreach ($files['Contents'] as $file) {
        $s3Path = $file['Key'];
        $fileName = basename($s3Path);
        $localFilePath = $localPath.'/'.$fileName;
        $s3->getObject([
            'Bucket' => env('AWS_BUCKET'),
            'Key' => $s3Path,
            'SaveAs' => $localFilePath,
        ]);
    }
    return 'Carpeta descargada correctamente.';
});

Route::get('auth/google',[GoogleAuthController::class,'redirect'])->name('google-auth');
Route::get('auth/google/call-back',[GoogleAuthController::class,'callbackGoogle']);

require __DIR__ . '/auth.php';
