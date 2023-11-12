<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkspaceRequest;
use App\Models\Workspace;
use Illuminate\Http\Response;

class SurveyController extends Controller {
    public function store(WorkspaceRequest $request, Workspace $workspace): Response {
//        $survey = Survey::create($request->validated());
        $survey = $workspace->surveys()->create($request->validated());

        return response([
            "survey" => $survey,
        ]);
    }}
