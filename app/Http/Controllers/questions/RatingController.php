<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\RatingRequest;
use App\Http\Resources\questions\RatingResource;
use App\Models\Questions\Rating;

class RatingController extends Controller
{
    public function index()
    {
        return RatingResource::collection(Rating::all());
    }

    public function store(RatingRequest $request)
    {
        return new RatingResource(Rating::create($request->validated()));
    }

    public function show(Rating $rating)
    {
        return new RatingResource($rating);
    }

    public function update(RatingRequest $request, Rating $rating)
    {
        $rating->update($request->validated());

        return new RatingResource($rating);
    }

    public function destroy(Rating $rating)
    {
        $rating->delete();

        return response()->json();
    }
}
