<?php 

namespace App\Repositories;

use App\Models\Option;
use App\Repositories\Interfaces\OptionsRepositoryInterface;

class OptionsRepository implements OptionsRepositoryInterface
{
    
    public function getOptions(){

        return Option::with('features')->get();

    } 


}








?>


