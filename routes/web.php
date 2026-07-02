<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FamilyController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\OptionsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\VariantsController;
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

//Products
Route::get('/products', [ProductsController::class, 'index'])->name('products.index');
Route::get('/products/create', [ProductsController::class, 'create'])->name('products.create');
Route::post('/products', [ProductsController::class, 'store'])->name('products.store');

Route::get('/products/{product}/edit', [ProductsController::class, 'edit'])->name('products.edit');
Route::delete('/products/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');
Route::put('/products/{id}', [ProductsController::class, 'update'])->name('products.update');


// Options
Route::get('/options', [OptionsController::class, 'index'])->name('options.index');
Route::post('/options', [OptionsController::class, 'store'])->name('options.store');
Route::delete('/options/{id}', [OptionsController::class, 'destroy'])->name('options.destroy');
Route::put('/options/{id}', [OptionsController::class, 'update'])->name('options.update');

// Features
Route::post('/features', [FeatureController::class, 'store'])->name("features.store");
Route::delete('/features/{id}', [FeatureController::class, 'destroy'])->name("features.destroy");
Route::put('/features/{id}', [FeatureController::class, 'update'])->name("features.update");

//Families
Route::get('/families', [FamilyController::class, 'index'])->name('families.index');
Route::post('/families', [FamilyController::class, 'store'])->name('families.store');
Route::delete('/families/{id}', [FamilyController::class, 'destroy'])->name('families.destroy');
Route::put('/families/{id}', [FamilyController::class, 'update'])->name('families.update');

//Categories
Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
Route::delete('/categories/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy');
Route::put('/categories/{id}', [CategoryController::class, 'update'])->name('categories.update');

//SubCategories
Route::get('/subcategories', [SubCategoryController::class, 'index'])->name('subcategories.index');
Route::post('/subcategories', [SubCategoryController::class, 'store'])->name('subcategories.store');
Route::delete('/subcategories/{id}', [SubCategoryController::class, 'destroy'])->name('subcategories.destroy');
Route::put('/subcategories/{id}', [SubCategoryController::class, 'update'])->name('subcategories.update');


// Variants
Route::get('/variants', [VariantsController::class, 'index'])->name('variants.index');
Route::post('/variants', [VariantsController::class, 'store'])->name('variants.store');



require __DIR__.'/settings.php';
