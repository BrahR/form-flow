<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\WelcomeRequest;
use App\Http\Resources\questions\WelcomeResource;
use App\Models\Questions\Welcome;

class WelcomeController extends Controller
{
    public function index()
    {
        return WelcomeResource::collection(Welcome::all());
    }

    public function store(WelcomeRequest $request)
    {
        return new WelcomeResource(Welcome::create($request->validated()));
    }

    public function show(Welcome $welcome)
    {
        return new WelcomeResource($welcome);
    }

    public function update(WelcomeRequest $request, Welcome $welcome)
    {
        $welcome->update($request->validated());

        return new WelcomeResource($welcome);
    }

    public function destroy(Welcome $welcome)
    {
        $welcome->delete();

        return response()->json();
    }
}
