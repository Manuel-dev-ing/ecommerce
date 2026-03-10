<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    


    public function store(Request $request){

        $request->validate([
            'value' => 'required',
            'description' => 'required',
            'option_id' => 'required'
        ]);
        // dd($request->all());
        Feature::create([
            'value' => $request->value,
            'description' => $request->description,
            'option_id' => $request->option_id
        ]);

        return redirect()->back()->with('success', 'Feature creada correctamente');
    }

    public function update(Request $request, $id){

        // dd($request->all());

        $validated = $request->validate([
            'value' => 'required',
            'description' => 'required',
            'option_id' => 'required'
        ]);

        $feature = Feature::where('id', $id)->findOrFail($id);
        $feature->update($validated);
        
        return redirect()->back()->with('success', 'Feature actualizada correctamente');

    }

    public function destroy($id){

        $feature = Feature::find($id);
        $feature->delete();

        return redirect()->back()->with('success', 'Feature creada correctamente');

    }

}
