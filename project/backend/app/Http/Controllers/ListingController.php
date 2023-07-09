<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Subcategory;
use Illuminate\Support\Str;

class ListingController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10); // Number of items per page, default to 10
        $listings = Listing::with('images')->paginate($perPage);
        return response()->json($listings);
    }


    public function showListingsByCategory($identifier)
    {
        // Check if the identifier is numeric, indicating it's the subcat_id
        if (is_numeric($identifier)) {
            $subcatId = $identifier;
        } else {
            // Find the subcategory ID based on the slug
            $subcategory = Subcategory::where('slug', $identifier)->first();

            if (!$subcategory) {
                return response()->json(['error' => 'Subcategory not found'], 404);
            }

            $subcatId = $subcategory->id;
        }

        // Retrieve the listings based on the subcat_id
        $listings = Listing::with('images')->where('subcategory_id', $subcatId)->get();

        return response()->json($listings);
    }

    public function store(Request $request)
    {
        $user = auth()->user();

        $data = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'user_type' => 'required',
            'business_type' => 'required',
            'posted_by' => 'required',
            'subcategory_id' => 'required',
            'subcategory2_id' => 'required',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $images = [];

        foreach ($request->file('images') as $image) {
            $imagePath = $image->store('listings', 'public');

            $images[] = [
                'image' => $imagePath,
            ];
        }

        $slug = Str::slug($data['title']); // Generate slug from the title
        $slugCount = 0;

        while (Listing::where('slug', $slug)->exists()) {
            $slugCount++;
            $slug = Str::slug($data['title']) . '-' . $slugCount;
        }

        $listing = Listing::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_type' => $data['user_type'],
            'business_type' => $data['business_type'],
            'posted_by' => $data['posted_by'],
            'subcategory_id' => $data['subcategory_id'],
            'subcategory2_id' => $data['subcategory2_id'],
            'slug' => $slug, // Save the generated slug
            'user_id' => $user->id,
            'approved' => '0'
            // Add other fields as necessary
        ]);

        $listing->images()->createMany($images);

        return response()->json($listing, 201);
    }


    public function show($identifier)
    {
        if (is_numeric($identifier)) {
            // Find the listing by ID
            $listing = Listing::with('images')->find($identifier);

            if (!$listing) {
                return response()->json(['error' => 'Listing not found'], 404);
            }
        } else {
            // Find the listing by slug
            $listing = Listing::with('images')->where('slug', $identifier)->first();

            if (!$listing) {
                return response()->json(['error' => 'Listing not found'], 404);
            }
        }

        return response()->json($listing);
    }

    public function update(Request $request, Listing $listing)
    {
        $listing->update($request->all());
        return response()->json($listing);
    }

    public function destroy(Listing $listing)
    {
        $listing->delete();
        return response()->json(null, 204);
    }
}
