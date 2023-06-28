<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->api_token;

            return response()->json(['api_token' => $token, 'username' => $user->name, 'id' => $user->id], 200);
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
    
        return response()->json(['api_token' => $user->api_token, 'id' => $user->id, 'username' => $user->username
    
    ], 201);
    }

    
    
    
    
}
