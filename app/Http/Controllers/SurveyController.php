<?php

namespace App\Http\Controllers;

use App\Http\Requests\SurveyRequest;
use App\Http\Requests\WorkspaceRequest;
use App\Models\Survey;
use App\Models\Workspace;
use DeepCopy\Filter\ReplaceFilter;
use Illuminate\Http\Response;

class SurveyController extends Controller {
    public function store(SurveyRequest $request, Workspace $workspace): Response {
//        $survey = Survey::create($request->validated());
        $survey = $workspace->surveys()->create($request->validated());

        return response([
            "survey" => $survey,
        ]);
    }

    public function update(SurveyRequest $request, Survey $survey): Response {


        return response([

        ]);
    }
}
