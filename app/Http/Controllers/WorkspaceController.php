<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkspaceRequest;
use App\Http\Resources\WorkspaceResource;
use App\Models\Workspace;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\ResourceCollection;

class WorkspaceController extends Controller
{
    public function index(): ResourceCollection
    {
        $user = auth()->user();
        $workspaces = $user->workspaces()->with("surveys")->get();

        return WorkspaceResource::collection($workspaces);
    }

    public function store(WorkspaceRequest $request): WorkspaceResource
    {
        return new WorkspaceResource(Workspace::create($request->validated()));
    }

    public function show(Workspace $workspace): WorkspaceResource
    {
        return new WorkspaceResource($workspace->load("surveys"));
    }

    public function update(WorkspaceRequest $request, Workspace $workspace): WorkspaceResource
    {
        $workspace->update($request->validated());

        return new WorkspaceResource($workspace);
    }

    public function destroy(Workspace $workspace): JsonResponse
    {
        $workspace->delete();

        return response()->json();
    }
}
