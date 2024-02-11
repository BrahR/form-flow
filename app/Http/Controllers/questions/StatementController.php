<?php

namespace App\Http\Controllers\questions;

use App\Http\Controllers\Controller;
use App\Http\Requests\questions\StatementRequest;
use App\Http\Resources\questions\StatementResource;
use App\Models\Questions\Statement;

class StatementController extends Controller
{
    public function index()
    {
        return StatementResource::collection(Statement::all());
    }

    public function store(StatementRequest $request)
    {
        return new StatementResource(Statement::create($request->validated()));
    }

    public function show(Statement $statement)
    {
        return new StatementResource($statement);
    }

    public function update(StatementRequest $request, Statement $statement)
    {
        $statement->update($request->validated());

        return new StatementResource($statement);
    }

    public function destroy(Statement $statement)
    {
        $statement->delete();

        return response()->json();
    }
}
