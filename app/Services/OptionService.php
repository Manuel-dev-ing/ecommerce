<?php 

namespace App\Services;

use App\Repositories\Interfaces\OptionsRepositoryInterface;

class OptionService
{
    protected $IRepositoryOption;

    public function __construct(OptionsRepositoryInterface $IRepositoryOption) {
        $this->IRepositoryOption = $IRepositoryOption;

    }


    public function listOptions(){

        return $this->IRepositoryOption->getOptions();
    }


}



?>



