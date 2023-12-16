<?php

namespace App\Policies;

use App\Models\User;
use App\Models\WelcomeQuestion;
use Illuminate\Auth\Access\Response;

class WelcomeQuestionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, WelcomeQuestion $welcomeQuestion): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, WelcomeQuestion $welcomeQuestion): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, WelcomeQuestion $welcomeQuestion): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, WelcomeQuestion $welcomeQuestion): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, WelcomeQuestion $welcomeQuestion): bool
    {
        //
    }
}
