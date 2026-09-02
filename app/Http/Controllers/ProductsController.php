<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\CategoryService;
use App\Services\FamilieService;
use App\Services\ProductService;
use App\Services\SubcategoryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductsController extends Controller
{

    protected $subcategoryService;
    protected $familieService;
    protected $categoryService;
    protected $productService;

    public function __construct(SubcategoryService $subcategoryService, FamilieService $familieService, CategoryService $categoryService, ProductService $productService) {

        $this->familieService = $familieService;
        $this->categoryService = $categoryService;
        $this->subcategoryService = $subcategoryService;
        $this->productService = $productService;

    }
    
    public function index(){

        $products = $this->productService->getProducts();
        $families = $this->familieService->getAllFamilies();
        $categories = $this->categoryService->getAllCategories();
      
        return Inertia::render('products/index', [
            'products' => $products,
            'families' => $families,
            'categories' => $categories

        ]);

    }

    public function show($id){

        return Inertia::render('products/show',[

        ]);

    }


    public function create(){

        $families = $this->familieService->getAllFamilies();
        $categories = $this->categoryService->getAllCategories();
        $subCategory = $this->subcategoryService->getAllSubcategories();

        return Inertia::render('products/create', [
            'families' => $families,
            'categories' => $categories,
            'subCategory' => $subCategory
        ]);
    }

    public function store(Request $request){
        // dd($request->all());

        $request->validate([
            'sku' => 'required',
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'subcategory_id' => 'required',
        ]);

        if ($request->file('image_path') == null) {
            $path = null;

        }else{

            $path = $request->file('image_path')->store('covers', 'public');
        
        }


        Product::create([
            'sku' => $request->sku,
            'name' => $request->name,
            'description' => $request->description,
            'image_path' => $path,
            'price' => $request->price,
            'subcategory_id' => $request->subcategory_id,
            'status' => $request->status
        ]);

        return Redirect::route('products.index');

    }

    public function edit(Product $product){

        $product->load('subcategory.category.family');

        $families = $this->familieService->getAllFamilies();
        $categories = $this->categoryService->getAllCategories();
        $subCategory = $this->subcategoryService->getAllSubcategories();

        $product->image_path = $product->image_path ? Storage::url($product->image_path) : null;

        return Inertia::render('products/edit', [
            'product' => $product,
            'families' => $families,
            'categories' => $categories,
            'subCategory' => $subCategory
        ]);
        
    }


    public function destroy($id){

        $product = Product::find($id);
        $product->status = 0;
        $product->save();

        return redirect()->back()->with('success', 'Producto eliminado correctamente');

    }


    public function update(Request $request, $id){

        


        $validated = $request->validate([
            'sku' => 'required',
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'subcategory_id' => 'required',
            'status' => 'required',
        ]);

        $product = Product::where('id', $id)->findOrFail($id);
        $path = $product->image_path;    
        
        if ($request->hasFile('image')) {
            if ($product->image_path) {
                Storage::disk('public')->delete($product->image_path);
            }
            
            $path = $request->file('image')->store('products', 'public');
            
            
        }
        
        $product->image_path = $path;
        

        $product->update($validated);

        return Redirect::route('products.index');

    }


}
