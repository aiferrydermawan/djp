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
        Schema::create('penelitian_formal', function (Blueprint $table) {
            $table->foreignId('permohonan_id')->references('id')->on('permohonan')->onDelete('cascade')->onUpdate('cascade');
            $table->string('status');
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
        Schema::dropIfExists('penelitian_formal');
    }
};
