<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/counsel/kaunse', function () {
    return Inertia::render('Counsel/Index');
});
