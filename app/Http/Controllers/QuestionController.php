<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Models\Survey;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class QuestionController extends Controller
{
  public function index(Survey $survey): ResourceCollection
  {
    $questions = $survey->questions()->get();
    return QuestionResource::collection($questions);
  }

  public function store(QuestionRequest $request, Survey $survey): QuestionResource | array
  {
    $validated = $request->validated();

    $class = "App\\Models\\Questions\\" . $validated["type"];
    $question = $survey->questions()->make($validated["question"]);
    $questionable = $class::create($validated["questionable"]);
    $question->questionable()->associate($questionable)->save();

    return new QuestionResource($question);
  }

  public function show(Question $question): QuestionResource
  {
    return new QuestionResource($question);
  }

  public function update(QuestionRequest $request, Question $question): QuestionResource
  {
    $question->update($request->validated());

    return new QuestionResource($question);
  }

  public function destroy(Survey $survey, Question $question): JsonResponse
  {
    if ($question->questionable) {
      $question->questionable->delete();
    }

    $question->delete();

    return response()->json();
  }
}
