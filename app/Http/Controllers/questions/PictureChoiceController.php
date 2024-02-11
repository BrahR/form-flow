<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\PictureChoiceRequest;
use App\Http\Resources\questions\PictureChoiceResource;
use App\Models\Questions\PictureChoice;

class PictureChoiceController extends Controller
{
    public function index()
    {
        return PictureChoiceResource::collection(PictureChoice::all());
    }

    public function store(PictureChoiceRequest $request)
    {
        return new PictureChoiceResource(PictureChoice::create($request->validated()));
    }

    public function show(PictureChoice $pictureChoice)
    {
        return new PictureChoiceResource($pictureChoice);
    }

    public function update(PictureChoiceRequest $request, PictureChoice $pictureChoice)
    {
        $pictureChoice->update($request->validated());

        return new PictureChoiceResource($pictureChoice);
    }

    public function destroy(PictureChoice $pictureChoice)
    {
        $pictureChoice->delete();

        return response()->json();
    }
}
