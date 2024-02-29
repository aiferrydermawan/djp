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
        Schema::create('kriteria_permohonan', function (Blueprint $table) {
            $table->foreignId('permohonan_id')->references('id')->on('permohonan')->onDelete('cascade')->onUpdate('cascade');

            $table->unsignedBigInteger('alasan_id')->nullable();
            $table->unsignedBigInteger('pemenuhan_kriteria_id')->nullable();

            $table->unsignedBigInteger('pembuat')->nullable();
            $table->dateTime('dibuat');
            $table->dateTime('diubah');

            $table->foreign('pembuat')->references('id')->on('users')->onDelete('set null');
            $table->foreign('alasan_id')->references('id')->on('referensi')->onDelete('set null');
            $table->foreign('pemenuhan_kriteria_id')->references('id')->on('referensi')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kriteria_permohonan');
    }
};
