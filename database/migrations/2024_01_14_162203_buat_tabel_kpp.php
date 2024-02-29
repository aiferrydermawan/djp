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
        Schema::create('kpp', function (Blueprint $table) {
            $table->id();
            $table->integer('kode_kpp');
            $table->string('nama');
            $table->dateTime('dibuat');
            $table->dateTime('diubah');
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
