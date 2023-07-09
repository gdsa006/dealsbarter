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
Route::get('categories/home/random', 'CategoryController@getRandomCategories');

Route::apiResource('listings', ListingController::class)->middleware('auth:api');
// Route::apiResource('users', UserController::class);

Route::get('category/listings/{id}', 'ListingController@showListingsByCategory');
Route::get('manage/categories', 'CategoryController@manageCategoriesByCategory');
// Route::get('listings', 'UserController@login');

Route::get('users', 'UserController@index');
Route::get('users/me', 'UserController@show')->middleware('auth:api');
Route::post('users/update', 'UserController@update')->middleware('auth:api');

Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout')->middleware('auth:api');
Route::post('register', 'UserController@register');

Route::get('checkAdminStatus', 'UserController@checkAdminStatus')->middleware('auth:api');
Route::get('checkLoginStatus', 'UserController@checkLoginStatus')->middleware('auth:api');
