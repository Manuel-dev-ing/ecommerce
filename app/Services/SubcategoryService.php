<?php 

namespace App\Services;

use App\Repositories\Interfaces\SubcategoryRepositoryInterface;

class SubcategoryService
{
    
    protected $subcategoryRepositoryInterface;

    public function __construct(SubcategoryRepositoryInterface $subcategoryRepositoryInterface) {
        $this->subcategoryRepositoryInterface = $subcategoryRepositoryInterface;
    }

    public function getSubcategories(){

        return $this->subcategoryRepositoryInterface->getSubcategories();
    }

    public function getAllSubcategories(){

        return $this->subcategoryRepositoryInterface->getAllSubcategories();
    }

}




?>