<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\MultipleChoiceRequest;
use App\Http\Resources\questions\MultipleChoiceResource;
use App\Models\Questions\MultipleChoice;

class MultipleChoiceController extends Controller
{
    public function index()
    {
        return MultipleChoiceResource::collection(MultipleChoice::all());
    }

    public function store(MultipleChoiceRequest $request)
    {
        return new MultipleChoiceResource(MultipleChoice::create($request->validated()));
    }

    public function show(MultipleChoice $multipleChoice)
    {
        return new MultipleChoiceResource($multipleChoice);
    }

    public function update(MultipleChoiceRequest $request, MultipleChoice $multipleChoice)
    {
        $multipleChoice->update($request->validated());

        return new MultipleChoiceResource($multipleChoice);
    }

    public function destroy(MultipleChoice $multipleChoice)
    {
        $multipleChoice->delete();

        return response()->json();
    }
}
