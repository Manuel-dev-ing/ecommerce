<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Variant;
use App\Services\OptionService;
use App\Services\ProductService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VariantsController extends Controller
{
    protected $productService;
    protected $optionService;

    public function __construct(ProductService $productService, OptionService $optionService) {
        
        $this->productService = $productService;
        $this->optionService = $optionService;

    }

    public function index(){

        $products = $this->productService->getAllProducts();
        $options = $this->optionService->listOptions();

        return Inertia::render('variants/index', [
            'products' => $products,
            'options' => $options

        ]);
    }

    public function store(Request $request){

        foreach ($request->all() as $item) {
            # code...
            $variant = Variant::create([
                'product_id' => $item['id_producto'], 
                'sku' => $item['sku'],
                'stock' => $item['stock'] 
            ]);
            
            foreach ($item['options'] as $value) {
                $variant->features()->attach($value['feature_id']);
                # code...
            }
            
            
        }

        return redirect()->back()->with('success', 'Variantes creadas correctamente');

    }

    public function save(Request $request){
        $array_options = [];
        
        // dd($request->all());
        foreach ($request->all() as $item) {
            $array = [];

            foreach ($item['options'] as $value) {
                
                array_push($array, $value['option_id']);
            }

            array_push($array_options, $array);
            $array = [];
        }

        // foreach ($request->all() as $item) {
        //     $id = $item['id_producto'];
        // }
        ['id_producto' => $id] = $request->all()[0];         
        $product = Product::find($id);
        
        
        // dd($value);
        
        foreach ($array_options[0] as $value) {

            foreach ($request->all() as $item) {
                // dd();
                $product->options()->attach($value, [
                    'features' => $item["options"]
                ]);
            }

            
        }





    }


}
