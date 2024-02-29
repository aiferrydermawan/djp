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
        Schema::create('spid_pembahasan', function (Blueprint $table) {
            $table->foreignId('permohonan_id')->references('id')->on('permohonan')->onDelete('cascade')->onUpdate('cascade');
            //
            $table->text('spid_kpp')->nullable()->comment('SPID KPP');
            $table->date('tanggal_spid_kpp')->nullable()->comment('TANGGAL SPID KPP');
            $table->text('spid_kpp_2')->nullable()->comment('SPID KPP KE-2');
            $table->date('tanggal_spid_kpp_2')->nullable()->comment('TANGGAL SPID KPP KE-2');
            $table->text('spid_kpp_3')->nullable()->comment('SPID KPP KE-3');
            $table->date('tanggal_spid_kpp_3')->nullable()->comment('TANGGAL SPID KPP KE-3');
            $table->text('spid_wp_1')->nullable()->comment('SPID WP KE-1');
            $table->date('tanggal_spid_wp_1')->nullable()->comment('TANGGAL SPID WP KE-1');
            $table->text('spid_wp_2')->nullable()->comment('SPID WP KE-2');
            $table->date('tanggal_spid_wp_2')->nullable()->comment('TANGGAL SPID WP KE-2');
            $table->text('spid_wp_3')->nullable()->comment('SPID WP KE-3');
            $table->date('tanggal_spid_wp_3')->nullable()->comment('TANGGAL SPID WP KE-3');
            $table->text('nomor_ba_tidak_beri_dokumen')->nullable()->comment('NOMOR (BA TDK BERI DOKUMEN)');
            $table->date('tanggal_ba_tidak_beri_dokumen')->nullable()->comment('TANGGAL (BA TDK BERI DOKUMEN)');
            $table->text('nomor_surat_pemanggilan_pemeriksa')->nullable()->comment('NOMOR SURAT PEMANGGILAN (PEMBAHASAN PEMERIKSA)');
            $table->date('tanggal_surat_pemanggilan_pemeriksa')->nullable()->comment('TANGGAL SURAT PEMANGGILAN (PEMBAHASAN PEMERIKSA)');
            $table->text('nomor_surat_pemanggilan_pemeriksa_2')->nullable()->comment('NOMOR SURAT PEMANGGILAN (PEMBAHASAN PEMERIKSA) KE-2');
            $table->date('tanggal_surat_pemanggilan_pemeriksa_2')->nullable()->comment('TANGGAL SURAT PEMANGGILAN (PEMBAHASAN PEMERIKSA) KE-2');
            $table->text('nomor_surat_pemanggilan_pemeriksa_3')->nullable()->comment('NOMOR SURAT PEMANGGILAN (PEMBAHASAN PEMERIKSA) KE-3');
            $table->date('tanggal_surat_pemanggilan_pemeriksa_3')->nullable()->comment('TANGGAL SURAT PEMANGGILAN (PEMBAHASAN PEMERIKSA) KE-3');
            $table->text('nomor_ba_pembahasan_pemeriksa')->nullable()->comment('NOMOR BA PEMBAHASAN (PEMBAHASAN PEMERIKSA)');
            $table->date('tanggal_ba_pembahasan_pemeriksa')->nullable()->comment('TANGGAL BA PEMBAHASAN (PEMBAHASAN PEMERIKSA)');
            $table->text('nomor_ba_pembahasan_pemeriksa_2')->nullable()->comment('NOMOR BA PEMBAHASAN (PEMBAHASAN PEMERIKSA) KE-2');
            $table->date('tanggal_ba_pembahasan_pemeriksa_2')->nullable()->comment('TANGGAL BA PEMBAHASAN (PEMBAHASAN PEMERIKSA) KE-2');
            $table->text('nomor_ba_pembahasan_pemeriksa_3')->nullable()->comment('NOMOR BA PEMBAHASAN (PEMBAHASAN PEMERIKSA) KE-3');
            $table->date('tanggal_ba_pembahasan_pemeriksa_3')->nullable()->comment('TANGGAL BA PEMBAHASAN (PEMBAHASAN PEMERIKSA) KE-3');
            $table->text('nomor_surat_pemanggilan_wp')->nullable()->comment('NOMOR SURAT PEMANGGILAN (PEMBAHASAN WP)');
            $table->date('tanggal_surat_pemanggilan_wp')->nullable()->comment('TANGGAL SURAT PEMANGGILAN (PEMBAHASAN WP)');
            $table->text('nomor_surat_pemanggilan_wp_2')->nullable()->comment('NOMOR SURAT PEMANGGILAN (PEMBAHASAN WP) KE-2');
            $table->date('tanggal_surat_pemanggilan_wp_2')->nullable()->comment('TANGGAL SURAT PEMANGGILAN (PEMBAHASAN WP) KE-2');
            $table->text('nomor_surat_pemanggilan_wp_3')->nullable()->comment('NOMOR SURAT PEMANGGILAN (PEMBAHASAN WP) KE-3');
            $table->date('tanggal_surat_pemanggilan_wp_3')->nullable()->comment('TANGGAL SURAT PEMANGGILAN (PEMBAHASAN WP) KE-3');
            $table->text('nomor_ba_pembahasan_wp')->nullable()->comment('NOMOR BA PEMBAHASAN (PEMBAHASAN WP)');
            $table->date('tanggal_ba_pembahasan_wp')->nullable()->comment('TANGGAL BA PEMBAHASAN (PEMBAHASAN WP)');
            $table->text('nomor_ba_pembahasan_wp_2')->nullable()->comment('NOMOR BA PEMBAHASAN (PEMBAHASAN WP) KE-2');
            $table->date('tanggal_ba_pembahasan_wp_2')->nullable()->comment('TANGGAL BA PEMBAHASAN (PEMBAHASAN WP) KE-2');
            $table->text('nomor_ba_pembahasan_wp_3')->nullable()->comment('NOMOR BA PEMBAHASAN (PEMBAHASAN WP) KE-3');
            $table->date('tanggal_ba_pembahasan_wp_3')->nullable()->comment('TANGGAL BA PEMBAHASAN (PEMBAHASAN WP) KE-3');
            //
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
        Schema::dropIfExists('spid_pembahasan');
    }
};
