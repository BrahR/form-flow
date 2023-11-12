<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use App\Models\User;
use App\Models\Workspace;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller {
    public function index(): Response {
        /* @var $user User */
        $user = Auth::user();
        $workspaces = $user->workspaces()->with("surveys")->get();

        return response([
            "workspaces" => $workspaces
        ]);
    }
}
