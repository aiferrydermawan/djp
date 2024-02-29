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
        Schema::create('user_details', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('nip');
            $table->bigInteger('ip');
            $table->string('jabatan');
            $table->string('pangkat');
            $table->unsignedBigInteger('unit_organisasi_id')->nullable();
            $table->timestamps();

            $table->foreign('unit_organisasi_id')->references('id')->on('referensi')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_details');
    }
};
