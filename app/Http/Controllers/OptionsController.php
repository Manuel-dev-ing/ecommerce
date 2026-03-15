<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Services\OptionService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OptionsController extends Controller
{

    protected $optionService;

    public function __construct(OptionService $optionService) {
        $this->optionService = $optionService;

    }

    public function index(){

        $options = $this->optionService->listOptions();

        return Inertia::render('options/index',[
            'options' => $options
        ]);
        
    }

    public function store(Request $request){

        $request->validate([
            'name' => 'required',
            'type' => 'required',
        ]);

        Option::create([
            'name' => $request->name,
            'type' => $request->type
        ]);


        return redirect()->back()->with('success', 'Opcion creada correctamente');
    }

    public function destroy($id){

        $option = Option::find($id);
        $option->delete();

        return redirect()->back()->with('success', 'Opcion eliminada correctamente');
    }


    public function update(Request $request, $id){
        $validation = $request->validate([
            'name' => 'required',
            'type' => 'required',
        ]);

        $option = Option::where('id', $id)->findOrFail($id);
        $option->update($validation);

        return redirect()->back()->with('success', 'Opcion actualizada correctamente');
    }

}
