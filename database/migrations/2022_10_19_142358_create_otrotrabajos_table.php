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
        Schema::create('otrotrabajos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_id')->constrained()->cascadeOnDelete();
            $table->string('estado_ot')->nullable();
            $table->string('cargo_ot')->nullable();
            $table->string('nombre_institucion_ot')->nullable();
            $table->string('frecuencia_diaria_ot')->nullable();
            $table->time('hora_entrada_ot', $precision = 0)->nullable();
            $table->time('hora_salida_ot', $precision = 0)->nullable();
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
        Schema::dropIfExists('otrotrabajos');
    }
};
