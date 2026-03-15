<?php 

namespace App\Services;

use App\Repositories\Interfaces\FamilieRepositoryInterface;

class FamilieService 
{
    protected $IRepositoryFamilie;

    public function __construct(FamilieRepositoryInterface $familieRepositoryInterface) {
        $this->IRepositoryFamilie = $familieRepositoryInterface;
    }



    public function getFamilies(){

        return $this->IRepositoryFamilie->getFamilies();
    }




}














?>