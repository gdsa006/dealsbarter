<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10); // Number of items per page, default to 10
        $users = User::paginate($perPage);
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function show(Request $request)
    {
        $user = auth()->user();
        return response()->json($user);
    }

    public function update(Request $request)
{
    $user = auth()->user();
    $user->update($request->except('profile_photo'));

    if ($request->hasFile('profile_photo')) {
        // Delete the old profile photo if exists
        if ($user->profile_photo) {
            Storage::delete($user->profile_photo);
        }

        // Upload and store the new profile photo
        $profilePhotoPath = $request->file('profile_photo')->store('profile-photos', 'public');
        $user->profile_photo = $profilePhotoPath;
    }

    $user->name = $user->first_name . ' ' . $user->last_name;
    $user->save();

    return response()->json($user);
}

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->api_token;

            return response()->json(['token' => $token, 'username' => $user->name, 'id' => $user->id], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'password' => 'required|min:6',
            'how_hear_about_us' => 'nullable|string|max:255',
            'about' => 'nullable|string|max:255', // Add the "about" field validation rules
            'profile_photo' => 'nullable|string|max:255', // Add the "about" field validation rules
        ]);

        $validatedData['name'] = $validatedData['first_name'] . ' ' . $validatedData['last_name'];
        $validatedData['password'] = bcrypt($request->password);
        $validatedData['api_token'] = Str::random(60); // Generate a random API token

        // Check if the user already exists
        $existingUser = User::where('email', $validatedData['email'])->first();
        if ($existingUser) {
            return response()->json(['error' => 'User already exists'], 201);
        }

        $user = User::create($validatedData);

        // Assign the "admin" role to the user if their email domain is "@dealsbarter"
        if (strpos($user->email, '@dealsbarter') !== false) {
            $adminRole = Role::where('slug', 'admin')->first();
            $user->roles()->attach($adminRole);
        }

        return response()->json([
            'token' => $user->api_token,
            'id' => $user->id,
            'username' => $user->username
        ], 201);
    }

    public function checkAdminStatus()
    {
        $user = Auth::user();
        $isAdmin = $user->roles()->where('slug', 'admin')->exists();

        return response()->json(['isAdmin' => $isAdmin]);
    }

    public function checkLoginStatus(Request $request)
    {
        $isLoggedIn = $request->user() ? true : false;
        return response()->json(['isLoggedIn' => $isLoggedIn]);
    }
}
