<?php 

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\Interfaces\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    
    public function getProducts(){

        $products = Product::with('subcategory.category.family')
                ->orderBy('id', 'desc')
                ->paginate(10);

        return $products;        
    }


    public function getAllProducts(){

        $products = Product::all();

        return $products;
    }



}







?>
