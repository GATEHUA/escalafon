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
        Schema::create('docentes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_id')->constrained()->cascadeOnDelete();
            $table->string('docente_t')->nullable();
            // $table->string('docente_t_nivel')->nullable();
            $table->string('facultad')->nullable();
            $table->string('escuela')->nullable();
            $table->string('dedicacion_t')->nullable();
            $table->time('horas_d', $precision = 0)->nullable();
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
        Schema::dropIfExists('docentes');
    }
};
