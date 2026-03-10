<?php

use App\Http\Controllers\FeatureController;
use App\Http\Controllers\OptionsController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products', [ProductsController::class, 'index'])->name('products.index');

// Options
Route::get('/options', [OptionsController::class, 'index'])->name('options.index');
Route::post('/options', [OptionsController::class, 'store'])->name('options.store');
Route::delete('/options/{id}', [OptionsController::class, 'destroy'])->name('options.destroy');
Route::put('/options/{id}', [OptionsController::class, 'update'])->name('options.update');

// Features
Route::post('/features', [FeatureController::class, 'store'])->name("features.store");
Route::delete('/features/{id}', [FeatureController::class, 'destroy'])->name("features.destroy");
Route::put('/features/{id}', [FeatureController::class, 'update'])->name("features.update");

require __DIR__.'/settings.php';
