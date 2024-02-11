<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\OpinionScaleRequest;
use App\Http\Resources\questions\OpinionScaleResource;
use App\Models\Questions\OpinionScale;

class OpinionScaleController extends Controller
{
    public function index()
    {
        return OpinionScaleResource::collection(OpinionScale::all());
    }

    public function store(OpinionScaleRequest $request)
    {
        return new OpinionScaleResource(OpinionScale::create($request->validated()));
    }

    public function show(OpinionScale $opinionScale)
    {
        return new OpinionScaleResource($opinionScale);
    }

    public function update(OpinionScaleRequest $request, OpinionScale $opinionScale)
    {
        $opinionScale->update($request->validated());

        return new OpinionScaleResource($opinionScale);
    }

    public function destroy(OpinionScale $opinionScale)
    {
        $opinionScale->delete();

        return response()->json();
    }
}
