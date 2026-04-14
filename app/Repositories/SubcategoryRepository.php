<?php

namespace App\Repositories;

use App\Models\Subcategory;
use App\Repositories\Interfaces\SubcategoryRepositoryInterface;

class SubcategoryRepository implements SubcategoryRepositoryInterface
{
    

    public function getSubcategories(){

        return Subcategory::orderBy('id', 'desc')
            ->with('category.family')
            ->paginate(10);
    }

    public function getAllSubcategories(){

        return Subcategory::all();
    }

  

}








?>


