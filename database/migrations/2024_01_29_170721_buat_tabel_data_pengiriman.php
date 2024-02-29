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
        Schema::create('data_pengiriman', function (Blueprint $table) {
            $table->foreignId('permohonan_id')->references('id')->on('permohonan')->onDelete('cascade')->onUpdate('cascade');

            $table->string('nomor_resi_wp');
            $table->date('tanggal_resi_wp');
            $table->string('nomor_resi_kpp');
            $table->date('tanggal_resi_kpp');

            $table->unsignedBigInteger('pembuat')->nullable();
            $table->dateTime('dibuat');
            $table->dateTime('diubah');

            $table->foreign('pembuat')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_pengiriman');
    }
};
