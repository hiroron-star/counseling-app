<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $posts = Post::query()
            ->latest('id')
            ->limit(30)
            ->get([
                'id',
                'title',
                'location',
                'age_group as age',
                'gender',
                'snippet',
                'comment_count',
                'status',
            ]);

        $totalCount = Post::count();

        return Inertia::render('Posts/Index', [
            'posts' => $posts,
            'totalCount' => $totalCount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Posts/Create', [
            'ageGroups' => $this->ageGroups(),
            'genders' => $this->genders(),
            'statuses' => $this->statuses(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request): RedirectResponse
    {
        $data = $request->validated();
        $data['comment_count'] = $data['comment_count'] ?? 0;

        Post::create($data);

        return redirect()
            ->route('posts.index')
            ->with('success', '投稿を作成しました。');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post): Response
    {
        return Inertia::render('Posts/Edit', [
            'post' => $post->only([
                'id',
                'title',
                'location',
                'age_group',
                'gender',
                'snippet',
                'comment_count',
                'status',
            ]),
            'ageGroups' => $this->ageGroups(),
            'genders' => $this->genders(),
            'statuses' => $this->statuses(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post): RedirectResponse
    {
        $data = $request->validated();
        $data['comment_count'] = $data['comment_count'] ?? 0;

        $post->update($data);

        return redirect()
            ->route('posts.index')
            ->with('success', '投稿を更新しました。');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post): RedirectResponse
    {
        $post->delete();

        return redirect()
            ->route('posts.index')
            ->with('success', '投稿を削除しました。');
    }

    protected function ageGroups(): array
    {
        return [
            '10代前半',
            '10代後半',
            '20代前半',
            '20代後半',
            '30代前半',
            '30代後半',
            '40代前半',
            '40代後半',
            '50代前半',
            '50代後半',
        ];
    }

    protected function genders(): array
    {
        return ['男性', '女性'];
    }

    protected function statuses(): array
    {
        return [
            ['value' => 'open', 'label' => '受付中'],
            ['value' => 'closed', 'label' => '相談終了'],
        ];
    }
}
