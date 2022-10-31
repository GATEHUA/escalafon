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
        Schema::create('exlabprivadas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('exlaboral_id')->constrained()->cascadeOnDelete();
            $table->string('empresa_elpr')->nullable();
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
        Schema::dropIfExists('exlabprivadas');
    }
};
