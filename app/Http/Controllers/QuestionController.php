<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Models\Survey;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Application;
use Illuminate\Http\Response;
use App\Models\WelcomeQuestion;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Survey $survey): Response
    {
        $questions = $survey->questions()->get();

        return response([
            "questions" => $questions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuestionRequest $request, Survey $survey): Application | Response | \Illuminate\Contracts\Foundation\Application | ResponseFactory
    {
        $validated = $request->validated();

        $question = $survey->questions()->make($validated["question"]);
        $questonable = WelcomeQuestion::create($validated["questionable"]);
        $question->questionable()->associate($questonable)->save();

        dump($question);

        return response([
            "question" => $question,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}