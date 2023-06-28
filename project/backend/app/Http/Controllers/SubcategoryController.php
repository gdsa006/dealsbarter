<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Subcategory;

class SubcategoryController extends Controller
{
    public function index(Category $category)
    {
        $subcategories = $category->subcategories;
        return response()->json($subcategories);
    }

    public function store(Request $request, Category $category)
    {
        $subcategory = $category->subcategories()->create($request->all());
        return response()->json($subcategory, 201);
    }

    public function show(Category $category, Subcategory $subcategory)
    {
        return response()->json($subcategory);
    }

    public function update(Request $request, Category $category, Subcategory $subcategory)
    {
        $subcategory->update($request->all());
        return response()->json($subcategory);
    }

    public function destroy(Category $category, Subcategory $subcategory)
    {
        $subcategory->delete();
        return response()->json(null, 204);
    }
}
