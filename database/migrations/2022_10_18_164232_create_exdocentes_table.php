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
        Schema::create('exdocentes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_id')->constrained()->cascadeOnDelete();
            $table->string('institucion_ed')->nullable();
            $table->string('catedra_ed')->nullable();
            $table->string('categoria_ed')->nullable();
            $table->string('regimen_pensionario_ed')->nullable();
            $table->date('fecha_inicio_ed')->nullable();
            $table->date('fecha_culminacion_ed')->nullable();
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
        Schema::dropIfExists('exdocentes');
    }
};
