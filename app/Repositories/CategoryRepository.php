<?php 

namespace App\Repositories;

use App\Models\Category;
use App\Repositories\Interfaces\CategoryRepositoryInterface;

class CategoryRepository implements CategoryRepositoryInterface
{
    
    public function getCategories(){

        return Category::with('family')
                ->orderBy('id', 'desc')
                ->paginate(10);
    }

    public function getAllCategories(){
        return Category::all();
    }


}





?>

