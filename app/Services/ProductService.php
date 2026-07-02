<?php 

namespace App\Services;

use App\Repositories\Interfaces\ProductRepositoryInterface;

class ProductService
{

    protected $ProductsRepositoryInterface;
    
    public function __construct(ProductRepositoryInterface $ProductsRepositoryInterface) {
        $this->ProductsRepositoryInterface = $ProductsRepositoryInterface;
    }


    public function getProducts(){

        return $this->ProductsRepositoryInterface->getProducts();
    }


    public function getAllProducts(){


        return $this->ProductsRepositoryInterface->getAllProducts();
    }
    


}












?>




