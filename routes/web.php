<?php

use App\Http\Controllers\KEBNKEB\DataKeputusanController;
use App\Http\Controllers\KEBNKEB\DataPengirimanController;
use App\Http\Controllers\KEBNKEB\KriteriaPermohonanController;
use App\Http\Controllers\KEBNKEB\PenelitianFormalController;
use App\Http\Controllers\KEBNKEB\PermohonanKEBNKEBController;
use App\Http\Controllers\KEBNKEB\SPIDPembahasanController;
use App\Http\Controllers\KEBNKEB\SPUHController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SUBSTG\InputPermintaanController;
use App\Http\Controllers\SUBSTG\PengirimanController;
use App\Http\Controllers\SUBSTG\SuratJawabanController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/login');
Route::get('lol', function () {
    dd(Hash::make('password'));
});

Route::middleware('auth')->group(function () {

    Route::resource('/kpp', \App\Http\Controllers\KppController::class)->except(['index', 'show']);
    Route::resource('/jenis-pajak', \App\Http\Controllers\JenisPajakController::class)->except(['index', 'show']);
    Route::resource('/jenis-permohonan', \App\Http\Controllers\JenisPermohonanController::class)->except(['index', 'show']);
    Route::resource('/pegawai', \App\Http\Controllers\PegawaiController::class)->except(['index', 'show']);

    Route::get('/kpp', App\Livewire\Kpp\Index::class)->name('kpp.index');
    Route::get('/jenis-pajak', App\Livewire\JenisPajak\Index::class)->name('jenis-pajak.index');
    Route::get('/jenis-permohonan', App\Livewire\JenisPermohonan\Index::class)->name('jenis-permohonan.index');
    Route::get('/pegawai', App\Livewire\Pegawai\Index::class)->name('pegawai.index');

    Route::middleware('check.category')->group(function () {
        Route::resource('/referensi', \App\Http\Controllers\ReferensiController::class)->except(['index', 'show']);
        Route::get('/referensi', App\Livewire\Referensi\Index::class)->name('referensi.index');
    });

    Route::prefix('keb-nkeb')->group(function () {
        Route::get('/permohonan-keb-nkeb', App\Livewire\KebNkeb\Permohonan\Index::class)->name('permohonan-keb-nkeb.index');
        Route::get('/permohonan-keb-nkeb/import', App\Livewire\KebNkeb\Permohonan\Import::class)->name('permohonan-keb-nkeb.import');
        Route::get('/penelitian-formal', App\Livewire\KebNkeb\PenelitianFormal\Index::class)->name('penelitian-formal.index');
        Route::get('/spid-pembahasan', App\Livewire\KebNkeb\SpidPembahasan\Index::class)->name('spid-pembahasan.index');
        Route::get('/spuh', App\Livewire\KebNkeb\Spuh\Index::class)->name('spuh.index');
        Route::get('/data-keputusan', App\Livewire\KebNkeb\DataKeputusan\Index::class)->name('data-keputusan.index');
        Route::get('/kriteria-permohonan', App\Livewire\KebNkeb\KriteriaPermohonan\Index::class)->name('kriteria-permohonan.index');
        Route::get('/data-pengiriman', App\Livewire\KebNkeb\DataPengiriman\Index::class)->name('data-pengiriman.index');

        Route::resource('/permohonan-keb-nkeb', PermohonanKEBNKEBController::class)->except(['index', 'show']);
        Route::resource('/penelitian-formal', PenelitianFormalController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::resource('/spid-pembahasan', SPIDPembahasanController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::resource('/spuh', SPUHController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::resource('/data-keputusan', DataKeputusanController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::resource('/kriteria-permohonan', KriteriaPermohonanController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::resource('/data-pengiriman', DataPengirimanController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::get('/permohonan-keb-nkeb/{id}/preview', [PermohonanKEBNKEBController::class, 'preview'])->name('permohonan-keb-nkeb.preview');
        Route::get('/data-keputusan/{id}/preview', [DataKeputusanController::class, 'preview'])->name('data-keputusan.preview');
    });
    Route::prefix('sub-stg')->group(function () {
        Route::get('/input-permintaan', App\Livewire\SubStg\InputPermintaan\Index::class)->name('input-permintaan');
        Route::get('/surat-jawaban', App\Livewire\SubStg\SuratJawaban\Index::class)->name('surat-jawaban');
        Route::get('/pengiriman', App\Livewire\SubStg\Pengiriman\Index::class)->name('pengiriman');

        Route::resource('/input-permintaan', InputPermintaanController::class)->except(['index', 'show']);
        Route::resource('/surat-jawaban', SuratJawabanController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
        Route::resource('/pengiriman', PengirimanController::class)->except(['index', 'create', 'store', 'show', 'destroy']);
    });
    Route::prefix('statistik')->group(function () {
        Route::get('/berkas-masuk-selesai/masuk', App\Livewire\Statistik\BerkasMasukSelesai\Masuk::class)->name('berkas-masuk-selesai.masuk');
        Route::get('/berkas-masuk-selesai/selesai', App\Livewire\Statistik\BerkasMasukSelesai\Selesai::class)->name('berkas-masuk-selesai.selesai');
        Route::get('/distribusi-berkas/penelaah-keberatan', App\Livewire\Statistik\DistribusiBerkas\PenelaahKeberatan::class)->name('distribusi-berkas.penelaah-keberatan');
        Route::get('/distribusi-berkas/seksi', App\Livewire\Statistik\DistribusiBerkas\Seksi::class)->name('distribusi-berkas.seksi');
        Route::get('/amar-putusan', App\Livewire\Statistik\AmarPutusan\Index::class)->name('amar-putusan');
        Route::get('/list-tunggakan-keb-nkeb', App\Livewire\Statistik\ListTunggakanKebNKeb\Index::class)->name('list-tunggakan-keb-nkeb.index');
        Route::get('/list-tunggakan-sub-stg', App\Livewire\Statistik\ListTunggakanSubStg\Index::class)->name('list-tunggakan-sub-stg');
    });
    Route::prefix('monitoring')->name('monitoring.')->group(function () {
        Route::get('/pengiriman-kep-surat', App\Livewire\Monitoring\PengirimanSurat::class)->name('pengiriman-kep-surat');
        Route::get('/jatuh-tempo-berkas', App\Livewire\Monitoring\JatuhTempoBerkas::class)->name('jatuh-tempo-berkas');
        Route::get('/pencarian-sk', App\Livewire\Monitoring\PencarianSk::class)->name('pencarian-sk');
    });
    Route::prefix('cetak')->group(function () {
        Route::get('/template-map', App\Livewire\Cetak\TemplateMap\Index::class)->name('template-map.index');
        Route::post('/template-map/npwp', [App\Http\Controllers\Cetak\TemplateMapController::class, 'cetakNpwp'])->name('template-map.npwp');
        Route::post('/template-map/tanggal', [App\Http\Controllers\Cetak\TemplateMapController::class, 'cetakTanggal'])->name('template-map.tanggal');
    });
    Route::prefix('user')->name('user.')->group(function () {
        Route::get('/kata-sandi', App\Livewire\User\KataSandi::class)->name('kata-sandi');
    });
});

Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
