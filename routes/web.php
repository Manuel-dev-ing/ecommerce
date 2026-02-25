<?php

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

Route::get('/options', [OptionsController::class, 'index'])->name('options.index');


require __DIR__.'/settings.php';
