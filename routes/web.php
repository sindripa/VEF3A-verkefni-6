<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/steve_jobs', function () {
    return view('steve');
});

Route::get('/img', function () {
    return view('images');
});

Route::get('/bio', function () {
    return view('biography');
});