<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->date('fecha_Ingreso_undac')->nullable();
            $table->string('situacion')->nullable();
            $table->string('condicion')->nullable();
            $table->string('foto')->nullable();
            $table->string('facultad')->nullable();
            $table->string('escuela')->nullable();
            $table->string('estado')->nullable();
            $table->date('fecha_jubilacion')->nullable();
            $table->string('nombres')->nullable();
            $table->string('apellido_paterno')->nullable();
            $table->string('apellido_materno')->nullable();
            $table->string('genero')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('pais')->nullable();
            $table->string('departamento')->nullable();
            $table->string('provincia')->nullable();
            $table->string('distrito')->nullable();
            $table->integer('dni')->unsigned()->nullable();
            $table->string('carnet_extranjeria')->nullable();
            $table->string('carnet_identidad')->nullable();
            $table->string('regimen_pensionario')->nullable();
            $table->string('nombre_afp')->nullable();
            $table->string('ruc')->nullable();
            $table->string('estado_civil')->nullable();
            $table->string('domicilio_actual')->nullable();
            $table->string('distrito_domicilio')->nullable();
            $table->string('provincia_domicilio')->nullable();
            $table->string('departamento_domicilio')->nullable();
            $table->string('email')->nullable();
            $table->integer('telefono_fijo')->unsigned()->nullable();
            $table->integer('telefono_celular')->unsigned()->nullable();
            $table->integer('codigo')->unsigned()->nullable();
            $table->integer('val_dni')->nullable();
            $table->string('regimen_laboral')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personals');
    }
};
