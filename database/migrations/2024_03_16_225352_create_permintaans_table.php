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
        Schema::create('permintaan', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_urut');
            $table->string('nomor_surat_pp')->nullable();
            $table->date('tgl_surat_pp')->nullable();
            $table->date('tgl_resi_pp')->nullable();
            $table->date('tgl_diterima_kanwil')->nullable();
            $table->string('nomor_sengketa')->nullable();
            $table->string('jenis_sengketa')->nullable();
            $table->string('npwp')->nullable();
            $table->string('nama_wajib_pajak')->nullable();
            $table->string('nomor_surat_banding_gugatan_wp');
            $table->date('tgl_surat_banding_gugatan');
            $table->date('tgl_diterima_pp');
            $table->string('nomor_kep_surat_yang_di_banding_gugat');
            $table->date('tgl_kep_surat_yang_di_banding_gugat');
            $table->string('no_surat_tugas');
            $table->date('tgl_surat_tugas');
            $table->string('no_matriks');
            $table->date('tgl_matriks');
            $table->string('no_surat_tugas_pengganti');
            $table->date('tgl_surat_tugas_pengganti');
            $table->unsignedBigInteger('pk_id')->nullable();
            $table->dateTime('dibuat');
            $table->dateTime('diubah');

            $table->foreign('pk_id')->references('id')->on('users')->onDelete('set null');
        });

        Schema::create('surat_jawaban', function (Blueprint $table) {
            $table->id();
            $table->foreignId('permintaan_id')->references('id')->on('permintaan')->onDelete('cascade')->onUpdate('cascade');
            $table->string('nomor_surat_ke_dkb');
            $table->date('tgl_surat_ke_dkb');
            $table->string('nomor_surat_ke_pp');
            $table->date('tgl_surat_ke_pp');
            $table->dateTime('dibuat');
            $table->dateTime('diubah');
        });

        Schema::create('pengiriman', function (Blueprint $table) {
            $table->id();
            $table->foreignId('permintaan_id')->references('id')->on('permintaan')->onDelete('cascade')->onUpdate('cascade');
            $table->string('no_resi_ke_pp');
            $table->date('tgl_resi_ke_pp');
            $table->dateTime('dibuat');
            $table->dateTime('diubah');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengiriman');
        Schema::dropIfExists('surat_jawaban');
        Schema::dropIfExists('permintaan');
    }
};
