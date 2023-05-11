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
        Schema::create('resolucionesycontratos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('personal_id')->constrained()->cascadeOnDelete();
            $table->string('cod_res')->nullable();
            $table->string('tipo_res')->nullable();
            $table->date('fecha_dic_res')->nullable();
            $table->longText('des_art_pri_res')->nullable();
            $table->date('vigencia_res')->nullable();
            $table->string('categoria_alcanz_res')->nullable();
            $table->string('nivel_alcanz_res')->nullable();
            $table->date('antiguedad_in_res')->nullable();
            $table->date('antiguedad_sa_res')->nullable();
            $table->string('condicion_res')->nullable();
            $table->string('dependencia_res')->nullable();
            $table->string('observacion_res')->nullable();
            $table->string('documento_val_res')->nullable();
            $table->boolean('mostrar')->default(true);
            $table->string('campo_extra')->nullable();
            $table->string('data_campo_extra')->nullable();
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
        Schema::dropIfExists('resolucionesycontratos');
    }
};
