<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;

class ListingController extends Controller
{
    public function index()
    {
        $listings = Listing::all();
        return response()->json($listings);
    }

    public function store(Request $request)
    {
        $listing = Listing::create($request->all());
        return response()->json($listing, 201);
    }

    public function show(Listing $listing)
    {
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
