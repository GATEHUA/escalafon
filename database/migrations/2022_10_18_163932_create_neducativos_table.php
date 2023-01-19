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
        Schema::create('neducativos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_id')->constrained()->cascadeOnDelete();
            $table->string('nivel_educativo_ne')->nullable();
            $table->string('etapa_ne')->nullable();
            $table->string('nombre_institucion_ne')->nullable();
            $table->string('descripcion_ne')->nullable();
            $table->date('fecha_culminacion_ne')->nullable();
            $table->string('documento_val_ne')->nullable();
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
        Schema::dropIfExists('neducativos');
    }
};
