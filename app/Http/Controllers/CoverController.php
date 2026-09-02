<?php

namespace App\Http\Controllers;

use App\Models\Cover;
use App\Models\Product;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoverController extends Controller
{
    
    protected $productService;


    public function __construct(ProductService $productService) {
        $this->productService = $productService;
    }

    public function index(){

        $products = $this->productService->getAllProducts();

        return Inertia::render('covers/index', [
            'products' => $products
        ]);
    }

    public function store(Request $request){
        
        // dd($request->file('selectedImages')[0]->getClientOriginalName());
        
        $product = $request->all()['product'];
        // $images = $request->all()['selectedImages'];
        // $images_paths = [];

        $prod = Product::find($product['id']);         
        
        if ($request->hasFile('selectedImages')) {

            foreach ($request->file('selectedImages') as $item) {
                
                $path = $item->store('covers', 'public');
                $name = $item->getClientOriginalName();
                $fecha = now()->format('Y-m-d');

                $prod->covers()->create(["image_path" => $path, 'title' => $name, 'start_at' => $fecha]);

            }
        }

        // dd("Las portadas fueron creadas correctamente");

        
        return redirect()->back()->with('success', 'Las portadas fueron creadas correctamente');
    }


}
