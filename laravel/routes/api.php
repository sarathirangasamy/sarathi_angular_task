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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



	Route::get('/bfx-detail', 'Api\BFXController@index');
	Route::post('/store-bfx', 'Api\BFXController@store');
	Route::get('/edit-tag/{id}', 'Api\BFXController@edit');
	Route::post('/update-bfx/{id}', 'Api\BFXController@update');
	Route::delete('/delete-bfx/{id}', 'Api\BFXController@destroy');