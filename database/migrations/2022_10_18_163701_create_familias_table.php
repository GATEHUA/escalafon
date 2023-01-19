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
        Schema::create('familias', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_id')->constrained()->cascadeOnDelete();
            $table->string('t_relacion_f')->nullable();
            $table->string('apellidos_nombres_f')->nullable();
            $table->string('tipo_documento_f')->nullable();
            $table->string('dni_f')->nullable();
            $table->string('carnet_extranjeria_f')->nullable();
            $table->string('partida_nacimiento_f')->nullable();
            $table->string('otro_documento_f')->nullable();
            $table->string('genero_f')->nullable();
            $table->date('fecha_nacimiento_f')->nullable();
            $table->string('estado_civil_f')->nullable();
            $table->string('estado_v_m_f')->nullable();
            $table->string('nacionalidad_f')->nullable();
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
        Schema::dropIfExists('familias');
    }
};
