<?php 

namespace App\Services;

use App\Repositories\Interfaces\CategoryRepositoryInterface;

class CategoryService
{
    
    protected $IcategoryRepositoryInterface;

    public function __construct(CategoryRepositoryInterface $categoryRepositoryInterface) {
        $this->IcategoryRepositoryInterface = $categoryRepositoryInterface;
    }

    public function getCategories(){

        $categories = $this->IcategoryRepositoryInterface->getCategories();

        return $categories;
    }


    public function getAllCategories(){

        $categories_all = $this->IcategoryRepositoryInterface->getAllCategories();

        return $categories_all;
    }


}







?>