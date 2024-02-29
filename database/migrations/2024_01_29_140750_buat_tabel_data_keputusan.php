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
        Schema::create('data_keputusan', function (Blueprint $table) {
            $table->foreignId('permohonan_id')->references('id')->on('permohonan')->onDelete('cascade')->onUpdate('cascade');

            $table->string('jenis_keputusan');
            $table->string('no_keputusan');
            $table->date('tanggal_keputusan');
            $table->unsignedBigInteger('amar_keputusan_id')->nullable();
            $table->integer('nilai_akhir_menurut_keputusan');

            $table->unsignedBigInteger('pembuat')->nullable();
            $table->dateTime('dibuat');
            $table->dateTime('diubah');

            $table->foreign('pembuat')->references('id')->on('users')->onDelete('set null');
            $table->foreign('amar_keputusan_id')->references('id')->on('referensi')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('data_keputusan');
    }
};
