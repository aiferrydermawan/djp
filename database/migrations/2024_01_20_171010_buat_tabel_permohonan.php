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
        Schema::create('permohonan', function (Blueprint $table) {
            $table->id();
            $table->string('nama_wp');
            $table->string('npwp');
            $table->string('nop')->nullable();
            $table->unsignedBigInteger('kode_kpp_terdaftar')->nullable();
            $table->unsignedBigInteger('jenis_permohonan')->nullable();
            $table->unsignedBigInteger('unit_yang_memproses')->nullable();
            $table->unsignedBigInteger('jenis_pajak')->nullable();
            $table->string('masa_pajak');
            $table->integer('tahun_pajak');
            $table->string('mata_uang')->default('rupiah');
            $table->unsignedBigInteger('jenis_ketetapan')->nullable();
            $table->string('nomor_ketetapan');
            $table->date('tanggal_ketetapan');
            $table->date('tanggal_kirim_ketetapan');
            $table->bigInteger('nilai_1')->comment('NILAI KETETAPAN (SKP / STP)');
            $table->bigInteger('nilai_2')->comment('NILAI SANKSI ADMINISTRASI');
            $table->bigInteger('nilai_3')->comment('NILAI KETETAPAN / SANKSI ADMINISTRASI YG DISETUJUI');
            $table->bigInteger('nilai_4')->comment('NILAI DIAJUKAN UPAYA HUKUM');
            $table->unsignedBigInteger('dasar_pemrosesan')->nullable()->comment('PERMOHONAN/JABATAN');
            $table->string('nomor_surat_wp');
            $table->date('tanggal_surat_wp');
            $table->string('nomor_lpad');
            $table->date('tanggal_diterima');
            $table->date('tanggal_berakhir');
            $table->string('no_surat_pengantar_kpp');
            $table->date('tanggal_surat_pengantar');
            $table->date('tanggal_pengiriman_kpp');
            $table->string('nomor_surat_tugas');
            $table->date('tanggal_surat_tugas');
            $table->unsignedBigInteger('nama_pk')->nullable();
            $table->bigInteger('no_matriks');
            $table->date('tanggal_matriks');
            $table->string('nomor_surat_tugas_2')->nullable();
            $table->string('tanggal_surat_tugas_2')->nullable();
            $table->unsignedBigInteger('nama_pk_2')->nullable()->comment('Apabila ada perubahan PK');
            $table->unsignedBigInteger('pembuat')->nullable();
            $table->dateTime('dibuat');
            $table->dateTime('diubah');

            $table->foreign('kode_kpp_terdaftar')->references('id')->on('kpp')->onDelete('set null');
            $table->foreign('jenis_permohonan')->references('id')->on('jenis_permohonan')->onDelete('set null');
            $table->foreign('unit_yang_memproses')->references('id')->on('users')->onDelete('set null');
            $table->foreign('jenis_pajak')->references('id')->on('jenis_pajak')->onDelete('set null');
            $table->foreign('jenis_ketetapan')->references('id')->on('referensi')->onDelete('set null');
            $table->foreign('dasar_pemrosesan')->references('id')->on('referensi')->onDelete('set null');
            $table->foreign('nama_pk')->references('id')->on('users')->onDelete('set null');
            $table->foreign('nama_pk_2')->references('id')->on('users')->onDelete('set null');
            $table->foreign('pembuat')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permohonan');
    }
};
