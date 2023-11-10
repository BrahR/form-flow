<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkspaceRequest;
use App\Models\User;
use App\Models\Workspace;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class WorkspaceController extends Controller {
    public function index(): Response {
        /** @var $user User **/
        $user = Auth::user();
        $workspaces = $user->workspaces;

        return response([
            "workspaces" => $workspaces
        ]);
    }

    public function store(WorkspaceRequest $request): Response {
        $workspace = Workspace::create($request->validated());
        $workspace->users()->attach(auth()->user());

        return response([
            "workspace" => $workspace,
        ]);
    }
}
