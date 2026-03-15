<?php

namespace App\Http\Controllers;

use App\Models\Family;
use App\Services\FamilieService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FamilyController extends Controller
{
    
    protected $familieService;

    public function __construct(FamilieService $familieService) {
        $this->familieService = $familieService;

    }


    public function index(){

        $families = $this->familieService->getFamilies();
        
        // dd($families);

        return Inertia::render('families/index', [
            'families' => $families
        ]);

    }

    public function store(Request $request){

        $request->validate([
            'name' => 'required'
        ]);

        Family::create([
            'name' => $request->name
        ]);

        return redirect()->back()->with('success', 'Familia creada correctamente');
    }

    public function destroy($id){

        $familie = Family::find($id);
        $familie->delete();

        return redirect()->back()->with('success', 'Familia creada correctamente');
    }

    public function update(Request $request, $id){

        // dd($request->all());

        $validated = $request->validate([
            'name' => 'required'
        ]);

        $familie = Family::where('id', $id)->findOrFail($id);

        $familie->update($validated);

        return redirect()->back()->with('success', 'Familia actualizada correctamente');
    }


}
