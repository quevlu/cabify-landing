<?php

use App\Http\Controllers\ProspectContorller;
use Illuminate\Support\Facades\Route;

Route::post('/prospects', [ProspectContorller::class, 'store']);
