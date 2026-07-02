<?php

namespace App\Http\Controllers;

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

        dd($request->all());

    }


}
