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
        Schema::create('exlabpublicas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('exlaboral_id')->constrained()->cascadeOnDelete();
            $table->string('dependencia_elpu')->nullable();
            $table->string('tipo_elpu')->nullable();
            $table->string('num_tipo_elpu')->nullable();
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
        Schema::dropIfExists('exlabpublicas');
    }
};
