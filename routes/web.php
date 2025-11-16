<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $posts = Post::query()
        ->latest('id')
        ->limit(9)
        ->get([
            'id',
            'title',
            'location',
            'age_group as age',
            'gender',
            'snippet',
            'comment_count',
        ]);

    return Inertia::render('Dashboard/Index', [
        'posts' => $posts,
    ]);
});

Route::get('/dashboard', function () {
    $posts = Post::query()
        ->latest('id')
        ->limit(9)
        ->get([
            'id',
            'title',
            'location',
            'age_group as age',
            'gender',
            'snippet',
            'comment_count',
        ]);

    return Inertia::render('Dashboard/Index', [
        'posts' => $posts,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('posts', PostController::class);

require __DIR__.'/auth.php';
