<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with('subcategories.listings')->get();
        return response()->json($categories);
    }

    public function manageCategoriesByCategory()
    {
        $categories = Category::withCount('subcategories')
            ->with(['subcategories' => function ($query) {
                $query->withCount('listings');
            }])
            ->paginate(5); // Adjust the number of categories to display per page

        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the allowed image file types and maximum size as needed
        ]);

        $imagePath = $request->file('image')->store('categories', 'public'); // Store the uploaded image in the 'categories' directory

        $category = new Category();
        $category->name = $request->input('name');
        $category->slug = Str::slug($request->input('name'));
        $category->image = $imagePath;
        $category->save();

        return response()->json($category, 201);
    }

    public function show(Category $category)
    {
        return response()->json($category);
    }

    public function update(Request $request, Category $category)
    {
        $category->update($request->all());
        return response()->json($category);
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(null, 204);
    }

    public function getRandomCategories()
    {
        $randomCategories = Category::inRandomOrder()->take(6)->get();
        return response()->json($randomCategories);
    }
}
