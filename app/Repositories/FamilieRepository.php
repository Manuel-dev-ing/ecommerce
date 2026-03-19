<?php 

namespace App\Repositories;

use App\Models\Family;
use App\Repositories\Interfaces\FamilieRepositoryInterface;

class FamilieRepository implements FamilieRepositoryInterface
{


    public function getFamilies(){

        return Family::orderBy('id', 'desc')->paginate(10);
    }

    public function getAllFamilies(){

        return Family::all();
    }



    
}








?>