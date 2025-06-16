<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('penyelesaian_permohonan', function (Blueprint $table) {
            $table->id();
            $table->enum('uraian',['Keberatan','Non Keberatan','SUB','STG']);
            $table->integer('tahun_berkas');
            $table->integer('saldo_awal');
            $table->dateTime('dibuat')->nullable();
            $table->dateTime('diubah')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penyelesaian_permohonan');
    }
};
