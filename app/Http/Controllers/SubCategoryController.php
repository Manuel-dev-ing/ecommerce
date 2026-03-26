<?php

namespace App\Http\Controllers;

use App\Models\Subcategory;
use App\Services\CategoryService;
use App\Services\FamilieService;
use App\Services\SubcategoryService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    protected $subcategoryService;
    protected $familieService;
    protected $categoryService;


    public function __construct(SubcategoryService $subcategoryService, FamilieService $familieService, CategoryService $categoryService) 
    {
        $this->subcategoryService = $subcategoryService;
        $this->familieService = $familieService;
        $this->categoryService = $categoryService;
    }

    public function index(){

        $subCategory = $this->subcategoryService->getSubcategories();
        $families = $this->familieService->getAllFamilies();
        $categories = $this->categoryService->getAllCategories();

        return Inertia::render('subcategories/index', [
            "subCategory" => $subCategory,
            "families" => $families,
            "categories" => $categories
        ]);      
    }

    public function store(Request $request){

        $request->validate([
            'name' => 'required',
            'category_id' => 'numeric|required'
        ]);


        Subcategory::create([
            'name' => $request->name,
            'category_id' => $request->category_id
        ]);

        return redirect()->back()->with('success', 'SubCategoria creada correctamente');
    }

    public function destroy($id){

        $subcategory = Subcategory::find($id);

        $subcategory->delete();

        return redirect()->back()->with('success', 'SubCategoria eliminada correctamente');
    }

    public function update(Request $request, $id){

        $validated = $request->validate([
            'name' => 'required',
            'category_id' => 'numeric|required'
        ]);

        $Subcategory = Subcategory::where('id', $id)->findOrFail($id);

        $Subcategory->update($validated);

        return redirect()->back()->with('success', 'SubCategoria actualizada correctamente');
    }



}
