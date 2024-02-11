<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\GeneralTextRequest;
use App\Http\Resources\questions\GeneralTextResource;
use App\Models\Questions\GeneralText;

class GeneralTextController extends Controller
{
    public function index()
    {
        return GeneralTextResource::collection(GeneralText::all());
    }

    public function store(GeneralTextRequest $request)
    {
        return new GeneralTextResource(GeneralText::create($request->validated()));
    }

    public function show(GeneralText $generalText)
    {
        return new GeneralTextResource($generalText);
    }

    public function update(GeneralTextRequest $request, GeneralText $generalText)
    {
        $generalText->update($request->validated());

        return new GeneralTextResource($generalText);
    }

    public function destroy(GeneralText $generalText)
    {
        $generalText->delete();

        return response()->json();
    }
}
