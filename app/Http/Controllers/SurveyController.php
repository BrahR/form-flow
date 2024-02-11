<?php

namespace App\Http\Controllers;

use App\Http\Requests\SurveyRequest;
use App\Http\Resources\SurveyResource;
use App\Models\Survey;
use App\Models\Workspace;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SurveyController extends Controller
{
  public function index(Workspace $workspace): ResourceCollection
  {
    return SurveyResource::collection($workspace->surveys()->with("questions")->get());
  }

  public function store(SurveyRequest $request, Workspace $workspace): SurveyResource
  {
    return new SurveyResource($workspace->surveys()->create($request->validated()));
  }

  public function show(Survey $survey): SurveyResource
  {
    return new SurveyResource($survey->load("questions"));
  }

  public function update(SurveyRequest $request, Survey $survey): SurveyResource
  {
    $survey->update($request->validated());

    return new SurveyResource($survey);
  }

  public function destroy(Survey $survey): JsonResponse
  {
    $survey->delete();

    return response()->json();
  }
}
