<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\RankingRequest;
use App\Http\Resources\questions\RankingResource;
use App\Models\Questions\Ranking;

class RankingController extends Controller
{
    public function index()
    {
        return RankingResource::collection(Ranking::all());
    }

    public function store(RankingRequest $request)
    {
        return new RankingResource(Ranking::create($request->validated()));
    }

    public function show(Ranking $ranking)
    {
        return new RankingResource($ranking);
    }

    public function update(RankingRequest $request, Ranking $ranking)
    {
        $ranking->update($request->validated());

        return new RankingResource($ranking);
    }

    public function destroy(Ranking $ranking)
    {
        $ranking->delete();

        return response()->json();
    }
}
