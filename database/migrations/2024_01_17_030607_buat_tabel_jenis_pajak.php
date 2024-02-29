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
        Schema::create('jenis_pajak', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('jenis_ketetapan_id')->nullable();
            $table->integer('kode');
            $table->string('nama');
            $table->dateTime('dibuat');
            $table->dateTime('diubah');
            $table->foreign('jenis_ketetapan_id')->references('id')->on('referensi')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kpp');
    }
};
