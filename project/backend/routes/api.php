<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::apiResource('categories', CategoryController::class);
Route::apiResource('categories.subcategories', SubcategoryController::class)->shallow();
Route::apiResource('listings', ListingController::class);


Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout')->middleware('auth:api');
Route::post('register', 'UserController@register');
