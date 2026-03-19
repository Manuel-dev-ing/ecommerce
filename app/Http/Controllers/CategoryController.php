<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Services\CategoryService;
use App\Services\FamilieService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    
    protected $categoryService;
    protected $familyService;

    public function __construct(CategoryService $categoryService, FamilieService $familieService) {
        $this->categoryService = $categoryService;
        $this->familyService = $familieService;
    }
    

    public function index(){

        $categories = $this->categoryService->getCategories();
        $families = $this->familyService->getAllFamilies();


        return Inertia::render('categories/index', [
            'categories' => $categories,
            'families' => $families
        ]);

    }

    public function store(Request $request){

        $request->validate([
            'name' => 'required',
            'family_id' => 'required'
        ]);
        
        Category::create([
            'name' => $request->name,
            'family_id' => $request->family_id
        ]);


        return redirect()->back()->with('success', 'Categoria creada correctamente');
    }

    public function destroy($id){

        $category = Category::find($id);

        $category->delete();

        return redirect()->back()->with('success', 'Categoria eliminada correctamente');

    }

    public function update(Request $request, $id){

        $validated = $request->validate([
            'name' => 'required',
            'family_id' => 'required'
        ]);

        $category = Category::where('id', $id)->findOrFail($id);

        $category->update($validated);

        return redirect()->back()->with('success', 'Categoria actualizada correctamente');

    }


}
